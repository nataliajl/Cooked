import { injectable, inject } from 'tsyringe';

import IngredientsRepository from '../repositories/IIngredientsRepository';
import Ingredient from '../infra/typeorm/entities/Ingredient';
import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';
import RequestIngredients from '@shared/models/RequestIngredients';

//Isso permite a classe receber injeção de dependencia
@injectable()
class AddIngredientService {
  //SOLID
  /*D - DEPENDENCY INVERSION -> Ao invés de instanciar o repositório aqui dentro
    iremos recebe-lo por parâmetro */

  private ingredientsRepository: IngredientsRepository;

  constructor(
    //Aqui fazemos a injeção de dependencia
    @inject('IngredientsRepository')
    ingredientsRepository: IngredientsRepository
  ) {
    this.ingredientsRepository = ingredientsRepository;
  }

  public async execute(
    ingredients: RequestIngredients[],
    recipe: Recipe
  ): Promise<Ingredient[]> {
    //Atribuindo o ingrediente à receita
    return await this.ingredientsRepository.addToRecipe(ingredients, recipe);
  }
}

export default AddIngredientService;
