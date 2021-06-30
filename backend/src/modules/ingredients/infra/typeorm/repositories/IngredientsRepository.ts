import { getRepository, PrimaryColumnCannotBeNullableError, Repository } from 'typeorm';

import IIngredientsRepository from '@modules/ingredients/repositories/IIngredientsRepository';
import Ingredient from '../entities/Ingredient';
import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';
import RequestIngredients from '@shared/models/RequestIngredients';
import AppError from '@shared/errors/Error';

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

    if(!ingredients || ingredients.length < 1){
      throw new AppError("Missing Ingredients", 400);
    }

    ingredients.forEach(element => {
      if (element.amount < 1 || element.amount > 50){
        throw new AppError("Ingredient " + element.title + " has unpermitted amount of " + element.amount, 400);
      }      
    });
    
    this.removeIngredientsByRecipe(recipe);

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

  public async findIngredientsByRecipe(recipe: Recipe): Promise<Ingredient[]> {
    
    const recipeIngredients = await this.ormRepository.find({
      where: { recipe },
    });

    return recipeIngredients;

  }

  public async removeIngredientsByRecipe(recipe: Recipe): Promise<void> {
    const recipeIngredients = await this.ormRepository.find({
      where: { recipe },
    });

    await this.ormRepository.remove(recipeIngredients)
  }
}

export default IngredientsRepository;
