import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class RemovingHyphenFromAttributes1624499711556
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('recipes', 'cooking-time');
    await queryRunner.addColumn(
      'recipes',
      new TableColumn({
        name: 'cookingTime',
        type: 'smallint',
      })
    );
    await queryRunner.dropColumn('recipes', 'serving-size');
    await queryRunner.addColumn(
      'recipes',
      new TableColumn({
        name: 'servingSize',
        type: 'smallint',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('recipes', 'cookingTime');
    await queryRunner.dropColumn('recipes', 'servingSize');
    await queryRunner.addColumn(
      'recipes',
      new TableColumn({
        name: 'serving-size',
        type: 'smallint',
      })
    );
    await queryRunner.addColumn(
      'recipes',
      new TableColumn({
        name: 'cooking-time',
        type: 'smallint',
      })
    );
  }
}
