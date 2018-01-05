'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    total_cost: DataTypes.FLOAT
  }, {
          freezeTableName: true
  })
      order.associate = (models) => {
        order.belongsToMany(models.item,{ through: 'item_order', as: 'item' })
      }
  return order
}
