import Category from '../entities/Category';
import { getRepository, Repository } from 'typeorm';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  //Verificando se existe alguma categoria que já foi cadastrada com esse mesmo titulo
  public async findByTitle(title: string): Promise<Category | undefined> {
    const findCategory = await this.ormRepository.findOne({
      where: { title },
    });
    return findCategory;
  }

  public async create(title: string): Promise<Category> {
    //Criando a categoria (Não está no banco de dados ainda)
    const category = this.ormRepository.create({
      title,
    });

    //Pronto, agora salvou!
    await this.ormRepository.save(category);

    return category;
  }

  public async findTitleById(id: string): Promise<string> {
    const category = await this.ormRepository.findOneOrFail({
      where: { id },
    });({ name: 'category_id' })
    return category.title;
  }

  public async removeCategoryByTitle(title: string): Promise<void> {
    await this.ormRepository.delete({title: title});
  }
}

export default CategoriesRepository;
