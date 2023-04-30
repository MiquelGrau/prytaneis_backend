'use strict';

const vehicles = [
    {
        id: 'V00001',
        type: 'Type1',
        ownerId: 'O00001', // Replace with a valid owner ID from the owners table
        // ... other properties as needed
    },
    // Add more vehicle objects as needed
];

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'Vehicles',
            vehicles.map(vehicle => ({
                ...vehicle,
                createdAt: new Date(),
                updatedAt: new Date(),
            })),
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Vehicles', null, {});
    },
};
