"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("reflect-metadata");
const CategoryController_1 = __importDefault(require("../controllers/CategoryController"));
const categoryRouter = express_1.Router();
const categoryController = new CategoryController_1.default();
categoryRouter.get('/', categoryController.getTitles);
categoryRouter.get('/id', categoryController.findTitleById);
categoryRouter.post('/', categoryController.create);
exports.default = categoryRouter;
