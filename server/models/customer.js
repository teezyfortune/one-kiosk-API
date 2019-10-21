'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    title: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  // customer.associate = (models) => {
  //   customer.hasMany(models.shops,{
  //     foreignKey:shopId,
  //     onDelete:CASCADE
  //   },
  //     F
  //   )
  // };
  customer.associate = (models) => {
    const{shops, Products} = models
     customer.hasOne(shops, {
       foreignKey:'shopId',
       onDelete: 'CASCADE'
     },
     customer.hasMany(Products,{
        foreignKey:'productId',
        onDelete:'CASCADE'
     })
     )
  }
  return customer;
};