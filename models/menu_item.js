'use strict';
module.exports = (sequelize, DataTypes) => {
  const menuitem = sequelize.define('menuitem', {
    latenight: DataTypes.BOOLEAN
    active: DataTypes.BOOLEAN
    name: DataTypes.STRING
    deliverable: DataTypes.BOOLEAN
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