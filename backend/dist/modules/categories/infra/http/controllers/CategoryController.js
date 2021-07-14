"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CreateCategoryService_1 = __importDefault(require("@modules/categories/services/CreateCategoryService"));
const GetCategoryTitlesService_1 = __importDefault(require("@modules/categories/services/GetCategoryTitlesService"));
const FindCategoryService_1 = __importDefault(require("@modules/categories/services/FindCategoryService"));
class CategoryController {
    async create(request, response) {
        const { title } = request.body;
        const createCategory = tsyringe_1.container.resolve(CreateCategoryService_1.default);
        const category = await createCategory.execute(title);
        return response.json(category);
    }
    async getTitles(request, response) {
        const getCategoryTitles = tsyringe_1.container.resolve(GetCategoryTitlesService_1.default);
        const categories = await getCategoryTitles.execute();
        const titles = categories.map((value) => {
            return value.title;
        });
        return response.json(titles);
    }
    async findTitleById(request, response) {
        const id = `${request.query.category}`;
        const findCategory = tsyringe_1.container.resolve(FindCategoryService_1.default);
        const title = await findCategory.executeId(id);
        return response.json(title);
    }
}
exports.default = CategoryController;
