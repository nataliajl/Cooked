//Importando express e o arquivo de rotas
import express from 'express';
import routes from './routes';
import cors from 'cors';

//Express é uma função
const app = express();

//Ativando a recepção de Jsons e chamando arquivo de rotas
app.use(cors());
app.use(express.json());

app.use(routes);

//Porta
app.listen(3333, () => {
  console.log('Server started on port 3333');
});
