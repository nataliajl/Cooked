import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddingRelationIngredientsRecipe1624126883179
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'ingredients',
      new TableColumn({
        name: 'recipe_id',
        type: 'uuid',
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      'ingredients',
      new TableForeignKey({
        name: 'IngredientProvider',
        columnNames: ['recipe_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'recipes',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('ingredients', 'IngredientProvider');
    await queryRunner.dropColumn('ingredients', 'recipe_id');
  }
}
