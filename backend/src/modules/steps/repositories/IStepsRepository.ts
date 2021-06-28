import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';
import Step from '../infra/typeorm/entities/Step';

export default interface IStepsRepository {
  addToRecipe(text: string[], recipe: Recipe): Promise<Step[]>;
}
