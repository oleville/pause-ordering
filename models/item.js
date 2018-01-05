'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    name: DataTypes.STRING
  }, {
          freezeTableName: true
  })
      item.associate = (models) => {
        item.belongsToMany(models.order,{ through: 'item_order', as: 'order' })
        item.belongsToMany(models.topping,{ through: 'item_topping', as: 'topping' })
        item.belongsTo(models.menuitem)
      }
  return item
}