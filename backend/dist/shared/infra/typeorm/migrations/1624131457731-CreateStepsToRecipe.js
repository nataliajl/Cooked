"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStepsToRecipe1624131457731 = void 0;
const typeorm_1 = require("typeorm");
class CreateStepsToRecipe1624131457731 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'steps',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'text',
                    type: 'varchar',
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
        await queryRunner.dropTable('steps');
    }
}
exports.CreateStepsToRecipe1624131457731 = CreateStepsToRecipe1624131457731;
