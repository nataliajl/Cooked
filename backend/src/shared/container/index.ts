import { container } from 'tsyringe';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import CategoriesRepository from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';

//Esse arquivo (Container) serve para colocar em prática a Inversão de Dependencias

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);
