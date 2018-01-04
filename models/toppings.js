'use strict';
module.exports = (sequelize, DataTypes) => {
  var toppings = sequelize.define('toppings', {
    name: DataTypes.STRING,
    price_extra: DataTypes.FLOAT
  }, {
    classMethods: {
      toppings.associate: function(models) {
        toppings.belongsToMany(models.item,{ through: 'item_topping', as: 'item' })
        toppings.hasOne(models.category)
      }
    }
  });
  return toppings;
};
