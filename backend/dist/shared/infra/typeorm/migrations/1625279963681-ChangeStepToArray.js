"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeStepToArray1625279963681 = void 0;
class ChangeStepToArray1625279963681 {
    constructor() {
        this.name = 'ChangeStepToArray1625279963681';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "steps" RENAME COLUMN "text" TO "steps"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "steps" RENAME COLUMN "steps" TO "text"`);
    }
}
exports.ChangeStepToArray1625279963681 = ChangeStepToArray1625279963681;
