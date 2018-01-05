'use strict';
module.exports = (sequelize, DataTypes) => {
  const menuitem = sequelize.define('menuitem', {
    latenight: DataTypes.STRING
    active: DataTypes.STRING
    name: DataTypes.STRING
    deliverable: DataTypes.STRING
    size: DataTypes.INTEGER
    price: DataTypes.INTEGER
 }, {
          freezeTableName: true
  })
      menuitem.associate = (models) => {
        menuitem.hasOne(models.category)
      }
  return menuitem
}