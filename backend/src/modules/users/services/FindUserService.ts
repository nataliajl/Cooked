import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/User';


@injectable()
class FindUserService {
  private userRepository: IUsersRepository;

  constructor(
    @inject('RecipesRepository')
    userRepository: IUsersRepository
  ) {
    this.userRepository = userRepository;
  }

  public async execute(email: string): Promise<User | undefined> {
    return await this.userRepository.findUser(email);
  }
}

export default FindUserService;
