"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIngredientsRelation1624975534099 = void 0;
class AddIngredientsRelation1624975534099 {
    constructor() {
        this.name = 'AddIngredientsRelation1624975534099';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "recipes" DROP CONSTRAINT "CategoryProvider"`);
        await queryRunner.query(`ALTER TABLE "ingredients" DROP CONSTRAINT "IngredientProvider"`);
        await queryRunner.query(`ALTER TABLE "steps" DROP CONSTRAINT "StepProvider"`);
        await queryRunner.query(`CREATE TABLE "users_favourites_recipes" ("usersId" uuid NOT NULL, "recipesId" uuid NOT NULL, CONSTRAINT "PK_ddc311eb1819bb804716a6324ae" PRIMARY KEY ("usersId", "recipesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2c3dc76312f8fe20d94e64b2ee" ON "users_favourites_recipes" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_daec41826ab0146583b481f3dd" ON "users_favourites_recipes" ("recipesId") `);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "cookingTime"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "cookingTime" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "servingSize"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "servingSize" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD CONSTRAINT "FK_5be5ead33de507b1086b8e5678b" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredients" ADD CONSTRAINT "FK_e099bf7407edb6047abb97c4922" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "steps" ADD CONSTRAINT "FK_e43a042b5e8f92fe17c60c4d599" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_favourites_recipes" ADD CONSTRAINT "FK_2c3dc76312f8fe20d94e64b2ee0" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_favourites_recipes" ADD CONSTRAINT "FK_daec41826ab0146583b481f3dd9" FOREIGN KEY ("recipesId") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users_favourites_recipes" DROP CONSTRAINT "FK_daec41826ab0146583b481f3dd9"`);
        await queryRunner.query(`ALTER TABLE "users_favourites_recipes" DROP CONSTRAINT "FK_2c3dc76312f8fe20d94e64b2ee0"`);
        await queryRunner.query(`ALTER TABLE "steps" DROP CONSTRAINT "FK_e43a042b5e8f92fe17c60c4d599"`);
        await queryRunner.query(`ALTER TABLE "ingredients" DROP CONSTRAINT "FK_e099bf7407edb6047abb97c4922"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP CONSTRAINT "FK_5be5ead33de507b1086b8e5678b"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "servingSize"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "servingSize" smallint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "cookingTime"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "cookingTime" smallint NOT NULL`);
        await queryRunner.query(`DROP INDEX "IDX_daec41826ab0146583b481f3dd"`);
        await queryRunner.query(`DROP INDEX "IDX_2c3dc76312f8fe20d94e64b2ee"`);
        await queryRunner.query(`DROP TABLE "users_favourites_recipes"`);
        await queryRunner.query(`ALTER TABLE "steps" ADD CONSTRAINT "StepProvider" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "ingredients" ADD CONSTRAINT "IngredientProvider" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD CONSTRAINT "CategoryProvider" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }
}
exports.AddIngredientsRelation1624975534099 = AddIngredientsRelation1624975534099;
