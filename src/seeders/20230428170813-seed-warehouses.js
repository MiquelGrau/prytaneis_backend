'use strict';

const warehouses = [
    {
        buildingId: 'B00001', // Replace with a valid building ID from the buildings table
        capacity: 1000,
        public: true,
    },
    {
        buildingId: 'B00002', // Replace with a valid building ID from the buildings table
        capacity: 1000,
        public: false,
    },
];

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'Warehouses',
            warehouses.map(warehouse => ({
                ...warehouse,
                createdAt: new Date(),
                updatedAt: new Date(),
            })),
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Warehouses', null, {});
    },
};
