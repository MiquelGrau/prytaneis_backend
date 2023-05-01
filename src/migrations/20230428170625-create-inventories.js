'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hasTable = await queryInterface.tableExists('Inventories');

    if (!hasTable) {
      await queryInterface.createTable('Inventories', {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false,
        },
        buildingId: { // Change to buildingId
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model: 'Buildings',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
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
    const hasTable = await queryInterface.tableExists('Inventories');

    if (hasTable) {
      await queryInterface.dropTable('Inventories');
    }
  },
};
