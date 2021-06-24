import Step from '../infra/typeorm/entities/Step';

export default interface IStepsRepository {
  create(text: string): Promise<Step>;
}
