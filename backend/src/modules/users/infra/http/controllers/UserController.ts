import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';
import FindUserService from '@modules/users/services/FindUserService';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    // todo
    return response.json({ Created: true }).status(201);
  }
  public async getUserForLogin(request: Request, response: Response): Promise<Response> {
    const findUser = container.resolve(FindUserService);
    let user = await findUser.execute(request.body.email);
    if (typeof user == 'undefined') {
      //  todo criar user
    }

    return response.json({ Created: true }).status(201);
  }

  public async getUser(request: Request, response: Response): Promise<Response> {
    const findUser = container.resolve(FindUserService);
    let user = await findUser.execute(request.body.email);
    if (typeof user == 'undefined') {
      return response.status(404).send("User not found");
    }
    // todo

    return response.json({ Created: true }).status(201);
  }
}
