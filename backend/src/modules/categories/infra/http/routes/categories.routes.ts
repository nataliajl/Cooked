import { Router } from 'express';

import 'reflect-metadata';
import CategoryController from '../controllers/CategoryController';


//Preocupações da rota: Receber requisições, chamar outro arquivo para tratar e devolver uma resposta
const categoryRouter = Router();

//Controller
const categoryController = new CategoryController();

//Rota Principal -> Como estamos usando um index.ts que indica que aqui é o lugar que deve ser salvo então não precisamos escrever as rotas por completo
//Rota: localhost:3333/category
categoryRouter.get('/',  categoryController.getTitles);

//Rota: localhost:3333/categories
categoryRouter.post('/', categoryController.create);

export default categoryRouter;
