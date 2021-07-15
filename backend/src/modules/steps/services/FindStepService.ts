import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';

import { injectable, inject } from 'tsyringe';
import Step from '../infra/typeorm/entities/Step';
import StepsRepository from '../infra/typeorm/repositories/StepsRepository';

@injectable()
class FindStepService {

  private stepsRepository: StepsRepository;

  constructor(
    @inject('StepsRepository')
    stepsRepository: StepsRepository
  ) {
    this.stepsRepository = stepsRepository;
  }

  public async execute(recipe: Recipe): Promise<Step[]> {

    return await this.stepsRepository.findStep(recipe);
  }
}

export default FindStepService;
