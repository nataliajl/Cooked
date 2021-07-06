import { injectable, inject } from 'tsyringe';

import IRecipesRepository from '../repositories/IRecipesRepository';
import Recipe from '../infra/typeorm/entities/Recipe';

@injectable()
class FindRecipeService {
  private recipesRepository: IRecipesRepository;

  constructor(
    @inject('RecipesRepository')
    recipesRepository: IRecipesRepository
  ) {
    this.recipesRepository = recipesRepository;
  }

  public async execute(title: string): Promise<Recipe | undefined> {
    return await this.recipesRepository.findRecipe(title);
  }
}

export default FindRecipeService;
