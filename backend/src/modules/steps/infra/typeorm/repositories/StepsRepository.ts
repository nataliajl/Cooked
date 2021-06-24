import Step from '../entities/Step';
import { getRepository, Repository } from 'typeorm';

import IStepsRepository from '@modules/steps/repositories/IStepsRepository';

class StepsRepository implements IStepsRepository {
  private ormRepository: Repository<Step>;

  constructor() {
    this.ormRepository = getRepository(Step);
  }

  public async create(text: string): Promise<Step> {
    const step = this.ormRepository.create({
      text,
    });
    await this.ormRepository.save(step);
    return step;
  }
}

export default StepsRepository;
