'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'item-order',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        ItemId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'item',
            key: 'id'
          },
          allowNull: false,
        },
        ToppingId: {
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
