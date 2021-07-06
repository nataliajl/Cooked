"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRecipeToText1625290916406 = void 0;
class ChangeRecipeToText1625290916406 {
    constructor() {
        this.name = 'ChangeRecipeToText1625290916406';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "title" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "description" text NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "title" character varying NOT NULL`);
    }
}
exports.ChangeRecipeToText1625290916406 = ChangeRecipeToText1625290916406;
