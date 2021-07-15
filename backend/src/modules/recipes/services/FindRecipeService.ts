import { injectable, inject } from 'tsyringe';

import IRecipesRepository from '../repositories/IRecipesRepository';
import Recipe from '../infra/typeorm/entities/Recipe';
import Filter from '@shared/models/Filter';

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

  public async executeByIngredient(filter : Filter, recipeID : string[]) : Promise<Recipe[]>{
    
    return await this.recipesRepository.findRecipeByIngredient(filter, recipeID);
  }
}

export default FindRecipeService;
