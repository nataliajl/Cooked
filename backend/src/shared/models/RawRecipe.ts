import Category from '@modules/categories/infra/typeorm/entities/Category';

export default interface RawRecipe {
  title: string;
  cookTime: number;
  description: string;
  glutenfree: boolean;
  lactosefree: boolean;
  serves: number;
  vegan: boolean;
  vegetarian: boolean;
  isPrivate: boolean;
  category: Category;
}
