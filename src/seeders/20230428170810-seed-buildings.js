'use strict';

const { BuildingType } = require('../enums/building.type');

const buildings = [
    {
        id: 'B00001',
        address: '123 Main St',
        name: 'Public Warehouse',
        ownerId: 'O00001',
        type: BuildingType.Warehouse,
        cityId: 'C00001',
    },
    {
        id: 'B00002',
        address: '125 Main St',
        name: 'Public Market',
        ownerId: 'O00001',
        type: BuildingType.Market,
        cityId: 'C00001',
    },
    {
        id: 'B00003',
        address: '123 Secondary St',
        name: 'Private Warehouse',
        ownerId: 'O00002',
        type: BuildingType.Warehouse,
        cityId: 'C00001',
    },
    {
        id: 'B00004',
        address: '125 Secondary St',
        name: 'Private Market',
        ownerId: 'O00002',
        type: BuildingType.Market,
        cityId: 'C00001',
    },
];

module.exports = {
    up: async (queryInterface, Sequelize) => {
        try {
            await queryInterface.bulkInsert(
                "Buildings",
                buildings.map((building) => ({
                    ...building,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }))
            );
        } catch (error) {
            console.error("Error while seeding buildings:", error);
            throw error;
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Buildings', null, {});
    },
};
