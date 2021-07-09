"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("@shared/infra/typeorm");
require("../container/index");
const request = require("supertest");
const server_1 = __importDefault(require("../infra/http/server"));
const typeorm_1 = require("typeorm");
let createRecipeForm = {
    "title": "Post_Test",
    "description": "Feijoada de feijao bom",
    "category": "brazilian",
    "cookTime": 30,
    "serves": 5,
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
describe("Post Recipe Tests", () => {
    afterEach(async () => {
        await request(server_1.default).delete('/recipes').send({ title: "Post_Test" });
    });
    it("Should return status 200", async () => {
        const res = await request(server_1.default)
            .post('/recipes').send(createRecipeForm);
        expect(res.status).toBe(201);
    });
    it("JSON Should have value in all recipe properties ", async () => {
        const recipeForm = {
            "title": createRecipeForm.title,
            "description": null,
            "category": createRecipeForm.category,
            "cookTime": createRecipeForm.cookTime,
            "serves": createRecipeForm.serves,
            "vegetarian": createRecipeForm.vegetarian,
            "vegan": createRecipeForm.vegan,
            "lactosefree": createRecipeForm.lactosefree,
            "glutenfree": createRecipeForm.glutenfree,
            "ingredients": createRecipeForm.ingredients,
            "private": createRecipeForm.private,
            "steps": createRecipeForm.steps
        };
        const res = await request(server_1.default)
            .post('/recipes').send(recipeForm);
        expect(res.status).toBe(400);
        expect(res.body.err.message).toMatch("Missing recipe fields");
    });
});
