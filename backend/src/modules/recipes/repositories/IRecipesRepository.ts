import Recipe from '../infra/typeorm/entities/Recipe';
import RawRecipe from '../../../shared/models/RawRecipe';

export default interface IRecipesRepository {
  create(rawRecipe: RawRecipe): Promise<Recipe>;

  findRecipe(title: string): Promise<Recipe | undefined>;

  remove(title: string): Promise<void>;
}
