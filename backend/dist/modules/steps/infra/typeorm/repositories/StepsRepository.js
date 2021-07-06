"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Step_1 = __importDefault(require("../entities/Step"));
const typeorm_1 = require("typeorm");
class StepsRepository {
    constructor() {
        this.ormRepository = typeorm_1.getRepository(Step_1.default);
    }
    async addToRecipe(rawSteps, recipe) {
        this.removeStepsByRecipe(recipe);
        const steps = [];
        rawSteps.map((text) => {
            steps.push(text);
        });
        const newSteps = this.ormRepository.create({
            steps,
            recipe,
        });
        return await this.ormRepository.save(newSteps);
    }
    async findStep(recipe) {
        const recipeSteps = await this.ormRepository.find({
            where: { recipe }
        });
        return recipeSteps;
    }
    async removeStepsByRecipe(recipe) {
        const recipeSteps = await this.ormRepository.find({
            where: { recipe }
        });
        await this.ormRepository.remove(recipeSteps);
    }
}
exports.default = StepsRepository;
