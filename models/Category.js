const { Model, DataTypes, INTEGER } = require('sequelize');
const { validate } = require('../config/connection.js');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    },
    category_name: {
    type: DataTypes.STRING,
    allowNUll: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;


