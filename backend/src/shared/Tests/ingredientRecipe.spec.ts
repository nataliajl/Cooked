import "reflect-metadata"

import '@shared/infra/typeorm';
import "../container/index";
const request = require("supertest");
import app from '../infra/http/server';
import { createConnection, getConnection } from 'typeorm';
import RequestIngredients from '@shared/models/RequestIngredients'
import IngredientsRepository from '@modules/ingredients/infra/typeorm/repositories/IngredientsRepository';
import RecipesRepository from "@modules/recipes/infra/typeorm/repositories/RecipesRepository";
import RawRecipe from "@shared/models/RawRecipe";
import CategoriesRepository from "@modules/categories/infra/typeorm/repositories/CategoriesRepository";
import CreateCategoryService from '@modules/categories/services/CreateCategoryService';
import FindCategoryService from '@modules/categories/services/FindCategoryService';
import CreateRecipeService from '@modules/recipes/services/CreateRecipeService';
import findIngredientService from '@modules/ingredients/services/findIngredientService';
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
    const catRepo = new CategoriesRepository();
    const removeCateogry = new RemoveCategoryService(catRepo);
    removeCateogry.execute("category_test")
    await request(app).delete('/recipes').send({title: "Ingredient_Test"});
  })

  it("Should successfully return recipe ingredients list", async () => {

    const recipeRepo = new RecipesRepository();
    const createRecipe = new CreateRecipeService(recipeRepo);

    const ingredientRepo = new IngredientsRepository();
    const findIngredient = new findIngredientService(ingredientRepo);
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
    
    expect(ingr[0]).toHaveProperty("title", "Fejao");
    expect(ingr[0]).toHaveProperty("amount", 1);
    expect(ingr[1]).toHaveProperty("title", "Alho");
    expect(ingr[1]).toHaveProperty("amount", 50);
      
})

  it("Should throw error if the amount of any Ingredients is less than 1", async () => {
      
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
    let ingr = await addIngredient.execute(ingredients, recipe);}
    catch (err) {
      expect(err.message).toBe("Ingredient Alho has unpermitted amount of 0");
      expect(err.statusCode).toBe(400);
    }

  })

  it("Should throw error if the amount of any Ingredients is more than 50", async () => {
      
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

  it("Should throw error if Igredient list are empty ", async () => {

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