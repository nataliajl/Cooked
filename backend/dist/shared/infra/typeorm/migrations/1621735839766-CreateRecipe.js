"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class CreateRecipe1621735839766 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'recipes',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'category',
                    type: 'varchar',
                },
                {
                    name: 'cookingTime',
                    type: 'smallint',
                },
                {
                    name: 'servingSize',
                    type: 'smallint',
                },
                {
                    name: 'vegetarian',
                    type: 'boolean',
                },
                {
                    name: 'lactosefree',
                    type: 'boolean',
                },
                {
                    name: 'vegan',
                    type: 'boolean',
                },
                {
                    name: 'private',
                    type: 'boolean',
                },
                {
                    name: 'glutenfree',
                    type: 'boolean',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('recipes');
    }
}
exports.default = CreateRecipe1621735839766;
