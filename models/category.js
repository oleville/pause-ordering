'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('category', {
    name: DataTypes.STRING
  }, {
          freezeTableName: true
  })
      category.associate = (models) => {
        
      }
  return category
}
