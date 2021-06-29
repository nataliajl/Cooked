import Recipe from '../infra/typeorm/entities/Recipe';
import RawRecipe from '../../../shared/models/RawRecipe';
import Filter from '@shared/models/Filter';

export default interface IRecipesRepository {
  create(rawRecipe: RawRecipe): Promise<Recipe>;
  
  getRecipeByIngredient(filter : Filter) : Promise<String>;
}
