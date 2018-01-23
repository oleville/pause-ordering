'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'item_topping',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        item_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'item',
            key: 'id'
          },
          allowNull: false,
        },
        topping_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'topping',
            key: 'id'
          },
          allowNull: false,
           }
      }
);
},
  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('item_topping')
  }
};
