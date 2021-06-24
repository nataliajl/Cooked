import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryService from '@modules/categories/services/CreateCategoryService';
import FindCategoryService from '@modules/categories/services/FindCategoryService';
import addIngredientService from '@modules/ingredients/services/addIngredientService';
import CreateRecipeService from '@modules/recipes/services/CreateRecipeService';
import RequestIngredients from '@shared/models/RequestIngredients';

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

export default class CategoryController {
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

    addIngredientToRecipe.execute(ingredients, recipe);

    return response.json(category);
  }
}
