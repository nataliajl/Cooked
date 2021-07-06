"use strict";
exports.__esModule = true;
var tsyringe_1 = require("tsyringe");
var CategoriesRepository_1 = require("@modules/categories/infra/typeorm/repositories/CategoriesRepository");
var RecipesRepository_1 = require("@modules/recipes/infra/typeorm/repositories/RecipesRepository");
var IngredientsRepository_1 = require("@modules/ingredients/infra/typeorm/repositories/IngredientsRepository");
var StepsRepository_1 = require("@modules/steps/infra/typeorm/repositories/StepsRepository");
var UsersRepository_1 = require("@modules/users/infra/typeorm/repositories/UsersRepository");
//Esse arquivo (Container) serve para colocar em prática a Inversão de Dependencias
tsyringe_1.container.registerSingleton('CategoriesRepository', CategoriesRepository_1["default"]);
tsyringe_1.container.registerSingleton('RecipesRepository', RecipesRepository_1["default"]);
tsyringe_1.container.registerSingleton('IngredientsRepository', IngredientsRepository_1["default"]);
tsyringe_1.container.registerSingleton('StepsRepository', StepsRepository_1["default"]);
tsyringe_1.container.registerSingleton('UsersRepository', UsersRepository_1["default"]);
