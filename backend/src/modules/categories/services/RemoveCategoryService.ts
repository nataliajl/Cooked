import { injectable, inject } from 'tsyringe';

import ICategoriesRepository from '../repositories/ICategoriesRepository';

@injectable()
class RemoveCategoryService {
  private categoriesRepository: ICategoriesRepository;

  constructor(
    //Aqui fazemos a injeção de dependencia
    @inject('CategoriesRepository')
    categoriesRepository: ICategoriesRepository
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  public async execute(title: string): Promise<void> {
    this.categoriesRepository.removeCategoryByTitle(title);
  }
}

export default RemoveCategoryService;
