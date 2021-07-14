import Step from '../entities/Step';
import { getRepository, Repository } from 'typeorm';

import IStepsRepository from '@modules/steps/repositories/IStepsRepository';
import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';

class StepsRepository implements IStepsRepository {
  private ormRepository: Repository<Step>;

  constructor() {
    this.ormRepository = getRepository(Step);
  }

  public async addToRecipe(
    steps: string[],
    recipe: Recipe
  ): Promise<Step[]> {
    this.removeStepsByRecipe(recipe);

    const newSteps = steps.map((step) =>
      this.ormRepository.create({
        text: step,
        recipe: recipe,
      })
    );

    return await this.ormRepository.save(newSteps);
  }

  public async findStep(recipe: Recipe): Promise<Step[]> {
    const recipeSteps = await this.ormRepository.find({
      where: { recipe },
    });

    return recipeSteps;
  }

  public async removeStepsByRecipe(recipe: Recipe): Promise<void> {
    const recipeSteps = await this.ormRepository.find({
      where: { recipe },
    });

    await this.ormRepository.remove(recipeSteps);
  }
}

export default StepsRepository;
