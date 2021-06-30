import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';

import { injectable, inject } from 'tsyringe';
import Step from '../infra/typeorm/entities/Step';
import StepsRepository from '../infra/typeorm/repositories/StepsRepository';

@injectable()
class RemoveStepService {

  private stepsRepository: StepsRepository;

  constructor(
    @inject('StepsRepository')
    stepsRepository: StepsRepository
  ) {
    this.stepsRepository = stepsRepository;
  }

  public async execute(recipe: Recipe): Promise<void> {

    return await this.stepsRepository.removeStepsByRecipe(recipe);
  }
}

export default RemoveStepService;
