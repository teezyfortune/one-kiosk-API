'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    productName: DataTypes.STRING,
    productType: DataTypes.STRING,
    productCategory: DataTypes.STRING,
    productQuantity: DataTypes.NUMBER
  }, {});
  Products.associate = (models) => {
    Products.belongsTo(models.shops, {
      foreignKey:'productId',
      as:'products'
    })
  };
  return Products;
};