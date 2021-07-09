"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("@shared/infra/typeorm");
require("../container/index");
const request = require("supertest");
const typeorm_1 = require("typeorm");
const IngredientsRepository_1 = __importDefault(require("@modules/ingredients/infra/typeorm/repositories/IngredientsRepository"));
const RecipesRepository_1 = __importDefault(require("@modules/recipes/infra/typeorm/repositories/RecipesRepository"));
const CategoriesRepository_1 = __importDefault(require("@modules/categories/infra/typeorm/repositories/CategoriesRepository"));
const CreateCategoryService_1 = __importDefault(require("@modules/categories/services/CreateCategoryService"));
const FindCategoryService_1 = __importDefault(require("@modules/categories/services/FindCategoryService"));
const CreateRecipeService_1 = __importDefault(require("@modules/recipes/services/CreateRecipeService"));
const addIngredientService_1 = __importDefault(require("@modules/ingredients/services/addIngredientService"));
beforeAll(() => {
    return typeorm_1.createConnection();
});
afterAll(async () => {
    let conn = typeorm_1.getConnection();
    return conn.close();
});
describe("Post Recipe Tests", () => {
    test("Should successfully return recipe ingredients list", async () => {
        const recipeRepo = new RecipesRepository_1.default();
        const createRecipe = new CreateRecipeService_1.default(recipeRepo);
        const ingredientRepo = new IngredientsRepository_1.default();
        const addIngredient = new addIngredientService_1.default(ingredientRepo);
        const catRepo = new CategoriesRepository_1.default();
        const findCatego = new FindCategoryService_1.default(catRepo);
        const createCatego = new CreateCategoryService_1.default(catRepo);
        const category = (await findCatego.execute("category_test")) ||
            (await createCatego.execute("category_test"));
        let createRecipeForm = {
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
        };
        let ingredients = [
            {
                title: "Fejao",
                amount: 1
            },
            {
                title: "Alho",
                amount: 50
            }
        ];
        const recipe = await createRecipe.execute(createRecipeForm);
        let ingr = await addIngredient.execute(ingredients, recipe);
        expect(ingr.title[0]).toMatch("Fejao");
        expect(ingr.title[1]).toMatch("Alho");
        expect(ingr.amount[0]).toBe(1);
        expect(ingr.amount[1]).toBe(50);
    });
    test("Should throw error if the amount of any Ingredients is less than 1", async () => {
        const recipeRepo = new RecipesRepository_1.default();
        const createRecipe = new CreateRecipeService_1.default(recipeRepo);
        const ingredientRepo = new IngredientsRepository_1.default();
        const addIngredient = new addIngredientService_1.default(ingredientRepo);
        const catRepo = new CategoriesRepository_1.default();
        const findCatego = new FindCategoryService_1.default(catRepo);
        const createCatego = new CreateCategoryService_1.default(catRepo);
        const category = (await findCatego.execute("category_test")) ||
            (await createCatego.execute("category_test"));
        let createRecipeForm = {
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
        };
        let ingredients = [
            {
                title: "Fejao",
                amount: 3
            },
            {
                title: "Alho",
                amount: 0
            }
        ];
        const recipe = await createRecipe.execute(createRecipeForm);
        try {
            await addIngredient.execute(ingredients, recipe);
        }
        catch (err) {
            expect(err.message).toBe("Ingredient Alho has unpermitted amount of 0");
            expect(err.statusCode).toBe(400);
        }
    });
    test("Should throw error if the amount of any Ingredients is more than 50", async () => {
        const recipeRepo = new RecipesRepository_1.default();
        const createRecipe = new CreateRecipeService_1.default(recipeRepo);
        const ingredientRepo = new IngredientsRepository_1.default();
        const addIngredient = new addIngredientService_1.default(ingredientRepo);
        const catRepo = new CategoriesRepository_1.default();
        const findCatego = new FindCategoryService_1.default(catRepo);
        const createCatego = new CreateCategoryService_1.default(catRepo);
        const category = (await findCatego.execute("category_test")) ||
            (await createCatego.execute("category_test"));
        let createRecipeForm = {
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
        };
        let ingredients = [
            {
                title: "Carne",
                amount: 5
            },
            {
                title: "Sal",
                amount: 51
            }
        ];
        const recipe = await createRecipe.execute(createRecipeForm);
        try {
            let ingr = await addIngredient.execute(ingredients, recipe);
        }
        catch (err) {
            expect(err.message).toBe("Ingredient Sal has unpermitted amount of 51");
            expect(err.statusCode).toBe(400);
        }
    });
    test("Should throw error if Igredient list are empty ", async () => {
        const recipeRepo = new RecipesRepository_1.default();
        const createRecipe = new CreateRecipeService_1.default(recipeRepo);
        const ingredientRepo = new IngredientsRepository_1.default();
        const addIngredient = new addIngredientService_1.default(ingredientRepo);
        const catRepo = new CategoriesRepository_1.default();
        const findCatego = new FindCategoryService_1.default(catRepo);
        const createCatego = new CreateCategoryService_1.default(catRepo);
        const category = (await findCatego.execute("category_test")) ||
            (await createCatego.execute("category_test"));
        let createRecipeForm = {
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
        };
        let ingredients = [];
        const recipe = await createRecipe.execute(createRecipeForm);
        try {
            let ingr = await addIngredient.execute(ingredients, recipe);
        }
        catch (err) {
            expect(err.message).toBe("Missing Ingredients");
            expect(err.statusCode).toBe(400);
        }
    });
});
