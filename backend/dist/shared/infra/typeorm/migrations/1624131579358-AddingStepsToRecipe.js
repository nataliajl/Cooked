"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddingStepsToRecipe1624131579358 = void 0;
const typeorm_1 = require("typeorm");
class AddingStepsToRecipe1624131579358 {
    async up(queryRunner) {
        await queryRunner.addColumn('steps', new typeorm_1.TableColumn({
            name: 'recipe_id',
            type: 'uuid',
            isNullable: true,
        }));
        await queryRunner.createForeignKey('steps', new typeorm_1.TableForeignKey({
            name: 'StepProvider',
            columnNames: ['recipe_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'recipes',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('steps', 'StepProvider');
        await queryRunner.dropColumn('steps', 'recipe_id');
    }
}
exports.AddingStepsToRecipe1624131579358 = AddingStepsToRecipe1624131579358;
