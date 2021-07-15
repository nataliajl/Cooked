"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("@shared/infra/typeorm");
require("../container/index");
const request = require('supertest');
const server_1 = __importDefault(require("../infra/http/server"));
const typeorm_1 = require("typeorm");
const IngredientsRepository_1 = __importDefault(require("@modules/ingredients/infra/typeorm/repositories/IngredientsRepository"));
const RecipesRepository_1 = __importDefault(require("@modules/recipes/infra/typeorm/repositories/RecipesRepository"));
const CategoriesRepository_1 = __importDefault(require("@modules/categories/infra/typeorm/repositories/CategoriesRepository"));
const CreateCategoryService_1 = __importDefault(require("@modules/categories/services/CreateCategoryService"));
const FindCategoryService_1 = __importDefault(require("@modules/categories/services/FindCategoryService"));
const CreateRecipeService_1 = __importDefault(require("@modules/recipes/services/CreateRecipeService"));
const AddIngredientService_1 = __importDefault(require("@modules/ingredients/services/AddIngredientService"));
const RemoveCategoryService_1 = __importDefault(require("@modules/categories/services/RemoveCategoryService"));
const Error_1 = __importDefault(require("@shared/errors/Error"));
beforeAll(() => {
    return typeorm_1.createConnection();
});
afterAll(async () => {
    const conn = typeorm_1.getConnection();
    return conn.close();
});
describe('Post Recipe Tests', () => {
    afterEach(async () => {
        try {
            request(server_1.default).delete('/recipes').send({ title: 'Ingredient_Test' });
            const removeCateogry = new RemoveCategoryService_1.default(new CategoriesRepository_1.default());
            removeCateogry.execute('category_test');
        }
        catch (e) {
            expect(e.message).toMatch('Recipe not found');
        }
    });
    test('Should successfully return recipe ingredients list', async () => {
        const recipeRepo = new RecipesRepository_1.default();
        const createRecipe = new CreateRecipeService_1.default(recipeRepo);
        const ingredientRepo = new IngredientsRepository_1.default();
        const addIngredient = new AddIngredientService_1.default(ingredientRepo);
        const catRepo = new CategoriesRepository_1.default();
        const findCatego = new FindCategoryService_1.default(catRepo);
        const createCatego = new CreateCategoryService_1.default(catRepo);
        const category = (await findCatego.execute('category_test')) ||
            (await createCatego.execute('category_test'));
        const createRecipeForm = {
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
        const ingredients = [
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
        const recipeRepo = new RecipesRepository_1.default();
        const createRecipe = new CreateRecipeService_1.default(recipeRepo);
        const ingredientRepo = new IngredientsRepository_1.default();
        const addIngredient = new AddIngredientService_1.default(ingredientRepo);
        const catRepo = new CategoriesRepository_1.default();
        const findCatego = new FindCategoryService_1.default(catRepo);
        const createCatego = new CreateCategoryService_1.default(catRepo);
        const category = (await findCatego.execute('category_test')) ||
            (await createCatego.execute('category_test'));
        const createRecipeForm = {
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
        const ingredients = [
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
        expect(addIngredient.execute(ingredients, recipe)).rejects.toBeInstanceOf(Error_1.default);
    });
    test('Should throw error if the amount of any Ingredients is more than 50', async () => {
        const recipeRepo = new RecipesRepository_1.default();
        const createRecipe = new CreateRecipeService_1.default(recipeRepo);
        const ingredientRepo = new IngredientsRepository_1.default();
        const addIngredient = new AddIngredientService_1.default(ingredientRepo);
        const catRepo = new CategoriesRepository_1.default();
        const findCatego = new FindCategoryService_1.default(catRepo);
        const createCatego = new CreateCategoryService_1.default(catRepo);
        const category = (await findCatego.execute('category_test')) ||
            (await createCatego.execute('category_test'));
        const createRecipeForm = {
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
        const ingredients = [
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
        expect(addIngredient.execute(ingredients, recipe)).rejects.toBeInstanceOf(Error_1.default);
    });
    test('Should throw error if Igredient list are empty ', async () => {
        const recipeRepo = new RecipesRepository_1.default();
        const createRecipe = new CreateRecipeService_1.default(recipeRepo);
        const ingredientRepo = new IngredientsRepository_1.default();
        const addIngredient = new AddIngredientService_1.default(ingredientRepo);
        const catRepo = new CategoriesRepository_1.default();
        const findCatego = new FindCategoryService_1.default(catRepo);
        const createCatego = new CreateCategoryService_1.default(catRepo);
        const category = (await findCatego.execute('category_test')) ||
            (await createCatego.execute('category_test'));
        const createRecipeForm = {
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
        const ingredients = [];
        const recipe = await createRecipe.execute(createRecipeForm);
        expect(addIngredient.execute(ingredients, recipe)).rejects.toBeInstanceOf(Error_1.default);
    });
});
