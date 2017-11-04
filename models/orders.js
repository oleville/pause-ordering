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
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return orders;
};
