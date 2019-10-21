'use strict';
module.exports = (sequelize, DataTypes) => {
  const shops = sequelize.define('shops', {
    shop_name: DataTypes.STRING,
    shop_address: DataTypes.STRING
  }, {});
  shops.associate = (models) => {
     shops.hasMany(models.Products,{
       foreignKey:'productId',
       onDelete:'CASCADE'
     })
  };
  return shops;
};