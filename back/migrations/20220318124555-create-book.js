'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      title: {
        type: Sequelize.STRING
      },
      summarize: {
        type: Sequelize.TEXT('mediumtext')
      },
      number_word: {
        type: Sequelize.DECIMAL
      },
      genre: {
        type: Sequelize.STRING
      },
      author_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};