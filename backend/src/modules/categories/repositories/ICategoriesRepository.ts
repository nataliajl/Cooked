import Category from '../infra/typeorm/entities/Category';

//SOLID
//Liskov Substitution Principle
export default interface ICategoriesRepository {
  create(title: string): Promise<Category>;
  findByTitle(title: string): Promise<Category | undefined>;
  findTitleById(id: string): Promise<string>;
  removeCategoryByTitle(title: string): Promise<void>;
  getCategoryTitles(): Promise<Category[]>;
}
