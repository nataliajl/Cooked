import User from '../infra/typeorm/entities/User';
import RawUser from '@shared/models/RawUser';

export default interface IUsersRepository {
  create(rawUser: RawUser): Promise<User>;
  findUser(email: string): Promise<User | undefined>;
  remove(email: string): Promise<void>;
}
