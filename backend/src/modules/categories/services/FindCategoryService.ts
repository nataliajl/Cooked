import Category from '@modules/categories/infra/typeorm/entities/Category';

import { injectable, inject } from 'tsyringe';

import ICategoriesRepository from '../repositories/ICategoriesRepository';

//Isso permite a classe receber injeção de dependencia
@injectable()
class FindCategoryService {
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

  public async execute(title: string): Promise<Category | undefined> {
    //Buscando no banco categorias de mesmo titulo
    return await this.categoriesRepository.findByTitle(title);
  }

  public async executeId(id: string): Promise<string> {
    return await this.categoriesRepository.findTitleById(id);
  }
}

export default FindCategoryService;
