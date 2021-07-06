"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeIngredientsToArray1625267096304 = void 0;
class ChangeIngredientsToArray1625267096304 {
    constructor() {
        this.name = 'ChangeIngredientsToArray1625267096304';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "ingredients" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "ingredients" ADD "title" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "steps" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "steps" ADD "text" text array NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "steps" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "steps" ADD "text" character varying array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ingredients" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "ingredients" ADD "title" character varying array NOT NULL`);
    }
}
exports.ChangeIngredientsToArray1625267096304 = ChangeIngredientsToArray1625267096304;
