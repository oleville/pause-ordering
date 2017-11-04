module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    name: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING
    },
    total_cost: {
      type: DataTypes.FLOAT(5,2)
    }
  },
  {
    freezeTableName: true
  })
  return Orders
}
