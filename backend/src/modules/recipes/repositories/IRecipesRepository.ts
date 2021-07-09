import Recipe from '../infra/typeorm/entities/Recipe';
import RawRecipe from '../../../shared/models/RawRecipe';
import Filter from '@shared/models/Filter';

export default interface IRecipesRepository {
  create(rawRecipe: RawRecipe): Promise<Recipe>;
  
  recipeByIngredient(filter : Filter, recipeID : string[]) : Promise<Recipe[]>;

  findRecipe(title: string): Promise<Recipe | undefined>;

  remove(title: string): Promise<void>;

  update(rawRecipe: RawRecipe): Promise<Recipe>;
}
