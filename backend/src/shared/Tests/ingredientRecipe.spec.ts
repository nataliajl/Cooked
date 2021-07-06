import "reflect-metadata"

import '@shared/infra/typeorm';
// import "../container/index";
import request from 'supertest';
import app from '../../server';
import { createConnection, getConnection } from 'typeorm';
import RequestIngredients from '@shared/models/RequestIngredients'
import IngredientsRepository from '@modules/ingredients/infra/typeorm/repositories/IngredientsRepository';
import RecipesRepository from "@modules/recipes/infra/typeorm/repositories/RecipesRepository";
import RawRecipe from "@shared/models/RawRecipe";
import CategoriesRepository from "@modules/categories/infra/typeorm/repositories/CategoriesRepository";
import CreateCategoryService from '@modules/categories/services/CreateCategoryService';
import FindCategoryService from '@modules/categories/services/FindCategoryService';
import CreateRecipeService from '@modules/recipes/services/CreateRecipeService';
import AddIngredientService from "@modules/ingredients/services/addIngredientService";
import RemoveCategoryService from '@modules/categories/services/RemoveCategoryService';

// Testes utilizando a estrat�gia de Classes de Valor-Limite

// Create Connection Before Tests 
beforeAll(() => {
  return createConnection();
});

// Close Connection After Tests
afterAll( async () => { 
  let conn = getConnection();
  return conn.close();
});

describe("Post Recipe Tests", () => {    

  afterEach(async () => {
    try{
      request(app).delete('/recipes').send({title: "Ingredient_Test"});
      const removeCateogry = new RemoveCategoryService(new CategoriesRepository());
      removeCateogry.execute("category_test");
    }catch(e){
      expect(e.message).toMatch("Recipe not found");
    }
    
  })

  test("Should successfully return recipe ingredients list", async () => {

    const recipeRepo = new RecipesRepository();
    const createRecipe = new CreateRecipeService(recipeRepo);

    const ingredientRepo = new IngredientsRepository();
    const addIngredient = new AddIngredientService(ingredientRepo);

    const catRepo = new CategoriesRepository();
    const findCatego = new FindCategoryService(catRepo);
    const createCatego = new CreateCategoryService(catRepo);

    const category =
      (await findCatego.execute("category_test")) ||
      (await createCatego.execute("category_test"));
      
    let createRecipeForm:RawRecipe = {
      "title": "Ingredient_Test",
      "description": "Feijoada de feijao bom",
      "category": category,
      "cookTime": 30,
      "serves": 5,
      "vegetarian": false,
      "vegan": false,
      "lactosefree": false,
      "glutenfree": false,
      "isPrivate": false,
    }

    let ingredients:RequestIngredients[] = [
      {
        title: "Fejao",
        amount: 1
      },
      {
        title: "Alho",
        amount: 50
      }
    ]

    const recipe = await createRecipe.execute(createRecipeForm);
    
    let ingr = await addIngredient.execute(ingredients, recipe);
    
    expect(ingr.title[0]).toMatch("Fejao");
    expect(ingr.title[1]).toMatch("Alho");
    expect(ingr.amount[0]).toBe(1);
    expect(ingr.amount[1]).toBe(50);
  })

  test("Should throw error if the amount of any Ingredients is less than 1", async () => {
      
    const recipeRepo = new RecipesRepository();
    const createRecipe = new CreateRecipeService(recipeRepo);

    const ingredientRepo = new IngredientsRepository();
    const addIngredient = new AddIngredientService(ingredientRepo);

    const catRepo = new CategoriesRepository();
    const findCatego = new FindCategoryService(catRepo);
    const createCatego = new CreateCategoryService(catRepo);

    const category =
      (await findCatego.execute("category_test")) ||
      (await createCatego.execute("category_test"));
      
    let createRecipeForm:RawRecipe = {
      "title": "Ingredient_Test",
      "description": "Feijoada de feijao bom",
      "category": category,
      "cookTime": 30,
      "serves": 5,
      "vegetarian": false,
      "vegan": false,
      "lactosefree": false,
      "glutenfree": false,
      "isPrivate": false,
    }

    let ingredients:RequestIngredients[] = [
      {
        title: "Fejao",
        amount: 3
      },
      {
        title: "Alho",
        amount: 0
      }
    ]

    const recipe = await createRecipe.execute(createRecipeForm);
    
    try {
        await addIngredient.execute(ingredients, recipe);
    } catch (err) {
      expect(err.message).toBe("Ingredient Alho has unpermitted amount of 0");
      expect(err.statusCode).toBe(400);
    }
  })

  test("Should throw error if the amount of any Ingredients is more than 50", async () => {
      
    const recipeRepo = new RecipesRepository();
    const createRecipe = new CreateRecipeService(recipeRepo);

    const ingredientRepo = new IngredientsRepository();
    const addIngredient = new AddIngredientService(ingredientRepo);

    const catRepo = new CategoriesRepository();
    const findCatego = new FindCategoryService(catRepo);
    const createCatego = new CreateCategoryService(catRepo);

    const category =
      (await findCatego.execute("category_test")) ||
      (await createCatego.execute("category_test"));
      
    let createRecipeForm:RawRecipe = {
      "title": "Ingredient_Test",
      "description": "Feijoada de feijao bom",
      "category": category,
      "cookTime": 30,
      "serves": 5,
      "vegetarian": false,
      "vegan": false,
      "lactosefree": false,
      "glutenfree": false,
      "isPrivate": false,
    }

    let ingredients:RequestIngredients[] = [
      {
        title: "Carne",
        amount: 5
      },
      {
        title: "Sal",
        amount: 51
      }
    ]

    const recipe = await createRecipe.execute(createRecipeForm);
    
    try {
    let ingr = await addIngredient.execute(ingredients, recipe);}
    catch (err) {
      expect(err.message).toBe("Ingredient Sal has unpermitted amount of 51");
      expect(err.statusCode).toBe(400);
    }

  })

  test("Should throw error if Igredient list are empty ", async () => {

    const recipeRepo = new RecipesRepository();
    const createRecipe = new CreateRecipeService(recipeRepo);

    const ingredientRepo = new IngredientsRepository();
    const addIngredient = new AddIngredientService(ingredientRepo);

    const catRepo = new CategoriesRepository();
    const findCatego = new FindCategoryService(catRepo);
    const createCatego = new CreateCategoryService(catRepo);

    const category =
      (await findCatego.execute("category_test")) ||
      (await createCatego.execute("category_test"));
      
    let createRecipeForm:RawRecipe = {
      "title": "Ingredient_Test",
      "description": "Feijoada de feijao bom",
      "category": category,
      "cookTime": 30,
      "serves": 5,
      "vegetarian": false,
      "vegan": false,
      "lactosefree": false,
      "glutenfree": false,
      "isPrivate": false,
    }

    let ingredients:RequestIngredients[] = []

    const recipe = await createRecipe.execute(createRecipeForm);
    
    try {
    let ingr = await addIngredient.execute(ingredients, recipe);}
    catch (err) {
      expect(err.message).toBe("Missing Ingredients");
      expect(err.statusCode).toBe(400);
    }
   })
});