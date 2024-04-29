/* eslint-disable import/no-named-as-default-member */
import { DataTypes } from 'sequelize';
import { sequelize } from '../config';
// eslint-disable-next-line import/no-named-as-default
import Produto from './Produto';
// eslint-disable-next-line import/no-named-as-default
import UsuarioCompra from './UsuarioCompra';

const Compra = sequelize.define(
  'compras',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,

  },
);
Compra.belongsTo(UsuarioCompra, {
  as: 'usuario_compras',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuario_compras',
    name: 'idUsuarioCompras',
    allowNull: false,
  },
});

Compra.belongsTo(Produto, {
  as: 'produtos',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_produtos',
    name: 'idProdutos',
    allowNull: false,
  },
});

export default Compra;
