import { DataTypes } from 'sequelize';
import { sequelize } from '../config';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import FormaPagamento from './FormaPagamento';

const Cartao = sequelize.define(
  'cartoes',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cardnum: {
      field: 'card_num',
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    holder: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    vencimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cvv: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    credito: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    freezeTableProdutoame: true,
    timestamps: false,

  },
);
Cartao.belongsTo(FormaPagamento, {
  as: 'forma_pagamento',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_forma_pagamento',
    name: 'idFormaPagamentos',
    allowNull: false,
  },
});
export default Cartao;
