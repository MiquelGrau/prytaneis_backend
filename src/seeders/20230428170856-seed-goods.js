'use strict';

const goods = [
    {
        inventoryId: 'I00001',
        food: 200,
        wood: 150,
        iron: 50,
        tools: 20,
        clothes: 60,
    },
    {
        inventoryId: 'I00002',
        food: 100,
        wood: 50,
        iron: 20,
        tools: 10,
        clothes: 30,
    },
];

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'Goods',
            goods.map(good => ({
                ...good,
                createdAt: new Date(),
                updatedAt: new Date(),
            })),
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Goods', null, {});
    },
};
