'use strict';

const buildings = [
    {
        id: 'B00001',
        address: '123 Main St',
        name: 'Building1',
        ownerId: 'O00001', // Replace with a valid owner ID from the owners table
        type: 'Type1',
        cityId: 'C00001', // Replace with a valid city ID from the cities table
    },
    {
        id: 'B00002',
        address: '125 Main St',
        name: 'Market',
        ownerId: 'O00001', // Replace with a valid owner ID from the owners table
        type: 'Type2',
        cityId: 'C00001', // Replace with a valid city ID from the cities table
    },
];

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'Buildings',
            buildings.map(building => ({
                ...building,
                createdAt: new Date(),
                updatedAt: new Date(),
            })),
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Buildings', null, {});
    },
};
