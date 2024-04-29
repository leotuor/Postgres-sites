/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import restauranteController from '../controllers/restauranteController';

export default (app) => {
  app.get('/restaurante', restauranteController.get);
  app.get('/restaurante/:id', restauranteController.get);
  app.post('/restaurante', restauranteController.create);
  app.patch('/restaurante/:id', restauranteController.update);
  app.delete('/restaurante/:id', restauranteController.destroy);
};
