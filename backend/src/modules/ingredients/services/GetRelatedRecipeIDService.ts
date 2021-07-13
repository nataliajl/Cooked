import { injectable, inject } from 'tsyringe';

import IngredientsRepository from '../repositories/IIngredientsRepository';
import Ingredient from '../infra/typeorm/entities/Ingredient';

@injectable()
class GetRelatedRecipeIDService {

  private ingredientsRepository: IngredientsRepository;

  constructor(
    @inject('IngredientsRepository')
    ingredientsRepository: IngredientsRepository
  ) {
    this.ingredientsRepository = ingredientsRepository;
  }

  public async execute(ingredients: string[], isOnlyIngredients: string): Promise<string[]> {
    
    return await this.ingredientsRepository.getIngredientsRecipe(ingredients, isOnlyIngredients);
  }
}

export default GetRelatedRecipeIDService;
