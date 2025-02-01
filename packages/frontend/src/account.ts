/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { defineAsyncComponent, reactive, ref } from 'vue';
import * as Misskey from 'misskey-js';
import { set as gtagSet, time as gtagTime } from 'vue-gtag';
import { showSuspendedDialog } from '@/scripts/show-suspended-dialog.js';
import { i18n } from '@/i18n.js';
import { miLocalStorage } from '@/local-storage.js';
import { MenuButton } from '@/types/menu.js';
import { del, get, set } from '@/scripts/idb-proxy.js';
import { apiUrl } from '@/config.js';
import { waiting, popup, popupMenu, success, alert } from '@/os.js';
import { generateClientTransactionId, misskeyApi } from '@/scripts/misskey-api.js';
import { unisonReload, reloadChannel } from '@/scripts/unison-reload.js';
import { instance } from '@/instance.js';

// TODO: 他のタブと永続化されたstateを同期

type Account = Misskey.entities.MeDetailed & { token: string };

const accountData = miLocalStorage.getItem('account');

// TODO: 外部からはreadonlyに
export const $i = accountData ? reactive(JSON.parse(accountData) as Account) : null;

export const iAmModerator = $i != null && ($i.isAdmin === true || $i.isModerator === true);
export const iAmAdmin = $i != null && $i.isAdmin;

export function signinRequired() {
	if ($i == null) throw new Error('signin required');
	return $i;
}

export let notesCount = $i == null ? 0 : $i.notesCount;
export function incNotesCount() {
	notesCount++;
}

export async function signout() {
	if (!$i) return;

	waiting();
	document.cookie.split(';').forEach((cookie) => {
		const cookieName = cookie.split('=')[0].trim();
		if (cookieName === 'token') {
			document.cookie = `${cookieName}=; max-age=0; path=/`;
		}
	});
	miLocalStorage.removeItem('account');
	await removeAccount($i.id);
	const accounts = await getAccounts();

	//#region Remove service worker registration
	try {
		if (navigator.serviceWorker.controller) {
			const registration = await navigator.serviceWorker.ready;
			const push = await registration.pushManager.getSubscription();
			if (push) {
				const initiateTime = Date.now();
				await window.fetch(`${apiUrl}/sw/unregister`, {
					method: 'POST',
					body: JSON.stringify({
						i: $i.token,
						endpoint: push.endpoint,
					}),
					headers: {
						'Content-Type': 'application/json',
						'X-Client-Transaction-Id': generateClientTransactionId('misskey'),
					},
				}).then(() => {
					if (instance.googleAnalyticsId) {
						gtagTime({
							name: 'api',
							event_category: '/sw/unregister',
							value: Date.now() - initiateTime,
						});
					}
				});
			}
		}

		if (accounts.length === 0) {
			await navigator.serviceWorker.getRegistrations()
				.then(registrations => {
					return Promise.all(registrations.map(registration => registration.unregister()));
				});
		}
	} catch (err) {}
	//#endregion

	if (accounts.length > 0) login(accounts[0].token);
	else unisonReload('/');
}

export async function getAccounts(): Promise<{ id: Account['id'], token: Account['token'] }[]> {
	return (await get('accounts')) || [];
}

export async function addAccount(id: Account['id'], token: Account['token']) {
	const accounts = await getAccounts();
	if (!accounts.some(x => x.id === id)) {
		await set('accounts', accounts.concat([{ id, token }]));
	}
}

export async function removeAccount(idOrToken: Account['id']) {
	const accounts = await getAccounts();
	const i = accounts.findIndex(x => x.id === idOrToken || x.token === idOrToken);
	if (i !== -1) accounts.splice(i, 1);

	if (accounts.length > 0) {
		await set('accounts', accounts);
	} else {
		await del('accounts');
	}
}

function fetchAccount(token: string, id?: string, forceShowDialog?: boolean): Promise<Account> {
	document.cookie = "token=; path=/; max-age=0";
	document.cookie = `token=${token}; path=/queue; max-age=86400; SameSite=Strict; Secure`; // bull dashboardの認証とかで使う

	return new Promise((done, fail) => {
		const initiateTime = Date.now();
		window.fetch(`${apiUrl}/i`, {
			method: 'POST',
			body: JSON.stringify({
				i: token,
			}),
			headers: {
				'Content-Type': 'application/json',
				'X-Client-Transaction-Id': generateClientTransactionId('misskey'),
			},
		})
			.then(res => {
				if (instance.googleAnalyticsId) {
					gtagTime({
						name: 'api',
						event_category: '/i',
						value: Date.now() - initiateTime,
					});
				}
				return res;
			})
			.then(res => new Promise<Account | { error: Record<string, any> }>((done2, fail2) => {
				if (res.status >= 500 && res.status < 600) {
					// サーバーエラー(5xx)の場合をrejectとする
					// （認証エラーなど4xxはresolve）
					return fail2(res);
				}
				res.json().then(done2, fail2);
			}))
			.then(async res => {
				if (res.error) {
					if (res.error.id === 'a8c724b3-6e9c-4b46-b1a8-bc3ed6258370') {
						// SUSPENDED
						if (forceShowDialog || $i && (token === $i.token || id === $i.id)) {
							await showSuspendedDialog();
						}
					} else if (res.error.id === 'e5b3b9f0-2b8f-4b9f-9c1f-8c5c1b2e1b1a') {
						// USER_IS_DELETED
						// アカウントが削除されている
						if (forceShowDialog || $i && (token === $i.token || id === $i.id)) {
							await alert({
								type: 'error',
								title: i18n.ts.accountDeleted,
								text: i18n.ts.accountDeletedDescription,
							});
						}
					} else if (res.error.id === 'b0a7f5f8-dc2f-4171-b91f-de88ad238e14') {
						// AUTHENTICATION_FAILED
						// トークンが無効化されていたりアカウントが削除されたりしている
						if (forceShowDialog || $i && (token === $i.token || id === $i.id)) {
							await alert({
								type: 'error',
								title: i18n.ts.tokenRevoked,
								text: i18n.ts.tokenRevokedDescription,
							});
						}
					} else {
						await alert({
							type: 'error',
							title: i18n.ts.failedToFetchAccountInformation,
							text: JSON.stringify(res.error),
						});
					}

					// rejectかつ理由がtrueの場合、削除対象であることを示す
					fail(true);
				} else {
					(res as Account).token = token;
					done(res as Account);
				}
			})
			.catch(fail);
	});
}

export function updateAccount(accountData: Partial<Account>) {
	if (!$i) return;
	for (const [key, value] of Object.entries(accountData)) {
		$i[key] = value;
	}
	miLocalStorage.setItem('account', JSON.stringify($i));
	if (instance.googleAnalyticsId) {
		gtagSet({
			'client_id': miLocalStorage.getItem('id'),
			'user_id': $i.id,
		});
	}
}

export async function refreshAccount() {
	if (!$i) return;
	return fetchAccount($i.token, $i.id)
		.then(updateAccount, reason => {
			if (reason === true) return signout();
			return;
		});
}

export async function login(token: Account['token'], redirect?: string) {
	const showing = ref(true);
	popup(defineAsyncComponent(() => import('@/components/MkWaitingDialog.vue')), {
		success: false,
		showing: showing,
	}, {}, 'closed');
	if (_DEV_) console.log('logging as token ', token);
	const me = await fetchAccount(token, undefined, true)
		.catch(reason => {
			if (reason === true) {
				// 削除対象の場合
				removeAccount(token);
			}

			showing.value = false;
			throw reason;
		});
	miLocalStorage.setItem('account', JSON.stringify(me));
	await addAccount(me.id, token);

	if (redirect) {
		// 他のタブは再読み込みするだけ
		reloadChannel.postMessage(null);
		// このページはredirectで指定された先に移動
		location.href = redirect;
		return;
	}

	unisonReload();
}

export async function openAccountMenu(opts: {
	includeCurrentAccount?: boolean;
	withExtraOperation: boolean;
	active?: Misskey.entities.UserDetailed['id'];
	onChoose?: (account: Misskey.entities.UserDetailed) => void;
}, ev: MouseEvent) {
	if (!$i) return;

	async function switchAccount(account: Misskey.entities.UserDetailed) {
		const storedAccounts = await getAccounts();
		const found = storedAccounts.find(x => x.id === account.id);
		if (found == null) return;
		switchAccountWithToken(found.token);
	}

	function switchAccountWithToken(token: string) {
		login(token);
	}

	const storedAccounts = await getAccounts().then(accounts => accounts.filter(x => x.id !== $i.id));
	const accountsPromise = misskeyApi('users/show', { userIds: storedAccounts.map(x => x.id) });

	function createItem(account: Misskey.entities.UserDetailed) {
		return {
			type: 'user' as const,
			user: account,
			active: opts.active != null ? opts.active === account.id : false,
			action: () => {
				if (opts.onChoose) {
					opts.onChoose(account);
				} else {
					switchAccount(account);
				}
			},
		};
	}

	const accountItemPromises = storedAccounts.map(a => new Promise<ReturnType<typeof createItem> | MenuButton>(res => {
		accountsPromise.then(accounts => {
			const account = accounts.find(x => x.id === a.id);
			if (account == null) return res({
				type: 'button' as const,
				text: a.id,
				action: () => {
					switchAccountWithToken(a.token);
				},
			});

			res(createItem(account));
		});
	}));

	if (opts.withExtraOperation) {
		popupMenu([...[{
			type: 'link' as const,
			text: i18n.ts.profile,
			to: `/@${ $i.username }`,
			avatar: $i,
		}, { type: 'divider' as const }, ...(opts.includeCurrentAccount ? [createItem($i)] : []), ...accountItemPromises, {
			type: 'parent' as const,
			icon: 'ti ti-plus',
			text: i18n.ts.addAccount,
			children: [{
				text: i18n.ts.existingAccount,
				action: () => {
					getAccountWithSigninDialog().then(res => {
						if (res != null) {
							success();
						}
					});
				},
			}, {
				text: i18n.ts.createAccount,
				action: () => {
					getAccountWithSignupDialog().then(res => {
						if (res != null) {
							switchAccountWithToken(res.token);
						}
					});
				},
			}],
		}, {
			type: 'link' as const,
			icon: 'ti ti-users',
			text: i18n.ts.manageAccounts,
			to: '/settings/accounts',
		}]], ev.currentTarget ?? ev.target, {
			align: 'left',
		});
	} else {
		popupMenu([...(opts.includeCurrentAccount ? [createItem($i)] : []), ...accountItemPromises], ev.currentTarget ?? ev.target, {
			align: 'left',
		});
	}
}

export function getAccountWithSigninDialog(): Promise<{ id: string, token: string } | null> {
	return new Promise((resolve) => {
		const { dispose } = popup(defineAsyncComponent(() => import('@/components/MkSigninDialog.vue')), {}, {
			done: async (res: Misskey.entities.SigninFlowResponse & { finished: true }) => {
				await addAccount(res.id, res.i);
				resolve({ id: res.id, token: res.i });
			},
			cancelled: () => {
				resolve(null);
			},
			closed: () => {
				dispose();
			},
		});
	});
}

export function getAccountWithSignupDialog(): Promise<{ id: string, token: string } | null> {
	return new Promise((resolve) => {
		const { dispose } = popup(defineAsyncComponent(() => import('@/components/MkSignupDialog.vue')), {}, {
			done: async (res: Misskey.entities.SignupResponse) => {
				await addAccount(res.id, res.token);
				resolve({ id: res.id, token: res.token });
			},
			cancelled: () => {
				resolve(null);
			},
			closed: () => {
				dispose();
			},
		});
	});
}

if (_DEV_) {
	(window as any).$i = $i;
}
