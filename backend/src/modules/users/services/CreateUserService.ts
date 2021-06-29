import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/User';
// import Category from '@modules/categories/infra/typeorm/entities/Category';
import RawUser from '@shared/models/RawUser';

@injectable()
class CreateUserService {
  private usersRepository: IUsersRepository;

  constructor(
    //Aqui fazemos a injeção de dependencia
    @inject('UsersRepository')
    usersRepository: IUsersRepository
  ) {
    this.usersRepository = usersRepository;
  }

  public async execute(rawUser: RawUser): Promise<User> {
    return await this.usersRepository.create(rawUser);
  }
}

export default CreateUserService;
