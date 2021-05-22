import { Response, Request, Router } from 'express';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  return res.json({ Hello: 'World' });
});

export default routes;
