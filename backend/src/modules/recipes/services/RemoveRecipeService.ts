import { injectable, inject } from 'tsyringe';

import IRecipesRepository from '../repositories/IRecipesRepository';
import Recipe from '../infra/typeorm/entities/Recipe';
import Category from '@modules/categories/infra/typeorm/entities/Category';
import RawRecipe from '../../../shared/models/RawRecipe';

@injectable()
class RemoveRecipeService {
  private recipesRepository: IRecipesRepository;

  constructor(
    //Aqui fazemos a injeção de dependencia
    @inject('RecipesRepository')
    recipesRepository: IRecipesRepository
  ) {
    this.recipesRepository = recipesRepository;
  }

  public async execute(title: string): Promise<void> {
    return await this.recipesRepository.remove(title);
  }
}

export default RemoveRecipeService;
