'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hasTable = await queryInterface.tableExists('Owners');

    if (!hasTable) {
      await queryInterface.createTable('Owners', {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
        },
        cityId: {
          type: Sequelize.STRING,
          allowNull: true,
          references: {
            model: 'Cities',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
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
    const hasTable = await queryInterface.tableExists('Owners');

    if (hasTable) {
      await queryInterface.dropTable('Owners');
    }
  },
};
