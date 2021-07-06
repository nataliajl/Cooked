"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIngredients1624125307854 = void 0;
const typeorm_1 = require("typeorm");
class CreateIngredients1624125307854 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'ingredients',
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
                    name: 'amount',
                    type: 'integer',
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
        await queryRunner.dropTable('ingredients');
    }
}
exports.CreateIngredients1624125307854 = CreateIngredients1624125307854;
