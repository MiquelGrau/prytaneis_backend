'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hasTable = await queryInterface.tableExists('Markets');

    if (!hasTable) {
      await queryInterface.createTable('Markets', {
        buildingId: {
          type: Sequelize.STRING,
          primaryKey: true,
          references: {
            model: 'Buildings',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        transactionFee: {
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
    const hasTable = await queryInterface.tableExists('Markets');

    if (hasTable) {
      await queryInterface.dropTable('Markets');
    }
  },
};
