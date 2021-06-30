import { injectable, inject } from 'tsyringe';

import IRecipesRepository from '../repositories/IRecipesRepository';
import Recipe from '../infra/typeorm/entities/Recipe';
import Filter from '@shared/models/Filter';

@injectable()
class GetRecipeByIngredientsService {
  private recipesRepository: IRecipesRepository;

  constructor(
    //Aqui fazemos a injeção de dependencia
    @inject('RecipesRepository')
    recipesRepository: IRecipesRepository
  ) {
    this.recipesRepository = recipesRepository;
  }

  public async execute(filter : Filter) : Promise<Recipe[]>{
    return await this.recipesRepository.getRecipeByIngredient(filter);
  }
}

export default GetRecipeByIngredientsService;