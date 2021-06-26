import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import 'reflect-metadata';

import AppError from '@shared/errors/Error';
import 'express-async-errors';

//Importando o arquivo de injeção de dependencias
import '@shared/container';

//importando o Typeorm
import '@shared/infra/typeorm';

import cors from 'cors';

const app = express();

//Liberando o uso de Json
app.use(express.json());

//Dando "Permissão" ao frontend para fazer requisições ao back
app.use(cors());

app.use(routes);

//Tratativa de erros global
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    //Caso for um erro lançado pela nossa aplicação
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    //Caso seja algum erro interno na nossa api
    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
);

app.get('/', (req, res) => {
  return res.json({ Ping: 'Pong' });
});

export default app
