"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const Error_1 = __importDefault(require("@shared/errors/Error"));
let CreateCategoryService = class CreateCategoryService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    async execute(title) {
        const findCategoryByTitle = await this.categoriesRepository.findByTitle(title);
        if (findCategoryByTitle) {
            throw new Error_1.default('this category already exists!');
        }
        const category = await this.categoriesRepository.create(title);
        return category;
    }
};
CreateCategoryService = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject('CategoriesRepository')),
    __metadata("design:paramtypes", [Object])
], CreateCategoryService);
exports.default = CreateCategoryService;
