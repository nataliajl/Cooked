"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../entities/Category"));
const typeorm_1 = require("typeorm");
class CategoriesRepository {
    constructor() {
        this.ormRepository = typeorm_1.getRepository(Category_1.default);
    }
    async findByTitle(title) {
        const findCategory = await this.ormRepository.findOne({
            where: { title },
        });
        return findCategory;
    }
    async create(title) {
        const category = this.ormRepository.create({
            title,
        });
        await this.ormRepository.save(category);
        return category;
    }
    async findTitleById(id) {
        const category = await this.ormRepository.findOneOrFail({
            where: { id },
        });
        ({ name: 'category_id' });
        return category.title;
    }
    async removeCategoryByTitle(title) {
        await this.ormRepository.delete({ title: title });
    }
    async getCategoryTitles() {
        const categories = this.ormRepository.find({ select: ["title"] });
        console.log(categories);
        return Object.values(categories);
    }
}
exports.default = CategoriesRepository;
