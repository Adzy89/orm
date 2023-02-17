const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id:{
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      auotIncrement: true,
    },
    product_id:{
      typre: DataType.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      },
    },
    tag_id:{
      type: DataType.INTEGER,
      references:{
        model: 'Tag',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
