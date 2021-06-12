import Category from '@modules/categories/infra/typeorm/entities/Category';

import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/Error';
import ICategoriesRepository from '../repositories/ICategoriesRepository';

//Isso permite a classe receber injeção de dependencia
@injectable()
class CreateCategoryService {
  //SOLID
  /*D - DEPENDENCY INVERSION -> Ao invés de instanciar o repositório aqui dentro
    iremos recebe-lo por parâmetro */

  private categoriesRepository: ICategoriesRepository;

  constructor(
    //Aqui fazemos a injeção de dependencia
    @inject('CategoriesRepository')
    categoriesRepository: ICategoriesRepository
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  public async execute(title: string): Promise<Category> {
    //Buscando no banco categorias de mesmo titulo
    const findCategoryByTitle = await this.categoriesRepository.findByTitle(
      title
    );

    //Caso ja exista
    if (findCategoryByTitle) {
      throw new AppError('this category already exists!');
    }

    //Criando a category
    const category = await this.categoriesRepository.create(title);

    return category;
  }
}

export default CreateCategoryService;
