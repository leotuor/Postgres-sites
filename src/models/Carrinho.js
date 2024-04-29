/* eslint-disable import/no-named-as-default-member */
import { DataTypes } from 'sequelize';
import { sequelize } from '../config';
// eslint-disable-next-line import/no-named-as-default
import Produto from './Produto';
// eslint-disable-next-line import/no-named-as-default
import Usuario from './Usuario';

const Carrinho = sequelize.define(
  'carrinho',
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

Carrinho.belongsTo(Usuario, {
  as: 'usuario',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuarios',
    name: 'idUsuarios',
    allowNull: false,
  },
});

Carrinho.belongsTo(Produto, {
  as: 'produto',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_produtos',
    name: 'idProdutos',
    allowNull: false,
  },
});

export default Carrinho;
