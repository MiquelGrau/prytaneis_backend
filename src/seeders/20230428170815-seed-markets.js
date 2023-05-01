'use strict';

const markets = [
    {
        buildingId: 'B00002',
        transactionFee: 0.02,
    },
    {
        buildingId: 'B00004',
        transactionFee: 0.02,
    },
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
