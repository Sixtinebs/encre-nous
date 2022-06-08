"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Messages",
      [
        {
          recipient_id: 2,
          originator_id: 1,
          message: "Salut ça va ?",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipient_id: 1,
          originator_id: 2,
          message: "Hello ça va ?",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipient_id: 3,
          originator_id: 4,
          message: "Hello ça va ?",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipient_id: 4,
          originator_id: 3,
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
