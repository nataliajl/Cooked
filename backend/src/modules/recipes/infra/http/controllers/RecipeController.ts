import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryService from '@modules/categories/services/CreateCategoryService';
import FindCategoryService from '@modules/categories/services/FindCategoryService';
import addIngredientService from '@modules/ingredients/services/addIngredientService';
import addStepService from '@modules/steps/services/addStepService';
import CreateRecipeService from '@modules/recipes/services/CreateRecipeService';
import RequestIngredients from '@shared/models/RequestIngredients';
import GetRecipeByIngredientsService from '@modules/recipes/services/GetRecipeByIngredientsService';
import Filter from '@shared/models/Filter';
import FindRecipeService from '@modules/recipes/services/FindRecipeService';
import RemoveRecipeService from '@modules/recipes/services/RemoveRecipeService';
import findStepService from '@modules/steps/services/findStepService';
import FindIngredientService from '@modules/ingredients/services/findIngredientService';
import RemoveStepService from '@modules/steps/services/RemoveStepService';
import RemoveIngredientService from '@modules/ingredients/services/removeIngredientService'
import UpdateRecipeService from '@modules/recipes/services/UpdateRecipeService';
import AppError from '@shared/errors/Error';

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
    try {
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

    return response.status(201).json({ Created: true });
  }
    catch (err) {
      return response.status(err.statusCode).send({err});
    }
  }

  public async getRecipe(request: Request, response: Response): Promise<Response> {
    
    const findRecipe = container.resolve(FindRecipeService);
    const findSteps = container.resolve(findStepService);
    const findIngredients =  container.resolve(FindIngredientService);
    const findCategory = container.resolve(FindCategoryService);

    const recipe = await findRecipe.execute(request.body.title);

    if (typeof recipe == 'undefined') {
      return response.status(404).send("Recipe not found");
    }
    
    const foundCategory = await findCategory.executeId(recipe.categoryId);
    const foundIngredients = await findIngredients.execute(recipe);
    const steps = await findSteps.execute(recipe);
    

    var ingr = foundIngredients.map((item) => {
      return {title: item.title,
              amount: item.amount};
    });

    return response.status(200).json({
      title: recipe.title,
      description: recipe.description,
      category: foundCategory,
      cookTime: recipe.cookingTime,
      serves: recipe.servingSize,
      vegetarian: recipe.vegetarian,
      vegan: recipe.vegan,
      lactosefree: recipe.lactosefree,
      glutenfree: recipe.glutenfree,
      ingredients: ingr,
      private: recipe.private,
      steps: steps
    });
  }

  public async removeRecipe(request: Request, response: Response): Promise<Response> {
    const findRecipe = container.resolve(FindRecipeService);
    const removeRecipe = container.resolve(RemoveRecipeService);
    const removeSteps = container.resolve(RemoveStepService);
    const removeIngredients = container.resolve(RemoveIngredientService);
    const title = request.body.title;
    const recipe = await findRecipe.execute(title);

    if (typeof recipe == 'undefined') {
      return response.status(404).send("Recipe not found");
    }

    removeSteps.execute(recipe);
    removeIngredients.execute(recipe);

    removeRecipe.execute(request.body.title);

    return response.status(202).json({ Removed: true });
  }

  public async updateRecipe(request: Request, response: Response): Promise<Response> {
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

    const createCategory = container.resolve(CreateCategoryService);
    const FindCategory = container.resolve(FindCategoryService);
    const updateRecipe = container.resolve(UpdateRecipeService);
    const addIngredientToRecipe = container.resolve(addIngredientService);
    const addStepsToRecipe = container.resolve(addStepService);

    const category =
      (await FindCategory.execute(categoryName)) ||
      (await createCategory.execute(categoryName));

    const recipe = await updateRecipe.execute({
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

    return response.status(200).json({title: recipe.title,
      description: recipe.description,
      category: recipe.category.title,
      cookTime: recipe.cookingTime,
      serves: recipe.servingSize,
      vegetarian: recipe.vegetarian,
      vegan: recipe.vegan,
      lactosefree: recipe.lactosefree,
      glutenfree: recipe.glutenfree,
      ingredients: ingredients,
      private: recipe.private,
      steps: steps});
  }

  public async getRecipeByIngredients(request: Request, response: Response): Promise<Response> {
    const queryRequest = JSON.stringify(request.query);
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
    }: Filter = JSON.parse(queryRequest);
    alert(JSON.parse(queryRequest));
    
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


    return response.status(200).json({
      title: recipe[0].title,
      description: recipe[0].description,
      category: recipe[0].category,
      cookTime: recipe[0].cookingTime,
      serves: recipe[0].servingSize,
      vegetarian: recipe[0].vegetarian,
      vegan: recipe[0].vegan,
      lactosefree: recipe[0].lactosefree,
      glutenfree: recipe[0].glutenfree,
    });
  }

}
