'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hasTable = await queryInterface.tableExists('Vehicles');

    if (!hasTable) {
      await queryInterface.createTable('Vehicles', {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        type: {
          type: Sequelize.STRING,
        },
        ownerId: {
          type: Sequelize.STRING,
        },
        // ... other properties as needed
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    const hasTable = await queryInterface.tableExists('Vehicles');

    if (hasTable) {
      await queryInterface.dropTable('Vehicles');
    }
  },
};
