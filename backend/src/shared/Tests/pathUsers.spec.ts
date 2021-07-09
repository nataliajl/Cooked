import "reflect-metadata"
import '@shared/infra/typeorm';
import "../container/index";
const request = require("supertest");
import app from '../infra/http/server';
import { createConnection, getConnection } from 'typeorm';




beforeAll(() => {
	return createConnection();
});


afterAll( async () => { 
	let conn = getConnection();
	return conn.close();
});


describe("This test describes the user creation process ", () => {    
	let newUser = {
		name: "João da Silva",
		email: "---joao.silva@gmail.com"
	}
	
	it("should return status 200", async () => {
		const res = await request(app).post('/users').send(newUser);
		expect(res.status).toBe(200);
			
	})

	it("should contain the user in the database", async () => {
		const res = await request(app).get('/users').send({email: newUser.email});
		expect(res.body).toHaveProperty('email', "---joao.silva@gmail.com");
	})
});

describe("This test describes the user deletion process ", () => {    
	let newUser = {
		name: "João da Silva",
		email: "--joao.silva@gmail.com"
	}	
	it("should return status 404 if the user doesn't exist", async () => {
		const res = await request(app).delete('/users').send({email: newUser.email});
		expect(res.status).toBe(404);	
	})

	it("should remove the user from the database and return 200", async () => {
		await request(app).post('/users').send(newUser);
		const res = await request(app).delete('/users').send({email: newUser.email});
		const findUser = await request(app).get('/users').send({email: newUser.email});
		expect(findUser.status).toBe(404);
		expect(res.status).toBe(200);
	})

});
