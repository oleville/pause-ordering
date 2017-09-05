module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define('Items', {
    name: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL(2)
    },
    inStock: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    freezeTableName: true
  })
  return Items
}
