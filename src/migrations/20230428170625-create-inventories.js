'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hasTable = await queryInterface.tableExists('Inventories');

    if (!hasTable) {
      await queryInterface.createTable('Inventories', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        warehouseId: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model: 'Warehouses',
            key: 'buildingId',
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
