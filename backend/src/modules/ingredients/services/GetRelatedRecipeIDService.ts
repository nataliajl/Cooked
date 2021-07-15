import { injectable, inject } from 'tsyringe';

import IngredientsRepository from '../repositories/IIngredientsRepository';

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
    
    return await this.ingredientsRepository.findIngredientsRecipe(ingredients, isOnlyIngredients);
  }
}

export default GetRelatedRecipeIDService;
