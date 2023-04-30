'use strict';

const goods = [
  {
    inventoryId: 1, // Replace with a valid inventory ID from the inventories table
    food: 100,
    wood: 50,
    iron: 20,
    tools: 10,
    clothes: 30,
  },
  // Add more goods objects as needed
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
        'Goods',
        goods.map(good => ({
          ...good,
          createdAt: new Date(),
          updatedAt: new Date(),
        })),
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Goods', null, {});
  },
};
