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
beforeAll(() => {
    return typeorm_1.createConnection();
});
afterAll(async () => {
    let conn = typeorm_1.getConnection();
    return conn.close();
});
describe("This test describes the user creation process ", () => {
    let newUser = {
        name: "João da Silva",
        email: "---joao.silva@gmail.com"
    };
    it("should return status 200", async () => {
        const res = await request(server_1.default).post('/users').send(newUser);
        expect(res.status).toBe(200);
    });
    it("should contain the user in the database", async () => {
        const res = await request(server_1.default).get('/users').send({ email: newUser.email });
        expect(res.body).toHaveProperty('email', "---joao.silva@gmail.com");
    });
});
describe("This test describes the user deletion process ", () => {
    let newUser = {
        name: "João da Silva",
        email: "--joao.silva@gmail.com"
    };
    it("should return status 404 if the user doesn't exist", async () => {
        const res = await request(server_1.default).delete('/users').send({ email: newUser.email });
        expect(res.status).toBe(404);
    });
    it("should remove the user from the database and return 200", async () => {
        await request(server_1.default).post('/users').send(newUser);
        const res = await request(server_1.default).delete('/users').send({ email: newUser.email });
        const findUser = await request(server_1.default).get('/users').send({ email: newUser.email });
        expect(findUser.status).toBe(404);
        expect(res.status).toBe(200);
    });
});
