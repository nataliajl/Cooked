"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("reflect-metadata");
const RecipeController_1 = __importDefault(require("../controllers/RecipeController"));
const recipesRouter = express_1.Router();
const recipesController = new RecipeController_1.default();
recipesRouter.post('/', recipesController.create);
recipesRouter.post('/search', recipesController.recipeByIngredients);
recipesRouter.get('/', recipesController.getRecipe);
recipesRouter.delete('/', recipesController.removeRecipe);
recipesRouter.patch('/', recipesController.updateRecipe);
exports.default = recipesRouter;
