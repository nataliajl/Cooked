import IRecipesRepository from '@modules/recipes/repositories/IRecipesRepository';
import RawRecipe from '@shared/models/RawRecipe';
import { getRepository, Repository } from 'typeorm';
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
}

export default RecipesRepository;
