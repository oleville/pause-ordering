module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    data: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true
  })
  return Orders
}
