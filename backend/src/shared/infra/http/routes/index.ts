// src/routes/index.ts
import { Router } from 'express';

import categoriesRouter from '@modules/categories/infra/http/routes/categories.routes';
import recipesRouter from '@modules/recipes/infra/http/routes/recipes.routes';

const routes = Router();

routes.use('/categories', categoriesRouter);
routes.use('/recipes', recipesRouter);

export default routes;
