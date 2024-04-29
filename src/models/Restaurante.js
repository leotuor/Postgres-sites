import { DataTypes } from 'sequelize';
import { sequelize } from '../config';

const Restaurante = sequelize.define(
  'restaurantes',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,

  },
);
export default Restaurante;
