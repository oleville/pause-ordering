module.exports = (sequelize, DataTypes) => {
  const Toppings = sequelize.define('Toppings', {
    name: {
      type: DataTypes.STRING
    },
    price_extra: {
      type: DataTypes.FLOAT(3, 2)
    }
  },
  {
    freezeTableName: true
  })
  return Toppings
}
