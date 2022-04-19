'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        email: 'sissi@gmail.com',
        //password
        password: '$2y$10$aV3.fLO9JFEtG6iLwTCXj.qCiSBNsCNIjRN3yjkOKdhi54/gPPUIq',
        role: "A",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'sosso@gmail.com',
        //azerty
        password: '$2y$10$h7WOoGgp9lPKA2vpoakCKuzaz6Iv.7hKgNNbVfjcoBPjuUguc37.a',
        role: "A",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'caps@gmail.com',
        //capucine
        password: '$2y$10$27i3zPIZB7VNYqZMOfvAZel0xLxZlqNbiHZu54/qhIrxP4NPOBKo.',
        role: "BR",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'titi@gmail.com',
        //titi
        password: '$2y$10$9OXJWufY59mqbfUNf3SvwO7zhyoR/slz6TIgiRcII..wkC0BmPEJK',
        role: "BR",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
