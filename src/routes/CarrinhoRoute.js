/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import carrinhoController from '../controllers/carrinhoController';

export default (app) => {
  app.get('/carrinho', carrinhoController.get);
  app.get('/carrinho/:id', carrinhoController.get);
  app.post('/carrinho', carrinhoController.create);
  app.patch('/carrinho/:id', carrinhoController.update);
  app.delete('/carrinho/:id', carrinhoController.destroy);
};
