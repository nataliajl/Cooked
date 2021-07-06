"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CategoriesRepository_1 = __importDefault(require("@modules/categories/infra/typeorm/repositories/CategoriesRepository"));
const RecipesRepository_1 = __importDefault(require("@modules/recipes/infra/typeorm/repositories/RecipesRepository"));
const IngredientsRepository_1 = __importDefault(require("@modules/ingredients/infra/typeorm/repositories/IngredientsRepository"));
const StepsRepository_1 = __importDefault(require("@modules/steps/infra/typeorm/repositories/StepsRepository"));
const UsersRepository_1 = __importDefault(require("@modules/users/infra/typeorm/repositories/UsersRepository"));
tsyringe_1.container.registerSingleton('CategoriesRepository', CategoriesRepository_1.default);
tsyringe_1.container.registerSingleton('RecipesRepository', RecipesRepository_1.default);
tsyringe_1.container.registerSingleton('IngredientsRepository', IngredientsRepository_1.default);
tsyringe_1.container.registerSingleton('StepsRepository', StepsRepository_1.default);
tsyringe_1.container.registerSingleton('UsersRepository', UsersRepository_1.default);
