import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import RawUser from '@shared/models/RawUser';
import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(rawUser: RawUser): Promise<User> {
    const user = this.ormRepository.create({
        name: rawUser.name,
        email: rawUser.email
    });
    await this.ormRepository.save(user);
    return user;
  }

  public async findUser(email: string): Promise<User | undefined> {
    const user = this.ormRepository.findOne({
      where: { email }
    });
    return user;
  }

  public async remove(email: string): Promise<void> {
    const user = this.ormRepository.findOneOrFail({
      where: { email }
    });
    this.ormRepository.delete((await user).id);
  }


}

export default UsersRepository;
