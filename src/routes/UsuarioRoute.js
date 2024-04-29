/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import usuarioController from '../controllers/usuarioController';

export default (app) => {
  app.get('/usuario', usuarioController.get);
  app.get('/usuario/:id', usuarioController.get);
  app.post('/usuario', usuarioController.create);
  app.patch('/usuario/:id', usuarioController.update);
  app.delete('/usuario/:id', usuarioController.destroy);
};
