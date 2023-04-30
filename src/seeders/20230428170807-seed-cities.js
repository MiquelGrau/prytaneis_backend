'use strict';

const cities = [
  {
    id: 'C00001',
    name: 'City1',
    region: 'Region1',
    locationType: 'Type1',
    population: 100000,
    positionX: 12.34,
    positionY: 56.78,
  },
];

module.exports = {
    up: async (queryInterface, Sequelize) => {
        try {
            await queryInterface.bulkInsert(
                'Cities',
                cities.map((city) => ({
                    ...city,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                })),
            );
        } catch (error) {
            console.error('Error in 20230428170807-seed-cities.js:', error);
            throw error;
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Cities', null, {});
    },
};

