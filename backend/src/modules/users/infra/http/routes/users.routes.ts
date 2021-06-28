import { Router } from 'express';

import 'reflect-metadata';
import UserController from '../controllers/UserController';

//Preocupações da rota: Receber requisições, chamar outro arquivo para tratar e devolver uma resposta
const userRouter = Router();

//Controller
const userController = new UserController();

//Rota Principal -> Como estamos usando um index.ts que indica que aqui é o lugar que deve ser salvo então não precisamos escrever as rotas por completo
//Rota: localhost:3333/recipes
userRouter.post('/', userController.create);

userRouter.get('/',  userController.getUser);

export default userRouter;

