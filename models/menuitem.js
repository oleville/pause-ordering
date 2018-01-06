'use strict';
module.exports = (sequelize, DataTypes) => {
  const menuitem = sequelize.define('menu_item', {
    latenight: DataTypes.BOOLEAN
    active: DataTypes.BOOLEAN
    name: DataTypes.STRING
    deliverable: DataTypes.BOOLEAN
    size: DataTypes.INTEGER
    price: DataTypes.INTEGER
  }, {
          freezeTableName: true
  })
      menu_item.associate = (models) => {
        menu_item.hasOne(models.category)
      }
  return menu_item
}
