/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import formaPagamentoController from '../controllers/formaPagamentoController';

export default (app) => {
  app.get('/forma-pagamento', formaPagamentoController.get);
  app.get('/forma-pagamento/:id', formaPagamentoController.get);
  app.post('/forma-pagamento', formaPagamentoController.create);
  app.patch('/forma-pagamento/:id', formaPagamentoController.update);
  app.delete('/forma-pagamento/:id', formaPagamentoController.destroy);
};
