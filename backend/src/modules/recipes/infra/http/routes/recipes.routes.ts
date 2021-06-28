import { Router } from 'express';

import 'reflect-metadata';
import RecipeController from '../controllers/RecipeController';

//Preocupações da rota: Receber requisições, chamar outro arquivo para tratar e devolver uma resposta
const recipesRouter = Router();

//Controller
const recipesController = new RecipeController();

//Rota Principal -> Como estamos usando um index.ts que indica que aqui é o lugar que deve ser salvo então não precisamos escrever as rotas por completo
//Rota: localhost:3333/recipes
recipesRouter.post('/', recipesController.create);

export default recipesRouter;
