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
    rawSteps: string[],
    recipe: Recipe
  ): Promise<Step[]> {
    this.removeStepsByRecipe(recipe);

    const steps = rawSteps.map((step) =>
      this.ormRepository.create({
        step,
        recipe,
      })
    );

    return await this.ormRepository.save(steps);
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
