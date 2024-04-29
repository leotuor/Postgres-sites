import { DataTypes } from 'sequelize';
import { sequelize } from '../config';

const Usuario = sequelize.define(
  'usuarios',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,

  },
);

export default Usuario;
