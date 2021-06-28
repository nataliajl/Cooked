import { Request, Response } from 'express';
import { container } from 'tsyringe';



export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    // todo
    return response.json({ Created: true }).status(201);
  }
}
