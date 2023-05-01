'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hasTable = await queryInterface.tableExists('Goods');

    if (!hasTable) {
      await queryInterface.createTable('Goods', {
        inventoryId: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true,
          references: {
            model: 'Inventories',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        food: {
          type: Sequelize.INTEGER,
        },
        wood: {
          type: Sequelize.INTEGER,
        },
        iron: {
          type: Sequelize.INTEGER,
        },
        tools: {
          type: Sequelize.INTEGER,
        },
        clothes: {
          type: Sequelize.INTEGER,
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
    const hasTable = await queryInterface.tableExists('Goods');

    if (hasTable) {
      await queryInterface.dropTable('Goods');
    }
  },
};
