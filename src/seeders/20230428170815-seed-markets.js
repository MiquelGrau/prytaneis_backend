'use strict';

const markets = [
  {
    buildingId: 'B00002', // Replace with a valid building ID from the buildings table
    transactionFee: 0.02,
  },
  // Add more market objects as needed
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
        'Markets',
        markets.map(market => ({
          ...market,
          createdAt: new Date(),
          updatedAt: new Date(),
        })),
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Markets', null, {});
  },
};
