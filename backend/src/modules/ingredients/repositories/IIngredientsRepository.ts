import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';
import RequestIngredients from '@shared/models/RequestIngredients';
import Ingredient from '../infra/typeorm/entities/Ingredient';

//SOLID
//Liskov Substitution Principle
export default interface IIngredientsRepository {
  addToRecipe(
    ingredients: RequestIngredients[],
    recipeId: Recipe
  ): Promise<Ingredient[]>;
}
