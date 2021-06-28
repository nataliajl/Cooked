import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';
import { injectable, inject } from 'tsyringe';
import Step from '../infra/typeorm/entities/Step';
import StepsRepository from '../infra/typeorm/repositories/StepsRepository';

//Isso permite a classe receber injeção de dependencia
@injectable()
class AddStepService {
  //SOLID
  /*D - DEPENDENCY INVERSION -> Ao invés de instanciar o repositório aqui dentro
    iremos recebe-lo por parâmetro */

  private stepsRepository: StepsRepository;

  constructor(
    //Aqui fazemos a injeção de dependencia
    @inject('StepsRepository')
    stepsRepository: StepsRepository
  ) {
    this.stepsRepository = stepsRepository;
  }

  public async execute(rawSteps: string[], recipe: Recipe): Promise<Step[]> {
    //Atribuindo o ingrediente à receita
    return await this.stepsRepository.addToRecipe(rawSteps, recipe);
  }
}

export default AddStepService;
