import { container } from 'tsyringe';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import CategoriesRepository from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';
import IRecipesRepository from '@modules/recipes/repositories/IRecipesRepository';
import RecipesRepository from '@modules/recipes/infra/typeorm/repositories/RecipesRepository';
import IIngredientsRepository from '@modules/ingredients/repositories/IIngredientsRepository';
import IngredientsRepository from '@modules/ingredients/infra/typeorm/repositories/IngredientsRepository';
import IStepsRepository from '@modules/steps/repositories/IStepsRepository';
import StepsRepository from '@modules/steps/infra/typeorm/repositories/StepsRepository';

//Esse arquivo (Container) serve para colocar em prática a Inversão de Dependencias

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<IRecipesRepository>(
  'RecipesRepository',
  RecipesRepository
);

container.registerSingleton<IIngredientsRepository>(
  'IngredientsRepository',
  IngredientsRepository
);

container.registerSingleton<IStepsRepository>(
  'StepsRepository',
  StepsRepository
);
