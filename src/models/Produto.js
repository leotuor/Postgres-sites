/* eslint-disable import/no-named-as-default-member */
import { DataTypes } from 'sequelize';
import { sequelize } from '../config';
// eslint-disable-next-line import/no-named-as-default
import Usuario from './Usuario';

const Produto = sequelize.define(
  'produtos',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    preco: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,

  },
);
Produto.belongsTo(Usuario, {
  as: 'usuarios',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_restaurantes',
    name: 'idRestaurantes',
    allowNull: false,
  },
});
export default Produto;
