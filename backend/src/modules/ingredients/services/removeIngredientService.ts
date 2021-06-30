import { injectable, inject } from 'tsyringe';

import IngredientsRepository from '../repositories/IIngredientsRepository';
import Ingredient from '../infra/typeorm/entities/Ingredient';
import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';

@injectable()
class RemoveIngredientService {

  private ingredientsRepository: IngredientsRepository;

  constructor(
    @inject('IngredientsRepository')
    ingredientsRepository: IngredientsRepository
  ) {
    this.ingredientsRepository = ingredientsRepository;
  }

  public async execute(recipe: Recipe): Promise<void> {
    
    return await this.ingredientsRepository.removeIngredientsByRecipe(recipe)
  }
}

export default RemoveIngredientService;
