import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';
import FindUserService from '@modules/users/services/FindUserService';

interface ICreateRequest {
  name: string,
  email: string
}


export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email
    }: ICreateRequest = request.body;
    const createUser = container.resolve(CreateUserService);
    await createUser.execute({name, email});
    return response.json({ created: true }).status(201);
  }
  public async getUserForLogin(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email
    }: ICreateRequest = request.body;
    const findUser = container.resolve(FindUserService);
    let user = await findUser.execute(request.body.email);
    if (user == undefined) {
      user = await container.resolve(CreateUserService).execute({name, email});
    }
    return response.json({name: user.name, email: user.email}).status(201);
  }

  public async getUser(request: Request, response: Response): Promise<Response> {
    const findUser = container.resolve(FindUserService);
    let user = await findUser.execute(request.body.email);
    if (user == undefined) {
      return response.status(404).send("User not found");
    }
    return response.json({ name: user.name, email: user.email }).status(201);
  }
}
