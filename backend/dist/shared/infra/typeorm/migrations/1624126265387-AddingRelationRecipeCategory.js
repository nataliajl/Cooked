"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddingRelationRecipeCategory1624126265387 = void 0;
const typeorm_1 = require("typeorm");
class AddingRelationRecipeCategory1624126265387 {
    async up(queryRunner) {
        await queryRunner.dropColumn('recipes', 'category');
        await queryRunner.addColumn('recipes', new typeorm_1.TableColumn({
            name: 'category_id',
            type: 'uuid',
            isNullable: true,
        }));
        await queryRunner.createForeignKey('recipes', new typeorm_1.TableForeignKey({
            name: 'CategoryProvider',
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('recipes', 'CategoryProvider');
        await queryRunner.dropColumn('recipes', 'category_id');
        await queryRunner.addColumn('recipes', new typeorm_1.TableColumn({
            name: 'category',
            type: 'varchar',
        }));
    }
}
exports.AddingRelationRecipeCategory1624126265387 = AddingRelationRecipeCategory1624126265387;
