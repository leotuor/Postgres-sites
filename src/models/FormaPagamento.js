/* eslint-disable import/no-named-as-default-member */
import { DataTypes } from 'sequelize';
import { sequelize } from '../config';
// eslint-disable-next-line import/no-named-as-default
import UsuarioCompra from './UsuarioCompra';

const FormaPagamento = sequelize.define(
  'forma_pagamento',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    metodo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    freezeTableProdutoame: true,
    timestamps: false,

  },
);
FormaPagamento.belongsTo(UsuarioCompra, {
  as: 'usuario_compras',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuarios_compras',
    name: 'idUsuarioCompras',
    allowNull: false,
  },
});
export default FormaPagamento;
