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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("@modules/categories/infra/typeorm/entities/Category"));
const Ingredient_1 = __importDefault(require("@modules/ingredients/infra/typeorm/entities/Ingredient"));
const typeorm_1 = require("typeorm");
let Recipe = class Recipe {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Recipe.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Recipe.prototype, "title", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Recipe.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Recipe.prototype, "cooking_time", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Recipe.prototype, "servingSize", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Recipe.prototype, "vegetarian", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Recipe.prototype, "vegan", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Recipe.prototype, "lactosefree", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Recipe.prototype, "glutenfree", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Recipe.prototype, "private", void 0);
__decorate([
    typeorm_1.OneToMany(() => Ingredient_1.default, ingredient => ingredient.recipe),
    __metadata("design:type", Array)
], Recipe.prototype, "ingredients", void 0);
__decorate([
    typeorm_1.Column({ name: 'category_id' }),
    __metadata("design:type", String)
], Recipe.prototype, "categoryId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Category_1.default),
    typeorm_1.JoinColumn({ name: 'category_id' }),
    __metadata("design:type", Category_1.default)
], Recipe.prototype, "category", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Recipe.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Recipe.prototype, "updated_at", void 0);
Recipe = __decorate([
    typeorm_1.Entity('recipes')
], Recipe);
exports.default = Recipe;
