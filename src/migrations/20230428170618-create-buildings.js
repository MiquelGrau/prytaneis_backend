'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hasTable = await queryInterface.tableExists('Buildings');

    if (!hasTable) {
      await queryInterface.createTable('Buildings', {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        address: {
          type: Sequelize.STRING,
        },
        name: {
          type: Sequelize.STRING,
        },
        ownerId: {
          type: Sequelize.STRING,
          references: {
            model: 'Owners',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        type: {
          type: Sequelize.STRING,
        },
        cityId: {
          type: Sequelize.STRING,
          references: {
            model: 'Cities',
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
    const hasTable = await queryInterface.tableExists('Buildings');

    if (hasTable) {
      await queryInterface.dropTable('Buildings');
    }
  },
};
