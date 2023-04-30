'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hasTable = await queryInterface.tableExists('Warehouses');

    if (!hasTable) {
      await queryInterface.createTable('Warehouses', {
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
        capacity: {
          type: Sequelize.INTEGER,
        },
        public: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
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
    const hasTable = await queryInterface.tableExists('Warehouses');

    if (hasTable) {
      await queryInterface.dropTable('Warehouses');
    }
  },
};
