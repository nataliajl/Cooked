"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddingRelationIngredientsRecipe1624126883179 = void 0;
const typeorm_1 = require("typeorm");
class AddingRelationIngredientsRecipe1624126883179 {
    async up(queryRunner) {
        await queryRunner.addColumn('ingredients', new typeorm_1.TableColumn({
            name: 'recipe_id',
            type: 'uuid',
            isNullable: true,
        }));
        await queryRunner.createForeignKey('ingredients', new typeorm_1.TableForeignKey({
            name: 'IngredientProvider',
            columnNames: ['recipe_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'recipes',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('ingredients', 'IngredientProvider');
        await queryRunner.dropColumn('ingredients', 'recipe_id');
    }
}
exports.AddingRelationIngredientsRecipe1624126883179 = AddingRelationIngredientsRecipe1624126883179;
