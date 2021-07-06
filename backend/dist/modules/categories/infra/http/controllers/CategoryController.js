"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CreateCategoryService_1 = __importDefault(require("@modules/categories/services/CreateCategoryService"));
const GetCategoryTitlesService_1 = __importDefault(require("@modules/categories/services/GetCategoryTitlesService"));
class CategoryController {
    async create(request, response) {
        const { title } = request.body;
        const createCategory = tsyringe_1.container.resolve(CreateCategoryService_1.default);
        const category = await createCategory.execute(title);
        return response.json(category);
    }
    async getTitles(request, response) {
        const getCategoryTitles = tsyringe_1.container.resolve(GetCategoryTitlesService_1.default);
        const categoryTitles = await getCategoryTitles.execute();
        return response.json(categoryTitles);
    }
}
exports.default = CategoryController;
