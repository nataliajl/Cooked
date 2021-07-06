"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("@shared/infra/typeorm");
require("../container/index");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const typeorm_1 = require("typeorm");
let createRecipeForm = {
    "title": "Feijoada",
    "description": "Feijoada de feijao bom",
    "category": "brazilian",
    "cookTime": 10,
    "serves": 1,
    "vegetarian": false,
    "vegan": false,
    "lactosefree": false,
    "glutenfree": false,
    "ingredients": [
        {
            "title": "Feijao",
            "amount": 2
        },
        {
            "title": "Porco",
            "amount": 1
        }
    ],
    "private": false,
    "steps": [
        "Colocar no fogo",
        "Colocar no prato",
        "Comer"
    ]
};
beforeAll(() => {
    return typeorm_1.createConnection();
});
afterAll(async () => {
    let conn = typeorm_1.getConnection();
    return conn.close();
});
describe("Path Recipe Tests", () => {
    beforeEach(async () => {
        await supertest_1.default(server_1.default)
            .post('/recipes').send(createRecipeForm);
    });
    afterEach(async () => {
        await supertest_1.default(server_1.default).delete('/recipes').send({ title: "Feijoada" });
    });
    it("Should return status 200", async () => {
        const res = await supertest_1.default(server_1.default)
            .patch('/recipes').send(createRecipeForm);
        expect(res.status).toBe(200);
    });
    it("Should successfully update modified recipe fields ", async () => {
        createRecipeForm.category = "portuguese";
        createRecipeForm.cookTime = 60;
        const res = await supertest_1.default(server_1.default)
            .patch('/recipes').send(createRecipeForm);
        expect(res.body).toHaveProperty('category', 'portuguese');
        expect(res.body).toHaveProperty('cookTime', 60);
    });
    it("Should not increase the Ingredients, but replace them ", async () => {
        createRecipeForm.ingredients = [
            { "title": "Feijao preto ", "amount": 1 },
            { "title": "Calabresa", "amount": 3 },
            { "title": "Alho", "amount": 5 }
        ];
        const res = await supertest_1.default(server_1.default)
            .patch('/recipes').send(createRecipeForm);
        expect(res.status).toBe(200);
        expect(res.body.ingredients).toHaveLength(3);
        expect(res.body.ingredients[0]).toEqual({ "title": "Feijao preto ", "amount": 1 });
    });
    it("Should not increase the Steps, but replace them", async () => {
        createRecipeForm.steps = [
            "Comer",
            "Comprar ingredients :("
        ];
        const res = await supertest_1.default(server_1.default)
            .patch('/recipes').send(createRecipeForm);
        expect(res.body.steps).toHaveLength(2);
    });
});
