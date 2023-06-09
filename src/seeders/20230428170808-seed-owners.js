'use strict';

const owners = [
    {
        id: 'O00001',
        name: 'Owner1',
        cityId: 'C00001',
    },
    {
        id: 'O00002',
        name: 'Owner2',
        cityId: 'C00001',
    },
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
