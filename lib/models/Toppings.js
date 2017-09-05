module.exports = (sequelize, DataTypes) => {
  const Toppings = sequelize.define('Toppings', {
    name: {
      type: DataTypes.TEXT
    },
    inStock: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    freezeTableName: true
  })
  return Toppings
}
