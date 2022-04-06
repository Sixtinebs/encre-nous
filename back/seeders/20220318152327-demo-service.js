'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services', [
    {
      book_id: 1,
      beta_reader_id: 3,
      prix_service: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      book_id: 2,
      beta_reader_id: 3,
      prix_service: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      book_id: 3,
      beta_reader_id: 4,
      prix_service: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      book_id: 2,
      beta_reader_id: 4,
      prix_service: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Services', null, {});
  }
};
