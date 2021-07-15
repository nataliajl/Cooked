import Ingredient from "@modules/ingredients/infra/typeorm/entities/Ingredient";
import Recipe from "@modules/recipes/infra/typeorm/entities/Recipe";
import Step from "@modules/steps/infra/typeorm/entities/Step";

export default interface AllRecipe {
    recipe: Recipe, 
    ingredients: Ingredient[], 
    steps: Step[]
};