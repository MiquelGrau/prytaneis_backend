'use strict';

const inventories = [
  {
    warehouseId: 'B00001',
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
        'Inventories',
        inventories.map(inventory => ({
          ...inventory,
          createdAt: new Date(),
          updatedAt: new Date(),
        })),
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Inventories', null, {});
  },
};
