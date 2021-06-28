import { getRepository, Repository } from 'typeorm';

import IIngredientsRepository from '@modules/ingredients/repositories/IIngredientsRepository';
import Ingredient from '../entities/Ingredient';
import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';
import RequestIngredients from '@shared/models/RequestIngredients';

class IngredientsRepository implements IIngredientsRepository {
  private ormRepository: Repository<Ingredient>;

  constructor() {
    this.ormRepository = getRepository(Ingredient);
  }

  public async addToRecipe(
    ingredients: RequestIngredients[],
    recipe: Recipe
  ): Promise<Ingredient[]> {
    //Criando os ingredientes
    const newIngredients = ingredients.map(({ amount, title }) => {
      return this.ormRepository.create({
        recipe,
        title,
        amount,
      });
    });

    //Salvando no banco
    await this.ormRepository.save(newIngredients);

    return newIngredients;
  }
}

export default IngredientsRepository;
