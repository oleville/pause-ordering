'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'item_order',
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
            model: 'order',
            key: 'id'
          },
          allowNull: false,
        }
      }
);
},
  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('item-topping')
  }
};
