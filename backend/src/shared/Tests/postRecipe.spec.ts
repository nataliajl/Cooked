import "reflect-metadata"

import '@shared/infra/typeorm';
import "../container/index";
const request = require("supertest");
import app from '../infra/http/server';
import { createConnection, getConnection } from 'typeorm';
import AppError from "@shared/errors/Error";

// Testes utilizando a estrat�gia de Classes de Equiva�ncia

//Recipe model used in tests
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

describe("Post Recipe Tests", () => {    

  afterEach(async () => {
    await request(app).delete('/recipes').send({title: "Post_Test"});
  })

  it("Should return status 200", async () => {

    const res = await request(app)
        .post('/recipes').send(createRecipeForm);

    expect(res.status).toBe(201);
      
})

  it("JSON Should have value in all recipe properties ", async () => {

      const recipeForm ={
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
      }

      
      const res = await request(app)
        .post('/recipes').send(recipeForm);
      

      expect(res.status).toBe(400);
      expect(res.body.err.message).toMatch("Missing recipe fields");
   })

  // it("Should fail if Ingredients are empty ", async () => {
    
  //     createRecipeForm.ingredients = [
  //     ];

  //     const res = await request(app)
  //         .patch('/recipes').send(createRecipeForm);

  //     expect(res.status).toBe(200);
  //     expect(res.body.ingredients).toHaveLength(3);
  //     expect(res.body.ingredients[0]).toEqual({ "title": "Feijao preto ", "amount": 1});

  // })

  // it("Should fail if Steps are empty", async () => {

  //     createRecipeForm.steps = [
  //     ];

  //     const res = await request(app)
  //         .patch('/recipes').send(createRecipeForm);

  //     expect(res.body.steps).toHaveLength(2);
        
  // })

});