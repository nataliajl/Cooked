import Recipe from '../infra/typeorm/entities/Recipe';
import RawRecipe from '../../../shared/models/RawRecipe';
import Filter from '@shared/models/Filter';

export default interface IRecipesRepository {
  create(rawRecipe: RawRecipe): Promise<Recipe>;
  
  getRecipeByIngredient(filter : Filter) : Promise<String>;

  findRecipe(title: string): Promise<Recipe | undefined>;

  remove(title: string): Promise<void>;

  update(rawRecipe: RawRecipe): Promise<Recipe>;
}
