import IRecipesRepository from '@modules/recipes/repositories/IRecipesRepository';
import Filter from '@shared/models/Filter';
import AppError from '@shared/errors/Error';
import RawRecipe from '@shared/models/RawRecipe';
import { Between, getRepository, Raw, Repository } from 'typeorm';
import Recipe from '../entities/Recipe';

class RecipesRepository implements IRecipesRepository {
  private ormRepository: Repository<Recipe>;

  constructor() {
    this.ormRepository = getRepository(Recipe);
  }

  public async create(rawRecipe: RawRecipe): Promise<Recipe> {

    if (rawRecipe.title == null   || rawRecipe.description == null  || rawRecipe.category == null  
      || rawRecipe.cookTime == null  || rawRecipe.serves == null || rawRecipe.vegetarian == null 
      || rawRecipe.vegan == null || rawRecipe.lactosefree == null || rawRecipe.glutenfree == null 
      || rawRecipe.isPrivate == null) {
        throw new AppError("Missing recipe fields", 400);
    }

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

  public async findRecipeByIngredient(filter : Filter, recipeID : string[]) : Promise<Recipe[]> {
    const ids = recipeID.join(',');
    const categories = filter.categories.join(',');

    const recipes = this.ormRepository.find({
      where: {
        private: 'false',
        // vegan: filter.restriction.vegan,
        // vegetarian: filter.restriction.vegetarian,
        // cookingTime: Between(parseInt(filter.cookingTime.min),parseInt(filter.cookingTime.max)),
        id: Raw(alias =>`${alias} = Any('{${ids}}')`),
        categoryId: Raw(alias =>`${alias} = Any('{${categories}}')`),
      }
    });
    
    return recipes;
  }

  public async findRecipe(title: string): Promise<Recipe | undefined> {
    const recipe = this.ormRepository.findOne({
      where: { title }
    });
    return recipe;
  }

  public async remove(title: string): Promise<void> {
    const recipe = this.ormRepository.findOneOrFail({
      where: { title }
    });

    this.ormRepository.delete((await recipe).id);
  }

  public async update(rawRecipe: RawRecipe): Promise<Recipe> {
    const recipeExists = this.ormRepository.findOneOrFail({
      where: { title: rawRecipe.title }
    });

    const recipe = this.ormRepository.save({
      id: (await recipeExists).id,
      title: (await recipeExists).title,
      category: rawRecipe.category,
      cookingTime: rawRecipe.cookTime,
      glutenfree: rawRecipe.glutenfree,
      description: rawRecipe.description,
      lactosefree: rawRecipe.lactosefree,
      private: rawRecipe.isPrivate,
      servingSize: rawRecipe.serves,
      vegan: rawRecipe.vegan,
      vegetarian: rawRecipe.vegetarian,
    });

    return recipe;
  }
}

export default RecipesRepository;
