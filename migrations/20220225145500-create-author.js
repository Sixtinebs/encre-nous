'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Author', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FIRST_NAME: {
        type: Sequelize.STRING
      },
      LAST_NAME: {
        type: Sequelize.STRING
      },
      EMAIL: {
        type: Sequelize.STRING
      },
      BIRTHDAY: {
        type: Sequelize.DATE
      },
      DESCRITPION: {
        type: Sequelize.STRING
      },
      IMG: {
        type: Sequelize.STRING
      },
      CREATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UPDATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Author');
  }
};