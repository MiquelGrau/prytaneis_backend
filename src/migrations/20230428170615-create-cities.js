'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hasTable = await queryInterface.tableExists('Cities');

    if (!hasTable) {
      await queryInterface.createTable('Cities', {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
        },
        region: {
          type: Sequelize.STRING,
        },
        locationType: {
          type: Sequelize.STRING,
        },
        population: {
          type: Sequelize.INTEGER,
        },
        positionX: {
          type: Sequelize.FLOAT,
        },
        positionY: {
          type: Sequelize.FLOAT,
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
    const hasTable = await queryInterface.tableExists('Cities');

    if (hasTable) {
      await queryInterface.dropTable('Cities');
    }
  },
};
