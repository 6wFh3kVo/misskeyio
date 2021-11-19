"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class chartV21615965918224 {
    constructor() {
        this.name = 'chartV21615965918224';
    }
    async up(queryRunner) {
        await queryRunner.query(`DELETE FROM "__chart__active_users" WHERE "span" = 'day'`);
        await queryRunner.query(`DELETE FROM "__chart__drive" WHERE "span" = 'day'`);
        await queryRunner.query(`DELETE FROM "__chart__federation" WHERE "span" = 'day'`);
        await queryRunner.query(`DELETE FROM "__chart__hashtag" WHERE "span" = 'day'`);
        await queryRunner.query(`DELETE FROM "__chart__instance" WHERE "span" = 'day'`);
        await queryRunner.query(`DELETE FROM "__chart__network" WHERE "span" = 'day'`);
        await queryRunner.query(`DELETE FROM "__chart__notes" WHERE "span" = 'day'`);
        await queryRunner.query(`DELETE FROM "__chart__per_user_drive" WHERE "span" = 'day'`);
        await queryRunner.query(`DELETE FROM "__chart__per_user_following" WHERE "span" = 'day'`);
        await queryRunner.query(`DELETE FROM "__chart__per_user_notes" WHERE "span" = 'day'`);
        await queryRunner.query(`DELETE FROM "__chart__per_user_reaction" WHERE "span" = 'day'`);
        await queryRunner.query(`DELETE FROM "__chart__test" WHERE "span" = 'day'`);
        await queryRunner.query(`DELETE FROM "__chart__test_grouped" WHERE "span" = 'day'`);
        await queryRunner.query(`DELETE FROM "__chart__test_unique" WHERE "span" = 'day'`);
        await queryRunner.query(`DELETE FROM "__chart__users" WHERE "span" = 'day'`);
        await queryRunner.query(`DROP INDEX "IDX_15e91a03aeeac9dbccdf43fc06"`);
        await queryRunner.query(`DROP INDEX "IDX_20f57cc8f142c131340ee16742"`);
        await queryRunner.query(`DROP INDEX "IDX_c26e2c1cbb6e911e0554b27416"`);
        await queryRunner.query(`DROP INDEX "IDX_3fa0d0f17ca72e3dc80999a032"`);
        await queryRunner.query(`DROP INDEX "IDX_6e1df243476e20cbf86572ecc0"`);
        await queryRunner.query(`DROP INDEX "IDX_06690fc959f1c9fdaf21928222"`);
        await queryRunner.query(`DROP INDEX "IDX_e447064455928cf627590ef527"`);
        await queryRunner.query(`DROP INDEX "IDX_2d416e6af791a82e338c79d480"`);
        await queryRunner.query(`DROP INDEX "IDX_e9cd07672b37d8966cf3709283"`);
        await queryRunner.query(`DROP INDEX "IDX_fcc181fb8283009c61cc4083ef"`);
        await queryRunner.query(`DROP INDEX "IDX_49975586f50ed7b800fdd88fbd"`);
        await queryRunner.query(`DROP INDEX "IDX_6d6f156ceefc6bc5f273a0e370"`);
        await queryRunner.query(`DROP INDEX "IDX_c12f0af4a66cdd30c2287ce8aa"`);
        await queryRunner.query(`DROP INDEX "IDX_d0a4f79af5a97b08f37b547197"`);
        await queryRunner.query(`DROP INDEX "IDX_f5448d9633cff74208d850aabe"`);
        await queryRunner.query(`DROP INDEX "IDX_f8dd01baeded2ffa833e0a610a"`);
        await queryRunner.query(`DROP INDEX "IDX_08fac0eb3b11f04c200c0b40dd"`);
        await queryRunner.query(`DROP INDEX "IDX_9ff6944f01acb756fdc92d7563"`);
        await queryRunner.query(`DROP INDEX "IDX_e69096589f11e3baa98ddd64d0"`);
        await queryRunner.query(`DROP INDEX "IDX_0c9a159c5082cbeef3ca6706b5"`);
        await queryRunner.query(`DROP INDEX "IDX_924fc196c80ca24bae01dd37e4"`);
        await queryRunner.query(`DROP INDEX "IDX_328f259961e60c4fa0bfcf55ca"`);
        await queryRunner.query(`DROP INDEX "IDX_42ea9381f0fda8dfe0fa1c8b53"`);
        await queryRunner.query(`DROP INDEX "IDX_f2aeafde2ae6fbad38e857631b"`);
        await queryRunner.query(`DROP INDEX "IDX_f92dd6d03f8d994f29987f6214"`);
        await queryRunner.query(`DROP INDEX "IDX_57b5458d0d3d6d1e7f13d4e57f"`);
        await queryRunner.query(`DROP INDEX "IDX_4db3b84c7be0d3464714f3e0b1"`);
        await queryRunner.query(`DROP INDEX "IDX_8d2cbbc8114d90d19b44d626b6"`);
        await queryRunner.query(`DROP INDEX "IDX_046feeb12e9ef5f783f409866a"`);
        await queryRunner.query(`DROP INDEX "IDX_f68a5ab958f9f5fa17a32ac23b"`);
        await queryRunner.query(`DROP INDEX "IDX_65633a106bce43fc7c5c30a5c7"`);
        await queryRunner.query(`DROP INDEX "IDX_edeb73c09c3143a81bcb34d569"`);
        await queryRunner.query(`DROP INDEX "IDX_e316f01a6d24eb31db27f88262"`);
        await queryRunner.query(`DROP INDEX "IDX_2be7ec6cebddc14dc11e206686"`);
        await queryRunner.query(`DROP INDEX "IDX_a5133470f4825902e170328ca5"`);
        await queryRunner.query(`DROP INDEX "IDX_84e661abb7bd1e51b690d4b017"`);
        await queryRunner.query(`DROP INDEX "IDX_5c73bf61da4f6e6f15bae88ed1"`);
        await queryRunner.query(`DROP INDEX "IDX_d70c86baedc68326be11f9c0ce"`);
        await queryRunner.query(`DROP INDEX "IDX_66e1e1ecd2f29e57778af35b59"`);
        await queryRunner.query(`DROP INDEX "IDX_92255988735563f0fe4aba1f05"`);
        await queryRunner.query(`DROP INDEX "IDX_c5870993e25c3d5771f91f5003"`);
        await queryRunner.query(`DROP INDEX "IDX_f170de677ea75ad4533de2723e"`);
        await queryRunner.query(`DROP INDEX "IDX_7c184198ecf66a8d3ecb253ab3"`);
        await queryRunner.query(`DROP INDEX "IDX_f091abb24193d50c653c6b77fc"`);
        await queryRunner.query(`DROP INDEX "IDX_a770a57c70e668cc61590c9161"`);
        await queryRunner.query(`ALTER TABLE "__chart__active_users" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__active_users_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__active_users" DROP COLUMN "unique"`);
        await queryRunner.query(`ALTER TABLE "__chart__active_users" DROP COLUMN "___local_count"`);
        await queryRunner.query(`ALTER TABLE "__chart__active_users" DROP COLUMN "___remote_count"`);
        await queryRunner.query(`ALTER TABLE "__chart__drive" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__drive_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__drive" DROP COLUMN "unique"`);
        await queryRunner.query(`ALTER TABLE "__chart__federation" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__federation_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__federation" DROP COLUMN "unique"`);
        await queryRunner.query(`ALTER TABLE "__chart__hashtag" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__hashtag_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__hashtag" DROP COLUMN "unique"`);
        await queryRunner.query(`ALTER TABLE "__chart__hashtag" DROP COLUMN "___local_count"`);
        await queryRunner.query(`ALTER TABLE "__chart__hashtag" DROP COLUMN "___remote_count"`);
        await queryRunner.query(`ALTER TABLE "__chart__instance" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__instance_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__instance" DROP COLUMN "unique"`);
        await queryRunner.query(`ALTER TABLE "__chart__network" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__network_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__network" DROP COLUMN "unique"`);
        await queryRunner.query(`ALTER TABLE "__chart__notes" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__notes_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__notes" DROP COLUMN "unique"`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_drive" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__per_user_drive_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_drive" DROP COLUMN "unique"`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_following" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__per_user_following_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_following" DROP COLUMN "unique"`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_notes" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__per_user_notes_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_notes" DROP COLUMN "unique"`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_reaction" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__per_user_reaction_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_reaction" DROP COLUMN "unique"`);
        await queryRunner.query(`ALTER TABLE "__chart__test_grouped" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__test_grouped_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__test_grouped" DROP COLUMN "unique"`);
        await queryRunner.query(`ALTER TABLE "__chart__test_unique" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__test_unique_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__test_unique" DROP COLUMN "unique"`);
        await queryRunner.query(`ALTER TABLE "__chart__test_unique" DROP COLUMN "___foo"`);
        await queryRunner.query(`ALTER TABLE "__chart__test" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__test_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__test" DROP COLUMN "unique"`);
        await queryRunner.query(`ALTER TABLE "__chart__users" DROP COLUMN "span"`);
        await queryRunner.query(`DROP TYPE "public"."__chart__users_span_enum"`);
        await queryRunner.query(`ALTER TABLE "__chart__users" DROP COLUMN "unique"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "__chart__users" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__users_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__users" ADD "span" "__chart__users_span_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__test" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__test_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__test" ADD "span" "__chart__test_span_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__test_unique" ADD "___foo" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__test_unique" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__test_unique_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__test_unique" ADD "span" "__chart__test_unique_span_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__test_grouped" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__test_grouped_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__test_grouped" ADD "span" "__chart__test_grouped_span_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_reaction" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__per_user_reaction_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_reaction" ADD "span" "__chart__per_user_reaction_span_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_notes" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__per_user_notes_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_notes" ADD "span" "__chart__per_user_notes_span_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_following" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__per_user_following_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_following" ADD "span" "__chart__per_user_following_span_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_drive" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__per_user_drive_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__per_user_drive" ADD "span" "__chart__per_user_drive_span_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__notes" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__notes_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__notes" ADD "span" "__chart__notes_span_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__network" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__network_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__network" ADD "span" "__chart__network_span_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__instance" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__instance_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__instance" ADD "span" "__chart__instance_span_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__hashtag" ADD "___remote_count" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__hashtag" ADD "___local_count" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__hashtag" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__hashtag_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__hashtag" ADD "span" "__chart__hashtag_span_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__federation" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__federation_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__federation" ADD "span" "__chart__federation_span_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__drive" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__drive_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__drive" ADD "span" "__chart__drive_span_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__active_users" ADD "___remote_count" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__active_users" ADD "___local_count" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "__chart__active_users" ADD "unique" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."__chart__active_users_span_enum" AS ENUM('hour', 'day')`);
        await queryRunner.query(`ALTER TABLE "__chart__active_users" ADD "span" "__chart__active_users_span_enum" NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_a770a57c70e668cc61590c9161" ON "__chart__users" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_f091abb24193d50c653c6b77fc" ON "__chart__users" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_7c184198ecf66a8d3ecb253ab3" ON "__chart__users" ("span") `);
        await queryRunner.query(`CREATE INDEX "IDX_f170de677ea75ad4533de2723e" ON "__chart__test" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_c5870993e25c3d5771f91f5003" ON "__chart__test" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_92255988735563f0fe4aba1f05" ON "__chart__test" ("span") `);
        await queryRunner.query(`CREATE INDEX "IDX_66e1e1ecd2f29e57778af35b59" ON "__chart__test_unique" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_d70c86baedc68326be11f9c0ce" ON "__chart__test_unique" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_5c73bf61da4f6e6f15bae88ed1" ON "__chart__test_unique" ("span") `);
        await queryRunner.query(`CREATE INDEX "IDX_84e661abb7bd1e51b690d4b017" ON "__chart__test_grouped" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_a5133470f4825902e170328ca5" ON "__chart__test_grouped" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_2be7ec6cebddc14dc11e206686" ON "__chart__test_grouped" ("span") `);
        await queryRunner.query(`CREATE INDEX "IDX_e316f01a6d24eb31db27f88262" ON "__chart__per_user_reaction" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_edeb73c09c3143a81bcb34d569" ON "__chart__per_user_reaction" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_65633a106bce43fc7c5c30a5c7" ON "__chart__per_user_reaction" ("span") `);
        await queryRunner.query(`CREATE INDEX "IDX_f68a5ab958f9f5fa17a32ac23b" ON "__chart__per_user_notes" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_046feeb12e9ef5f783f409866a" ON "__chart__per_user_notes" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_8d2cbbc8114d90d19b44d626b6" ON "__chart__per_user_notes" ("span") `);
        await queryRunner.query(`CREATE INDEX "IDX_4db3b84c7be0d3464714f3e0b1" ON "__chart__per_user_following" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_57b5458d0d3d6d1e7f13d4e57f" ON "__chart__per_user_following" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_f92dd6d03f8d994f29987f6214" ON "__chart__per_user_following" ("span") `);
        await queryRunner.query(`CREATE INDEX "IDX_f2aeafde2ae6fbad38e857631b" ON "__chart__per_user_drive" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_42ea9381f0fda8dfe0fa1c8b53" ON "__chart__per_user_drive" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_328f259961e60c4fa0bfcf55ca" ON "__chart__per_user_drive" ("span") `);
        await queryRunner.query(`CREATE INDEX "IDX_924fc196c80ca24bae01dd37e4" ON "__chart__notes" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_0c9a159c5082cbeef3ca6706b5" ON "__chart__notes" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_e69096589f11e3baa98ddd64d0" ON "__chart__notes" ("span") `);
        await queryRunner.query(`CREATE INDEX "IDX_9ff6944f01acb756fdc92d7563" ON "__chart__network" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_08fac0eb3b11f04c200c0b40dd" ON "__chart__network" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_f8dd01baeded2ffa833e0a610a" ON "__chart__network" ("span") `);
        await queryRunner.query(`CREATE INDEX "IDX_f5448d9633cff74208d850aabe" ON "__chart__instance" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_d0a4f79af5a97b08f37b547197" ON "__chart__instance" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_c12f0af4a66cdd30c2287ce8aa" ON "__chart__instance" ("span") `);
        await queryRunner.query(`CREATE INDEX "IDX_6d6f156ceefc6bc5f273a0e370" ON "__chart__hashtag" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_49975586f50ed7b800fdd88fbd" ON "__chart__hashtag" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_fcc181fb8283009c61cc4083ef" ON "__chart__hashtag" ("span") `);
        await queryRunner.query(`CREATE INDEX "IDX_e9cd07672b37d8966cf3709283" ON "__chart__federation" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_2d416e6af791a82e338c79d480" ON "__chart__federation" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_e447064455928cf627590ef527" ON "__chart__federation" ("span") `);
        await queryRunner.query(`CREATE INDEX "IDX_06690fc959f1c9fdaf21928222" ON "__chart__drive" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_6e1df243476e20cbf86572ecc0" ON "__chart__drive" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_3fa0d0f17ca72e3dc80999a032" ON "__chart__drive" ("span") `);
        await queryRunner.query(`CREATE INDEX "IDX_c26e2c1cbb6e911e0554b27416" ON "__chart__active_users" ("date", "group", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_20f57cc8f142c131340ee16742" ON "__chart__active_users" ("date", "span") `);
        await queryRunner.query(`CREATE INDEX "IDX_15e91a03aeeac9dbccdf43fc06" ON "__chart__active_users" ("span") `);
    }
}
exports.chartV21615965918224 = chartV21615965918224;
