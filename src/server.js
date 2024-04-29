/* eslint-disable import/no-named-as-default */
import 'dotenv/config';
import Express from 'express';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';
// eslint-disable-next-line import/no-named-as-default-member
import Routes from './routes';

const app = Express();

const logStream = fs.createWriteStream(path.join(__dirname, '../acess.log'), {
  flash: 'a',
});

app.use(morgan('combined', {
  stream: logStream,
}));
app.use(Express.json({
  limit: '50mb',
}));
app.use(Express.urlencoded({
  extended: true,
  limit: '50mb',
}));

Routes(app);

app.use((_, res) => res.status(404).send('<h1>404- Página Não Encontrada</h1>'));
app.listen(process.env.API_PORT, () => console.log(`Sistema rodando na url http://localhost:${process.env.API_PORT}`));
