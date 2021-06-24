import Recipe from '../infra/typeorm/entities/Recipe';
import RawRecipe from '../../../shared/models/RawRecipe';

export default interface IRecipesRepository {
  create(rawRecipe: RawRecipe): Promise<Recipe>;
}
