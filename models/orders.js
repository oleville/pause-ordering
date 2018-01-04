'use strict';
module.exports = (sequelize, DataTypes) => {
  var orders = sequelize.define('orders', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    total_cost: DataTypes.FLOAT
  }, {
    classMethods: {
      orders.associate: function(models) {
        orders.belongsToMany(models.item,{ through: 'item_order', as: 'item' })
      }
    }
  });
  return orders;
};
