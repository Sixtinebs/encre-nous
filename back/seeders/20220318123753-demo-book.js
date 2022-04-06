'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [{
      title: 'Moi',
      summarize:'bla bla',
      number_word: 1000,
      genre: 'fantastique',
      author_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title:'Moi 2',
      summarize:'bla bla bla bla',
      number_word: 2000,
      genre: 'Erotic',
      author_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'La mule',
      summarize:'bla bla bla blabla bla bla bla',
      number_word: 1500,
      genre: 'Policier',
      author_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'La ligne vert',
      summarize:'bla bla bla blabla bla bla bla',
      number_word: 3500,
      genre: 'Policier',
      author_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
     
  }
};
