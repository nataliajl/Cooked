import "reflect-metadata"

import '@shared/infra/typeorm';
import "../container/index";
const request = require("supertest");
import app from '../infra/http/server';
import { createConnection, getConnection } from 'typeorm';

//Recipe model used in tests
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
      "ingredients": 
          {
              "title": ["Feijao", "Porco"],
              "amount": [2, 1]
          },   
      "private": false,
      "steps": [
          "Colocar no fogo",
          "Colocar no prato",
          "Comer"
      ]
}

// Create Connection Before Tests 
beforeAll(() => {
  return createConnection();
});

// Close Connection Before Tests
afterAll( async () => { 
  let conn = getConnection();
  return conn.close();
});

describe("Path Recipe Tests", () => {    

  beforeEach(async () => {
    await request(app)
    .post('/recipes').send(createRecipeForm);
  })

  afterEach(async () => {
    await request(app).delete('/recipes').send({title: "Feijoada"});
  })

  it("Should return status 200", async () => {

    const res = await request(app)
        .patch('/recipes').send(createRecipeForm);

    expect(res.status).toBe(200);
      
})

  it("Should successfully update modified recipe fields ", async () => {

      createRecipeForm.category = "portuguese";
      createRecipeForm.cookTime = 60;
      
      const res = await request(app)
        .patch('/recipes').send(createRecipeForm);
      
      expect(res.body).toHaveProperty('category', 'portuguese');
      expect(res.body).toHaveProperty('cookTime', 60);
    })

  it("Should not increase the Ingredients, but replace them ", async () => {
    
      createRecipeForm.ingredients = { "title": ["Feijao preto ", "Calabresa", "Alho"], "amount": [1, 3, 5]};
        

      const res = await request(app)
          .patch('/recipes').send(createRecipeForm);

      expect(res.status).toBe(200);
      expect(res.body.ingredients).toHaveLength(3);
      expect(res.body.ingredients[0]).toEqual({ "title": "Feijao preto ", "amount": 1});

  })

  it("Should not increase the Steps, but replace them", async () => {

      createRecipeForm.steps = [
        "Comer",
        "Comprar ingredients :("
      ];

      const res = await request(app)
          .patch('/recipes').send(createRecipeForm);

      expect(res.body.steps).toHaveLength(2);
        
  })

});