import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryService from '@modules/categories/services/CreateCategoryService';
import FindCategoryService from '@modules/categories/services/FindCategoryService';
import addIngredientService from '@modules/ingredients/services/addIngredientService';
import addStepService from '@modules/steps/services/addStepService';
import CreateRecipeService from '@modules/recipes/services/CreateRecipeService';
import RequestIngredients from '@shared/models/RequestIngredients';
import GetRecipeByIngredientsService from '@modules/recipes/services/GetRecipeByIngredientsService';
import Ingredient from '@modules/ingredients/infra/typeorm/entities/Ingredient';
import Category from '@modules/categories/infra/typeorm/entities/Category';

interface IRequest {
  title: string;
  description: string;
  category: string;
  cookTime: number;
  serves: number;
  vegetarian: boolean;
  vegan: boolean;
  lactosefree: boolean;
  glutenfree: boolean;
  ingredients: RequestIngredients[];
  private: boolean;
  steps: string[];
}

interface IFilter {
  ingredients: Ingredient[];
  isOnlyIngredient: boolean;
  
  category: Category;
  servingSize: number;
  rate: number;

  restriction: {
      vegetarian: boolean;
      vegan: boolean;
  };

  cookingTime: {
      min: number;
      max: number;
  };

}

export default class RecipeController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      private: isPrivate,
      category: categoryName,
      ingredients,
      title,
      cookTime,
      description,
      glutenfree,
      lactosefree,
      serves,
      steps,
      vegan,
      vegetarian,
    }: IRequest = request.body;

    //Obtendo a função criadora de categorias - Utilizando o container que servirá para a injeção de dependencias
    const createCategory = container.resolve(CreateCategoryService);
    const FindCategory = container.resolve(FindCategoryService);
    const createRecipe = container.resolve(CreateRecipeService);
    const addIngredientToRecipe = container.resolve(addIngredientService);
    const addStepsToRecipe = container.resolve(addStepService);

    //Buscando ou criando uma categoria
    const category =
      (await FindCategory.execute(categoryName)) ||
      (await createCategory.execute(categoryName));

    const recipe = await createRecipe.execute({
      title,
      cookTime,
      description,
      glutenfree,
      lactosefree,
      serves,
      vegan,
      vegetarian,
      isPrivate,
      category,
    });

    await addIngredientToRecipe.execute(ingredients, recipe);
    await addStepsToRecipe.execute(steps, recipe);

    return response.json({ Created: true }).status(201);
  }

  public async getRecipeByIngredients(request: Request): Promise<String> {
    const {
      ingredients,
      isOnlyIngredient,

      category,
      servingSize,
      rate,

      restriction: {
          vegetarian,
          vegan
      },

      cookingTime: {
          min,
          max,
      },

    }: IFilter = request.body;

    const getRecipeByIngredients = container.resolve(GetRecipeByIngredientsService);

    const recipe = await getRecipeByIngredients.execute({
      ingredients,
      isOnlyIngredient,

      category,
      servingSize,
      rate,

      restriction: {
          vegetarian,
          vegan
      },

      cookingTime: {
          min,
          max,
      },
    });

    console.log(JSON.stringify(recipe));
    
    return JSON.stringify(recipe);
  }

}
