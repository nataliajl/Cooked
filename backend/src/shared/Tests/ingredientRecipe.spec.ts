import 'reflect-metadata';

import '@shared/infra/typeorm';
import '../container/index';
const request = require('supertest');
import app from '../infra/http/server';
import { createConnection, getConnection } from 'typeorm';
import RequestIngredients from '@shared/models/RequestIngredients';
import IngredientsRepository from '@modules/ingredients/infra/typeorm/repositories/IngredientsRepository';
import RecipesRepository from '@modules/recipes/infra/typeorm/repositories/RecipesRepository';
import RawRecipe from '@shared/models/RawRecipe';
import CategoriesRepository from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';
import CreateCategoryService from '@modules/categories/services/CreateCategoryService';
import FindCategoryService from '@modules/categories/services/FindCategoryService';
import CreateRecipeService from '@modules/recipes/services/CreateRecipeService';
import AddIngredientService from '@modules/ingredients/services/addIngredientService';
import RemoveCategoryService from '@modules/categories/services/RemoveCategoryService';
import Ingredient from '@modules/ingredients/infra/typeorm/entities/Ingredient';
import AppError from '@shared/errors/Error';

// Testes utilizando a estrat�gia de Classes de Valor-Limite

// Create Connection Before Tests
beforeAll(() => {
  return createConnection();
});

// Close Connection After Tests
afterAll(async () => {
  const conn = getConnection();
  return conn.close();
});

describe('Post Recipe Tests', () => {
  afterEach(async () => {
    try {
      request(app).delete('/recipes').send({ title: 'Ingredient_Test' });
      const removeCateogry = new RemoveCategoryService(
        new CategoriesRepository()
      );
      removeCateogry.execute('category_test');
    } catch (e) {
      expect(e.message).toMatch('Recipe not found');
    }
  });

  test('Should successfully return recipe ingredients list', async () => {
    const recipeRepo = new RecipesRepository();
    const createRecipe = new CreateRecipeService(recipeRepo);

    const ingredientRepo = new IngredientsRepository();
    const addIngredient = new AddIngredientService(ingredientRepo);

    const catRepo = new CategoriesRepository();
    const findCatego = new FindCategoryService(catRepo);
    const createCatego = new CreateCategoryService(catRepo);

    const category =
      (await findCatego.execute('category_test')) ||
      (await createCatego.execute('category_test'));

    const createRecipeForm: RawRecipe = {
      title: 'Ingredient_Test',
      description: 'Feijoada de feijao bom',
      category: category,
      cookTime: 30,
      serves: 5,
      vegetarian: false,
      vegan: false,
      lactosefree: false,
      glutenfree: false,
      isPrivate: false,
    };

    const ingredients: RequestIngredients[] = [
      {
        title: 'Fejao',
        amount: 1,
      },
      {
        title: 'Alho',
        amount: 50,
      },
    ];

    const recipe = await createRecipe.execute(createRecipeForm);
    const newIngredients = await addIngredient.execute(ingredients, recipe);
    expect(newIngredients).toBeInstanceOf(Array);
  });

  test('Should throw error if the amount of any Ingredients is less than 1', async () => {
    const recipeRepo = new RecipesRepository();
    const createRecipe = new CreateRecipeService(recipeRepo);

    const ingredientRepo = new IngredientsRepository();
    const addIngredient = new AddIngredientService(ingredientRepo);

    const catRepo = new CategoriesRepository();
    const findCatego = new FindCategoryService(catRepo);
    const createCatego = new CreateCategoryService(catRepo);

    const category =
      (await findCatego.execute('category_test')) ||
      (await createCatego.execute('category_test'));

    const createRecipeForm: RawRecipe = {
      title: 'Ingredient_Test',
      description: 'Feijoada de feijao bom',
      category: category,
      cookTime: 30,
      serves: 5,
      vegetarian: false,
      vegan: false,
      lactosefree: false,
      glutenfree: false,
      isPrivate: false,
    };

    const ingredients: RequestIngredients[] = [
      {
        title: 'Carne',
        amount: 0,
      },
      {
        title: 'Sal',
        amount: 15,
      },
    ];

    const recipe = await createRecipe.execute(createRecipeForm);
    expect(addIngredient.execute(ingredients, recipe)).rejects.toBeInstanceOf(
      AppError
    );
  });

  test('Should throw error if the amount of any Ingredients is more than 50', async () => {
    const recipeRepo = new RecipesRepository();
    const createRecipe = new CreateRecipeService(recipeRepo);

    const ingredientRepo = new IngredientsRepository();
    const addIngredient = new AddIngredientService(ingredientRepo);

    const catRepo = new CategoriesRepository();
    const findCatego = new FindCategoryService(catRepo);
    const createCatego = new CreateCategoryService(catRepo);

    const category =
      (await findCatego.execute('category_test')) ||
      (await createCatego.execute('category_test'));

    const createRecipeForm: RawRecipe = {
      title: 'Ingredient_Test',
      description: 'Feijoada de feijao bom',
      category: category,
      cookTime: 30,
      serves: 5,
      vegetarian: false,
      vegan: false,
      lactosefree: false,
      glutenfree: false,
      isPrivate: false,
    };

    const ingredients: RequestIngredients[] = [
      {
        title: 'Carne',
        amount: 5,
      },
      {
        title: 'Sal',
        amount: 51,
      },
    ];

    const recipe = await createRecipe.execute(createRecipeForm);
    expect(addIngredient.execute(ingredients, recipe)).rejects.toBeInstanceOf(
      AppError
    );
  });

  test('Should throw error if Igredient list are empty ', async () => {
    const recipeRepo = new RecipesRepository();
    const createRecipe = new CreateRecipeService(recipeRepo);

    const ingredientRepo = new IngredientsRepository();
    const addIngredient = new AddIngredientService(ingredientRepo);

    const catRepo = new CategoriesRepository();
    const findCatego = new FindCategoryService(catRepo);
    const createCatego = new CreateCategoryService(catRepo);

    const category =
      (await findCatego.execute('category_test')) ||
      (await createCatego.execute('category_test'));

    const createRecipeForm: RawRecipe = {
      title: 'Ingredient_Test',
      description: 'Feijoada de feijao bom',
      category: category,
      cookTime: 30,
      serves: 5,
      vegetarian: false,
      vegan: false,
      lactosefree: false,
      glutenfree: false,
      isPrivate: false,
    };

    const ingredients: RequestIngredients[] = [];

    const recipe = await createRecipe.execute(createRecipeForm);
    expect(addIngredient.execute(ingredients, recipe)).rejects.toBeInstanceOf(
      AppError
    );
  });
});
