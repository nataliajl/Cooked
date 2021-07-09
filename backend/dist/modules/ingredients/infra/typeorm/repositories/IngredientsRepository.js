"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Ingredient_1 = __importDefault(require("../entities/Ingredient"));
const Error_1 = __importDefault(require("@shared/errors/Error"));
class IngredientsRepository {
    constructor() {
        this.ormRepository = typeorm_1.getRepository(Ingredient_1.default);
    }
    async addToRecipe(ingredients, recipe) {
        if (!ingredients || ingredients.length < 1) {
            throw new Error_1.default("Missing Ingredients", 400);
        }
        ingredients.forEach(element => {
            if (element.amount < 1 || element.amount > 50) {
                throw new Error_1.default("Ingredient " + element.title + " has unpermitted amount of " + element.amount, 400);
            }
        });
        this.removeIngredientsByRecipe(recipe);
        const titles = [];
        const amounts = [];
        ingredients.map(({ amount, title }) => {
            titles.push(title);
            amounts.push(amount);
        });
        const newIngredients = this.ormRepository.create({
            recipe: recipe,
            title: titles,
            amount: amounts
        });
        await this.ormRepository.save(newIngredients);
        return newIngredients;
    }
    async findIngredientsByRecipe(recipe) {
        const recipeIngredients = await this.ormRepository.find({
            where: { recipe },
        });
        return recipeIngredients;
    }
    async removeIngredientsByRecipe(recipe) {
        const recipeIngredients = await this.ormRepository.find({
            where: { recipe },
        });
        await this.ormRepository.remove(recipeIngredients);
    }
    async getIngredientsRecipe(ingredients) {
        const ingredientsStr = ingredients.join(',');
        const recipesAndIngr = await this.ormRepository.find({
            join: {
                alias: "ingredient",
                innerJoinAndSelect: {
                    recipe: "ingredient.recipe"
                }
            },
            where: {
                "title": typeorm_1.Raw(alias => `${alias} && '{${ingredientsStr}}'`),
            },
        });
        const recipe_id = recipesAndIngr.map((value) => { return value.recipe.id; });
        return recipe_id;
    }
}
exports.default = IngredientsRepository;
