"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCategoryService_1 = __importDefault(require("@modules/categories/services/CreateCategoryService"));
const FindCategoryService_1 = __importDefault(require("@modules/categories/services/FindCategoryService"));
const AddIngredientService_1 = __importDefault(require("@modules/ingredients/services/AddIngredientService"));
const FindIngredientService_1 = __importDefault(require("@modules/ingredients/services/FindIngredientService"));
const RemoveIngredientService_1 = __importDefault(require("@modules/ingredients/services/RemoveIngredientService"));
const AddStepService_1 = __importDefault(require("@modules/steps/services/AddStepService"));
const FindStepService_1 = __importDefault(require("@modules/steps/services/FindStepService"));
const RemoveStepService_1 = __importDefault(require("@modules/steps/services/RemoveStepService"));
const CreateRecipeService_1 = __importDefault(require("@modules/recipes/services/CreateRecipeService"));
const FindRecipeService_1 = __importDefault(require("@modules/recipes/services/FindRecipeService"));
const UpdateRecipeService_1 = __importDefault(require("@modules/recipes/services/UpdateRecipeService"));
const RemoveRecipeService_1 = __importDefault(require("@modules/recipes/services/RemoveRecipeService"));
const tsyringe_1 = require("tsyringe");
const GetRelatedRecipeIDService_1 = __importDefault(require("@modules/ingredients/services/GetRelatedRecipeIDService"));
class RecipeController {
    async create(request, response) {
        const { private: isPrivate, category: categoryName, ingredients, title, cookTime, description, glutenfree, lactosefree, serves, steps, vegan, vegetarian } = request.body;
        try {
            const createCategory = tsyringe_1.container.resolve(CreateCategoryService_1.default);
            const FindCategory = tsyringe_1.container.resolve(FindCategoryService_1.default);
            const createRecipe = tsyringe_1.container.resolve(CreateRecipeService_1.default);
            const addIngredientToRecipe = tsyringe_1.container.resolve(AddIngredientService_1.default);
            const addStepsToRecipe = tsyringe_1.container.resolve(AddStepService_1.default);
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
                category });
            await addIngredientToRecipe.execute(ingredients, recipe);
            await addStepsToRecipe.execute(steps, recipe);
            return response.status(201).json({ Created: true });
        }
        catch (err) {
            return response.status(err.statusCode).send({ err });
        }
    }
    async getRecipe(request, response) {
        const findRecipe = tsyringe_1.container.resolve(FindRecipeService_1.default);
        const findSteps = tsyringe_1.container.resolve(FindStepService_1.default);
        const findIngredients = tsyringe_1.container.resolve(FindIngredientService_1.default);
        const findCategory = tsyringe_1.container.resolve(FindCategoryService_1.default);
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
    async getRecipeByIngredients(request, response) {
        const { ingredients, isOnlyIngredient, categories, servingSize, rate, restriction: { vegetarian, vegan }, cookingTime: { min, max, }, } = request.body;
        const findCategory = tsyringe_1.container.resolve(FindCategoryService_1.default);
        const categoryList = [];
        categories.forEach(async (value) => {
            const cat = await findCategory.execute(value);
            const ids = cat ? cat.id : null;
            if (ids)
                categoryList.push(ids);
        });
        const getRecipesID = tsyringe_1.container.resolve(GetRelatedRecipeIDService_1.default);
        const recipe_id = await getRecipesID.execute(ingredients, isOnlyIngredient);
        const getRecipeByIngredients = tsyringe_1.container.resolve(FindRecipeService_1.default);
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
        const findIngredients = tsyringe_1.container.resolve(FindIngredientService_1.default);
        const findSteps = tsyringe_1.container.resolve(FindStepService_1.default);
        let allRecipes = [];
        for (let i = 0; i < recipe.length; i++) {
            const _ingredients = await findIngredients.execute(recipe[i]);
            const _steps = await findSteps.execute(recipe[i]);
            allRecipes.push({ recipe: recipe[i],
                ingredients: _ingredients,
                steps: _steps });
        }
        ;
        return response.status(200).json(allRecipes);
    }
    async updateRecipe(request, response) {
        const { private: isPrivate, category: categoryName, ingredients, title, cookTime, description, glutenfree, lactosefree, serves, steps, vegan, vegetarian, } = request.body;
        const createCategory = tsyringe_1.container.resolve(CreateCategoryService_1.default);
        const FindCategory = tsyringe_1.container.resolve(FindCategoryService_1.default);
        const updateRecipe = tsyringe_1.container.resolve(UpdateRecipeService_1.default);
        const addIngredientToRecipe = tsyringe_1.container.resolve(AddIngredientService_1.default);
        const addStepsToRecipe = tsyringe_1.container.resolve(AddStepService_1.default);
        const category = (await FindCategory.execute(categoryName)) ||
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
    async removeRecipe(request, response) {
        const findRecipe = tsyringe_1.container.resolve(FindRecipeService_1.default);
        const removeRecipe = tsyringe_1.container.resolve(RemoveRecipeService_1.default);
        const removeSteps = tsyringe_1.container.resolve(RemoveStepService_1.default);
        const removeIngredients = tsyringe_1.container.resolve(RemoveIngredientService_1.default);
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
exports.default = RecipeController;
