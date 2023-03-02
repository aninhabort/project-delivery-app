'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('salesProducts', {
      sale_id: {
        allowNull: false,
        field: 'sale_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'sales',
          key: 'id'
        },
        type: Sequelize.INTEGER,
      },
      product_id: {
        allowNull: false,
        field: 'product_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'products',
          key: 'id'
        },
        type: Sequelize.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('salesProducts')
  }
};
