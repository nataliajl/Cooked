import { Router } from 'express';

import 'reflect-metadata';
import UserController from '../controllers/UserController';

const userRouter = Router();

//Controller
const userController = new UserController();


userRouter.post('/', userController.create);

userRouter.get('/',  userController.getUser);

userRouter.get('/login/',  userController.getUserForLogin);

userRouter.delete('/',  userController.remove);

export default userRouter;

