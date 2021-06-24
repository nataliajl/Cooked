import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddingRelationRecipeCategory1624126265387
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('recipes', 'category');
    await queryRunner.addColumn(
      'recipes',
      new TableColumn({
        name: 'category_id',
        type: 'uuid',
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      'recipes',
      new TableForeignKey({
        name: 'CategoryProvider',
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('recipes', 'CategoryProvider');

    await queryRunner.dropColumn('recipes', 'category_id');

    await queryRunner.addColumn(
      'recipes',
      new TableColumn({
        name: 'category',
        type: 'varchar',
      })
    );
  }
}
