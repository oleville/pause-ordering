'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'item-topping',
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
            model: 'items',
            key: 'id'
          },
          allowNull: false,
        },
        ToppingId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'toppings',
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
