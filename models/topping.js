'use strict';
module.exports = (sequelize, DataTypes) => {
  const topping = sequelize.define('topping', {
    name: DataTypes.STRING,
    price_extra: DataTypes.FLOAT
  }, {
          freezeTableName: true
  })
      topping.associate = (models) => {
        topping.belongsToMany(models.item,{ through: 'item_topping', as: 'item' })
        topping.hasOne(models.category)
      }
  return topping
}
