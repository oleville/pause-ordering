'use strict';
module.exports = (sequelize, DataTypes) => {
  var toppings = sequelize.define('toppings', {
    name: DataTypes.STRING,
    price_extra: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return toppings;
};
