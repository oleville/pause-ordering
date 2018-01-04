'use strict';
module.exports = (sequelize, DataTypes) => {
  var item = sequelize.define('item', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      item.associate: function(models) {
        item.belongsToMany(models.orders,{ through: 'item_order', as: 'orders' })
        item.belongsToMany(models.toppings,{ through: 'item_topping', as: 'toppings' })
        item.belongsTo(models.menuitem)
      }
    }
  });
  return item;
};