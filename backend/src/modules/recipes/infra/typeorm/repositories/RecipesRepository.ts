import IRecipesRepository from '@modules/recipes/repositories/IRecipesRepository';
import Filter from '@shared/models/Filter';
import RawRecipe from '@shared/models/RawRecipe';
import { Between, getRepository, Raw, Repository } from 'typeorm';
import Recipe from '../entities/Recipe';

class RecipesRepository implements IRecipesRepository {
  private ormRepository: Repository<Recipe>;

  constructor() {
    this.ormRepository = getRepository(Recipe);
  }

  public async create(rawRecipe: RawRecipe): Promise<Recipe> {
    //Criando a receita
    const recipe = this.ormRepository.create({
      category: rawRecipe.category,
      cookingTime: rawRecipe.cookTime,
      glutenfree: rawRecipe.glutenfree,
      description: rawRecipe.description,
      lactosefree: rawRecipe.lactosefree,
      private: rawRecipe.isPrivate,
      servingSize: rawRecipe.serves,
      title: rawRecipe.title,
      vegan: rawRecipe.vegan,
      vegetarian: rawRecipe.vegetarian,
    });

    //Salvando no banco
    await this.ormRepository.save(recipe);

    return recipe;
  }

  public async getRecipeByIngredient(filter : Filter) : Promise<String> {
    const recipes = this.ormRepository.find({
      ingredients: Raw(alias =>`${alias} IN (:...title)`, {title: filter.ingredients}),
      category: Raw(filter.category.toString()), 
      private: Raw('false'), 
      cookingTime: Between(filter.cookingTime.min, filter.cookingTime.min)
    });

    return JSON.stringify(recipes);
  }
}

export default RecipesRepository;
