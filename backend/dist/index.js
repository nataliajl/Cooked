"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_routes_1 = __importDefault(require("@modules/categories/infra/http/routes/categories.routes"));
const recipes_routes_1 = __importDefault(require("@modules/recipes/infra/http/routes/recipes.routes"));
const users_routes_1 = __importDefault(require("@modules/users/infra/http/routes/users.routes"));
const routes = express_1.Router();
routes.use('/categories', categories_routes_1.default);
routes.use('/recipes', recipes_routes_1.default);
routes.use('/users', users_routes_1.default);
exports.default = routes;
