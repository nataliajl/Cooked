"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookingTimeRenameColumn1625619969414 = void 0;
class CookingTimeRenameColumn1625619969414 {
    constructor() {
        this.name = 'CookingTimeRenameColumn1625619969414';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "recipes" RENAME COLUMN "cookingTime" TO "cooking_time"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "recipes" RENAME COLUMN "cooking_time" TO "cookingTime"`);
    }
}
exports.CookingTimeRenameColumn1625619969414 = CookingTimeRenameColumn1625619969414;
