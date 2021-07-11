import { getRepository, Raw, Repository } from 'typeorm';

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
  ): Promise<Ingredient> {
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

    const titles: string[] = [];
    const amounts: number[] = [];

    ingredients.map(({ amount, title }) => {
      titles.push(title);
      amounts.push(amount);
    });

    const newIngredients = this.ormRepository.create({     
      recipe: recipe,
      title: titles,
      amount: amounts});

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

  public async getIngredientsRecipe(ingredients: string[], isOnlyIngredients: string): Promise<string[]>{
    const ingredientsStr = ingredients.join(',');
    let operator = '&&';
    if(isOnlyIngredients == "true")
      operator = '=';

    const recipesAndIngr = await this.ormRepository.find({
      join:{
        alias: "ingredient",
        innerJoinAndSelect: {
          recipe: "ingredient.recipe"
        }
      },

      where: {

          "title":  Raw(alias =>`${alias} ${operator} '{${ingredientsStr}}'`),
      },
    });
    console.log(recipesAndIngr);

    const recipe_id = recipesAndIngr.map((value) => { return value.recipe.id});
    
    return recipe_id;
  }
}

export default IngredientsRepository;
