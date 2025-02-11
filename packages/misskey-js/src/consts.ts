export const notificationTypes = ['note', 'follow', 'mention', 'reply', 'renote', 'quote', 'reaction', 'pollVote', 'pollEnded', 'receiveFollowRequest', 'followRequestAccepted', 'groupInvited', 'app', 'roleAssigned', 'achievementEarned', 'noteScheduled', 'scheduledNotePosted', 'scheduledNoteError'] as const;

export const noteVisibilities = ['public', 'home', 'followers', 'specified'] as const;

export const mutedNoteReasons = ['word', 'manual', 'spam', 'other'] as const;

export const followingVisibilities = ['public', 'followers', 'private'] as const;

export const followersVisibilities = ['public', 'followers', 'private'] as const;

export const permissions = [
	'read:account',
	'write:account',
	'read:blocks',
	'write:blocks',
	'read:drive',
	'write:drive',
	'read:favorites',
	'write:favorites',
	'read:following',
	'write:following',
	'read:messaging',
	'write:messaging',
	'read:mutes',
	'write:mutes',
	'write:notes',
	'read:notifications',
	'write:notifications',
	'read:reactions',
	'write:reactions',
	'write:votes',
	'read:pages',
	'write:pages',
	'write:page-likes',
	'read:page-likes',
	'read:user-groups',
	'write:user-groups',
	'read:channels',
	'write:channels',
	'read:gallery',
	'write:gallery',
	'read:gallery-likes',
	'write:gallery-likes',
	'read:flash',
	'write:flash',
	'read:flash-likes',
	'write:flash-likes',
	'read:admin:abuse-user-reports',
	'read:admin:abuse-report-resolvers',
	'write:admin:abuse-report-resolvers',
	'read:admin:index-stats',
	'read:admin:table-stats',
	'read:admin:user-ips',
	'read:admin:meta',
	'write:admin:reset-password',
	'write:admin:regenerate-user-token',
	'write:admin:resolve-abuse-user-report',
	'write:admin:send-email',
	'read:admin:server-info',
	'read:admin:show-moderation-log',
	'read:admin:show-account-move-log',
	'read:admin:show-user',
	'read:admin:show-users',
	'write:admin:suspend-user',
	'write:admin:unsuspend-user',
	'write:admin:meta',
	'write:admin:user-name',
	'write:admin:user-note',
	'write:admin:user-avatar',
	'write:admin:user-banner',
	'write:admin:user-mutual-link',
	'write:admin:roles',
	'read:admin:roles',
	'write:admin:relays',
	'read:admin:relays',
	'write:admin:invite-codes',
	'read:admin:invite-codes',
	'write:admin:announcements',
	'read:admin:announcements',
	'write:admin:avatar-decorations',
	'read:admin:avatar-decorations',
	'write:admin:federation',
	'write:admin:indie-auth',
	'read:admin:indie-auth',
	'write:admin:account',
	'read:admin:account',
	'write:admin:emoji',
	'read:admin:emoji',
	'write:admin:queue',
	'read:admin:queue',
	'write:admin:promo',
	'write:admin:drive',
	'read:admin:drive',
	'write:admin:sso',
	'read:admin:sso',
	'write:admin:ad',
	'read:admin:ad',
	'write:invite-codes',
	'read:invite-codes',
	'write:clip-favorite',
	'read:clip-favorite',
	'read:federation',
	'write:report-abuse',
] as const;

export const moderationLogTypes = [
	'updateServerSettings',
	'suspend',
	'unsuspend',
	'updateUserName',
	'updateUserNote',
	'addCustomEmoji',
	'updateCustomEmoji',
	'deleteCustomEmoji',
	'assignRole',
	'unassignRole',
	'createRole',
	'updateRole',
	'deleteRole',
	'clearQueue',
	'promoteQueue',
	'deleteDriveFile',
	'deleteNote',
	'createGlobalAnnouncement',
	'createUserAnnouncement',
	'updateGlobalAnnouncement',
	'updateUserAnnouncement',
	'deleteGlobalAnnouncement',
	'deleteUserAnnouncement',
	'resetPassword',
	'regenerateUserToken',
	'suspendRemoteInstance',
	'unsuspendRemoteInstance',
	'updateRemoteInstanceNote',
	'markSensitiveDriveFile',
	'unmarkSensitiveDriveFile',
	'resolveAbuseReport',
	'createInvitation',
	'createAd',
	'updateAd',
	'deleteAd',
	'createIndieAuthClient',
	'updateIndieAuthClient',
	'deleteIndieAuthClient',
	'createSSOServiceProvider',
	'updateSSOServiceProvider',
	'deleteSSOServiceProvider',
	'createAvatarDecoration',
	'updateAvatarDecoration',
	'deleteAvatarDecoration',
	'unsetUserAvatar',
	'unsetUserBanner',
	'unsetUserMutualBanner',
] as const;

export type ModerationLogPayloads = {
	updateServerSettings: {
		before: any | null;
		after: any | null;
	};
	suspend: {
		userId: string;
		userUsername: string;
		userHost: string | null;
	};
	unsuspend: {
		userId: string;
		userUsername: string;
		userHost: string | null;
	};
	updateUserName: {
		userId: string;
		userUsername: string;
		userHost: string | null;
		before: string | null;
		after: string | null;
	}
	updateUserNote: {
		userId: string;
		userUsername: string;
		userHost: string | null;
		before: string | null;
		after: string | null;
	};
	addCustomEmoji: {
		emojiId: string;
		emoji: any;
	};
	updateCustomEmoji: {
		emojiId: string;
		before: any;
		after: any;
	};
	deleteCustomEmoji: {
		emojiId: string;
		emoji: any;
	};
	assignRole: {
		userId: string;
		userUsername: string;
		userHost: string | null;
		roleId: string;
		roleName: string;
		expiresAt: string | null;
		memo: string | null;
	};
	unassignRole: {
		userId: string;
		userUsername: string;
		userHost: string | null;
		roleId: string;
		roleName: string;
		memo: string | null;
	};
	createRole: {
		roleId: string;
		role: any;
	};
	updateRole: {
		roleId: string;
		before: any;
		after: any;
	};
	deleteRole: {
		roleId: string;
		role: any;
	};
	clearQueue: Record<string, never>;
	promoteQueue: Record<string, never>;
	deleteDriveFile: {
		fileId: string;
		fileUserId: string | null;
		fileUserUsername: string | null;
		fileUserHost: string | null;
	};
	deleteNote: {
		noteId: string;
		noteUserId: string;
		noteUserUsername: string;
		noteUserHost: string | null;
		note: any;
	};
	createGlobalAnnouncement: {
		announcementId: string;
		announcement: any;
	};
	createUserAnnouncement: {
		announcementId: string;
		announcement: any;
		userId: string;
		userUsername: string;
		userHost: string | null;
	};
	updateGlobalAnnouncement: {
		announcementId: string;
		before: any;
		after: any;
	};
	updateUserAnnouncement: {
		announcementId: string;
		before: any;
		after: any;
		userId: string;
		userUsername: string;
		userHost: string | null;
	};
	deleteGlobalAnnouncement: {
		announcementId: string;
		announcement: any;
	};
	deleteUserAnnouncement: {
		announcementId: string;
		announcement: any;
		userId: string;
		userUsername: string;
		userHost: string | null;
	};
	resetPassword: {
		userId: string;
		userUsername: string;
		userHost: string | null;
	};
	regenerateUserToken: {
		userId: string;
		userUsername: string;
		userHost: string | null;
	};
	suspendRemoteInstance: {
		id: string;
		host: string;
	};
	unsuspendRemoteInstance: {
		id: string;
		host: string;
	};
	updateRemoteInstanceNote: {
		id: string;
		host: string;
		before: string | null;
		after: string | null;
	};
	markSensitiveDriveFile: {
		fileId: string;
		fileUserId: string | null;
		fileUserUsername: string | null;
		fileUserHost: string | null;
	};
	unmarkSensitiveDriveFile: {
		fileId: string;
		fileUserId: string | null;
		fileUserUsername: string | null;
		fileUserHost: string | null;
	};
	resolveAbuseReport: {
		reportId: string;
		report: any;
		forwarded: boolean;
	};
	createInvitation: {
		invitations: any[];
	};
	createAd: {
		adId: string;
		ad: any;
	};
	updateAd: {
		adId: string;
		before: any;
		after: any;
	};
	deleteAd: {
		adId: string;
		ad: any;
	};
	createIndieAuthClient: {
		clientId: string;
		client: any;
	};
	updateIndieAuthClient: {
		clientId: string;
		before: any;
		after: any;
	};
	deleteIndieAuthClient: {
		clientId: string;
		client: any;
	};
	createSSOServiceProvider: {
		serviceId: string;
		service: any;
	};
	updateSSOServiceProvider: {
		serviceId: string;
		before: any;
		after: any;
	};
	deleteSSOServiceProvider: {
		serviceId: string;
		service: any;
	};
	createAvatarDecoration: {
		avatarDecorationId: string;
		avatarDecoration: any;
	};
	updateAvatarDecoration: {
		avatarDecorationId: string;
		before: any;
		after: any;
	};
	deleteAvatarDecoration: {
		avatarDecorationId: string;
		avatarDecoration: any;
	};
	unsetUserAvatar: {
		userId: string;
		userUsername: string;
		userHost: string | null;
		fileId: string;
	};
	unsetUserBanner: {
		userId: string;
		userUsername: string;
		userHost: string | null;
		fileId: string;
	};
	unsetUserMutualLink: {
		userId: string;
		userUsername: string;
		mutualLinkSections: string;
	};
};
