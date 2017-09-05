module.exports = (sequelize, DataTypes) => {
  const Toppings = sequelize.define('Toppings', {
    name: {
      type: DataTypes.TEXT
    }
  },
  {
    freezeTableName: true
  })
}
