import { Router } from 'express';

import 'reflect-metadata';
import UserController from '../controllers/UserController';

//Preocupações da rota: Receber requisições, chamar outro arquivo para tratar e devolver uma resposta
const userRouter = Router();

//Controller
const userController = new UserController();

userRouter.post('/', userController.create);

userRouter.get('/',  userController.getUser);

userRouter.get('/login/',  userController.getUserForLogin);

export default userRouter;

