/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import cartaoController from '../controllers/cartaoController';

export default (app) => {
  app.get('/cartao', cartaoController.get);
  app.get('/cartao/:id', cartaoController.get);
  app.post('/cartao', cartaoController.create);
  app.patch('/cartao/:id', cartaoController.update);
  app.delete('/cartao/:id', cartaoController.destroy);
};
