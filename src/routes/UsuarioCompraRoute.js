/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import usuarioComprasController from '../controllers/usuarioComprasController';

export default (app) => {
  app.get('/usuario-compra', usuarioComprasController.get);
  app.get('/usuario-compra/:id', usuarioComprasController.get);
  app.post('/usuario-compra', usuarioComprasController.create);
  app.patch('/usuario-compra/:id', usuarioComprasController.update);
  app.delete('/usuario-compra/:id', usuarioComprasController.destroy);
};
