"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Error_1 = __importDefault(require("@shared/errors/Error"));
const typeorm_1 = require("typeorm");
const Recipe_1 = __importDefault(require("../entities/Recipe"));
class RecipesRepository {
    constructor() {
        this.ormRepository = typeorm_1.getRepository(Recipe_1.default);
    }
    async create(rawRecipe) {
        if (rawRecipe.title == null || rawRecipe.description == null || rawRecipe.category == null
            || rawRecipe.cookTime == null || rawRecipe.serves == null || rawRecipe.vegetarian == null
            || rawRecipe.vegan == null || rawRecipe.lactosefree == null || rawRecipe.glutenfree == null
            || rawRecipe.isPrivate == null) {
            throw new Error_1.default("Missing recipe fields", 400);
        }
        const recipe = this.ormRepository.create({
            category: rawRecipe.category,
            cookingTime: rawRecipe.cookTime,
            glutenfree: rawRecipe.glutenfree,
            description: rawRecipe.description,
            lactosefree: rawRecipe.lactosefree,
            private: rawRecipe.isPrivate,
            servingSize: rawRecipe.serves,
            title: rawRecipe.title,
            vegan: rawRecipe.vegan,
            vegetarian: rawRecipe.vegetarian,
        });
        await this.ormRepository.save(recipe);
        return recipe;
    }
    async findRecipeByIngredient(filter, recipeID) {
        const ids = recipeID.join(',');
        const categories = filter.categories.join(',');
        const recipes = this.ormRepository.find({
            where: {
                private: 'false',
                id: typeorm_1.Raw(alias => `${alias} = Any('{${ids}}')`),
                categoryId: typeorm_1.Raw(alias => `${alias} = Any('{${categories}}')`),
            }
        });
        return recipes;
    }
    async findRecipe(title) {
        const recipe = this.ormRepository.findOne({
            where: { title }
        });
        return recipe;
    }
    async remove(title) {
        const recipe = this.ormRepository.findOneOrFail({
            where: { title }
        });
        this.ormRepository.delete((await recipe).id);
    }
    async update(rawRecipe) {
        const recipeExists = this.ormRepository.findOneOrFail({
            where: { title: rawRecipe.title }
        });
        const recipe = this.ormRepository.save({
            id: (await recipeExists).id,
            title: (await recipeExists).title,
            category: rawRecipe.category,
            cookingTime: rawRecipe.cookTime,
            glutenfree: rawRecipe.glutenfree,
            description: rawRecipe.description,
            lactosefree: rawRecipe.lactosefree,
            private: rawRecipe.isPrivate,
            servingSize: rawRecipe.serves,
            vegan: rawRecipe.vegan,
            vegetarian: rawRecipe.vegetarian,
        });
        return recipe;
    }
}
exports.default = RecipesRepository;
