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


  public async execute(): Promise<Category[]> {
    return await this.categoriesRepository.getCategoryTitles();
  }
}

export default FindCategoryService;
