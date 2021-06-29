import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/User';
import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';

@injectable()
class RemoveUserService {
  private usersRepository: IUsersRepository;

  constructor(
    //Aqui fazemos a injeção de dependencia
    @inject('UsersRepository')
    usersRepository: IUsersRepository
  ) {
    this.usersRepository = usersRepository;
  }

  public async execute(email: string): Promise<void> {
    return await this.usersRepository.remove(email);
  }
}

export default RemoveUserService;