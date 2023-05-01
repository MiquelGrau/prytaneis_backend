'use strict';

const inventories = [
    {
        id: 'I00001',
        buildingId: 'B00001',
    },
    {
        id: 'I00002',
        buildingId: 'B00002',
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
