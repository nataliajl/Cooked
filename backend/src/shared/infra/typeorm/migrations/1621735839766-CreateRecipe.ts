import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateRecipe1621735839766 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('recipes');
  }
}
