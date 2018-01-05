'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {
          freezeTableName: true
  })
      category.associate = (models) => {
        // associations can be defined here
      }
  return category;
}