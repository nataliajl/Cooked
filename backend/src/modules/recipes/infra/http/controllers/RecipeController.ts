
import CreateCategoryService from '@modules/categories/services/CreateCategoryService';
import FindCategoryService from '@modules/categories/services/FindCategoryService';

import AddIngredientService from '@modules/ingredients/services/AddIngredientService';
import FindIngredientService from '@modules/ingredients/services/FindIngredientService';
import RemoveIngredientService from '@modules/ingredients/services/RemoveIngredientService'

import AddStepService from '@modules/steps/services/AddStepService';
import FindStepService from '@modules/steps/services/FindStepService';
import RemoveStepService from '@modules/steps/services/RemoveStepService';

import CreateRecipeService from '@modules/recipes/services/CreateRecipeService';
import FindRecipeService from '@modules/recipes/services/FindRecipeService';
import UpdateRecipeService from '@modules/recipes/services/UpdateRecipeService';
import RemoveRecipeService from '@modules/recipes/services/RemoveRecipeService';

import IRequest from '@shared/models/IRequest';
import Filter from '@shared/models/Filter';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import GetRelatedRecipeIDService from '@modules/ingredients/services/GetRelatedRecipeIDService';
import AllRecipe from '@shared/models/AllRecipe';


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
      vegetarian
    }: IRequest = request.body;
    try {
      //Obtendo a função criadora de categorias - Utilizando o container que servirá para a injeção de dependencias
      const createCategory = container.resolve(CreateCategoryService);
      const FindCategory = container.resolve(FindCategoryService);
      const createRecipe = container.resolve(CreateRecipeService);
      const addIngredientToRecipe = container.resolve(AddIngredientService);
      const addStepsToRecipe = container.resolve(AddStepService);
      
      //Buscando ou criando uma categoria
      const category = (await FindCategory.execute(categoryName)) || (await createCategory.execute(categoryName));
      
      const recipe = await createRecipe.execute({ title,
        cookTime,
        description,
        glutenfree,
        lactosefree,
        serves,
        vegan,
        vegetarian,
        isPrivate,
        category});
        
        await addIngredientToRecipe.execute(ingredients, recipe);
        await addStepsToRecipe.execute(steps, recipe);
        
        return response.status(201).json({ Created: true });
      }
      catch(err) {
        return response.status(err.statusCode).send({err});
      }
  }
    
  public async getRecipe(request: Request, response: Response): Promise<Response> {
    
    const findRecipe = container.resolve(FindRecipeService);
    const findSteps = container.resolve(FindStepService);
    const findIngredients = container.resolve(FindIngredientService);
    const findCategory = container.resolve(FindCategoryService);
    
    const recipe = await findRecipe.execute(request.body.title);
    
    if (typeof recipe == 'undefined') {
      return response.status(404).send("Recipe not found");
    }
    
    const foundCategory = await findCategory.executeId(recipe.categoryId);
    const foundIngredients = await findIngredients.execute(recipe);
    const steps = await findSteps.execute(recipe);
    
    
    var ingr = foundIngredients.map((item) => {
      return {
        title: item.title,
        amount: item.amount
      };
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

  public async getRecipeByIngredients(request: Request, response: Response): Promise<Response> {
    const {
      ingredients,
      isOnlyIngredient,
      categories,
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
    }: Filter = request.body;
    
    const findCategory = container.resolve(FindCategoryService);
    const categoryList: string[] = []; 
    categories.forEach(async (value) => {
      const cat = await findCategory.execute(value);
      const ids = cat? cat.id : null;
      
      if (ids)
      categoryList.push(ids);
      
    });
    
    const getRecipesID = container.resolve(GetRelatedRecipeIDService);
    const recipe_id = await getRecipesID.execute(ingredients, isOnlyIngredient);
    const getRecipeByIngredients = container.resolve(FindRecipeService);
    
    const recipe = await getRecipeByIngredients.executeByIngredient({
      ingredients,
      isOnlyIngredient,
      categories: categoryList,
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
    }, recipe_id);
    
    const findIngredients = container.resolve(FindIngredientService);
    const findSteps = container.resolve(FindStepService);
    
    let allRecipes: AllRecipe[] = [];
    
    for (let i = 0; i < recipe.length; i++){
      const _ingredients = await findIngredients.execute(recipe[i]);
      const _steps = await findSteps.execute(recipe[i]);
      
      allRecipes.push({recipe: recipe[i], 
        ingredients: _ingredients, 
        steps: _steps});
      };
      
      
      return  response.status(200).json(allRecipes);
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
    const addIngredientToRecipe = container.resolve(AddIngredientService);
    const addStepsToRecipe = container.resolve(AddStepService);
    
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
    
    return response.status(200).json({
      title: recipe.title,
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

}
    