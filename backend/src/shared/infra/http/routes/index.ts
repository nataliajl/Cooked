// src/routes/index.ts
import { Router } from 'express';

import categoriesRouter from '@modules/categories/infra/http/routes/categories.routes';
import recipesRouter from '@modules/recipes/infra/http/routes/recipes.routes';
import userRouter from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/categories', categoriesRouter);
routes.use('/recipes', recipesRouter);
routes.use('/users', userRouter);

export default routes;
