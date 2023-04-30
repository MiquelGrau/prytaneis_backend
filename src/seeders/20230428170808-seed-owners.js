'use strict';

const owners = [
    {
        id: 'O00001',
        name: 'Owner1',
        cityId: 'C00001', // Replace with a valid city ID from the cities table
    },
    // Add more owner objects as needed
];

module.exports = {
    up: async (queryInterface, Sequelize) => {
        try {
            await queryInterface.bulkInsert(
                'Owners',
                owners.map(owner => ({
                    ...owner,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                })),
            );
        } catch (error) {
            console.error('Validation Error Details:', error);
            throw error;
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Owners', null, {});
    },
};
