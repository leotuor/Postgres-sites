/* eslint-disable import/no-named-as-default-member */
import { DataTypes } from 'sequelize';
import { sequelize } from '../config';
// eslint-disable-next-line import/no-named-as-default
import Usuario from './Usuario';

const UsuarioCompra = sequelize.define(
  'usuarios_compras',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dataCompra: {
      field: 'data_compra',
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalCompra: {
      field: 'total_compra',
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);
UsuarioCompra.belongsTo(Usuario, {
  as: 'usuarios_compras',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuarios',
    name: 'idUsuarios',
    allowNull: false,
  },
});
export default UsuarioCompra;
