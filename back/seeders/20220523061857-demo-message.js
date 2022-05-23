"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Messages",
      [
        {
          author_id: 1,
          beta_reader_id: 1,
          message: "Salut ça va ?",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_id: 1,
          beta_reader_id: 2,
          message: "Hello ça va ?",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_id: 2,
          beta_reader_id: 4,
          message: "Hello ça va ?",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_id: 6,
          beta_reader_id: 7,
          message: "Hello ça va ?",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Messages", null, {});
  },
};
