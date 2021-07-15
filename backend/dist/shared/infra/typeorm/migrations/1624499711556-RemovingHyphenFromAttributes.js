"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemovingHyphenFromAttributes1624499711556 = void 0;
const typeorm_1 = require("typeorm");
class RemovingHyphenFromAttributes1624499711556 {
    async up(queryRunner) {
        await queryRunner.dropColumn('recipes', 'cooking-time');
        await queryRunner.addColumn('recipes', new typeorm_1.TableColumn({
            name: 'cookingTime',
            type: 'smallint',
        }));
        await queryRunner.dropColumn('recipes', 'serving-size');
        await queryRunner.addColumn('recipes', new typeorm_1.TableColumn({
            name: 'servingSize',
            type: 'smallint',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('recipes', 'cookingTime');
        await queryRunner.dropColumn('recipes', 'servingSize');
        await queryRunner.addColumn('recipes', new typeorm_1.TableColumn({
            name: 'serving-size',
            type: 'smallint',
        }));
        await queryRunner.addColumn('recipes', new typeorm_1.TableColumn({
            name: 'cooking-time',
            type: 'smallint',
        }));
    }
}
exports.RemovingHyphenFromAttributes1624499711556 = RemovingHyphenFromAttributes1624499711556;
