/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import compraController from '../controllers/compraController';

export default (app) => {
  app.get('/compra', compraController.get);
  app.get('/compra/:id', compraController.get);
  app.post('/compra', compraController.create);
  app.patch('/compra/:id', compraController.update);
  app.delete('/compra/:id', compraController.destroy);
};
