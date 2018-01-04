'use strict';
module.exports = (sequelize, DataTypes) => {
  var menuitem = sequelize.define('menuitem', {
    latenight: DataTypes.STRING
    active: DataTypes.STRING
    name: DataTypes.STRING
    deliverable: DataTypes.STRING
    size: DataTypes.INTEGER
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      menuitem.associate: function(models) {
        menuitem.hasOne(models.category)
      }
    }
  });
  return menuitem;
};