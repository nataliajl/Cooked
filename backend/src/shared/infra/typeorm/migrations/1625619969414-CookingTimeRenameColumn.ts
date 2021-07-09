import {MigrationInterface, QueryRunner} from "typeorm";

export class CookingTimeRenameColumn1625619969414 implements MigrationInterface {
    name = 'CookingTimeRenameColumn1625619969414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes" RENAME COLUMN "cookingTime" TO "cooking_time"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes" RENAME COLUMN "cooking_time" TO "cookingTime"`);
    }

}
