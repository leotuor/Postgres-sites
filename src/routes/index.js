/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import UsuarioRoute from './UsuarioRoute';
import RestauranteRoute from './RestauranteRoute';
import ProdutoRoute from './ProdutoRoute';
import CarrinhoRoute from './CarrinhoRoute';
import UsuarioCompraRoute from './UsuarioCompraRoute';
import FormaPagamentoRoute from './FormaPagamentoRoute';
import CartaoRoute from './CartaoRoute';
import CompraRoute from './CompraRoute';

/* eslint-disable no-unused-vars */
function Routes(app) {
  UsuarioRoute(app);
  RestauranteRoute(app);
  ProdutoRoute(app);
  CarrinhoRoute(app);
  UsuarioCompraRoute(app);
  FormaPagamentoRoute(app);
  CartaoRoute(app);
  CompraRoute(app);
}

export default Routes;
