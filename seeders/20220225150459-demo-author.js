// 'use strict';
const Sequelize = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Authors', [{
        FIRST_NAME: 'John',
        LAST_NAME: 'Doe',
        EMAIL: 'Joe@gmail.com',
        BIRTHDAY: '1997-06-27',
        DESCRITPION: 'BLA BLA',
        IMG: null,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()

     }], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Authors', null, {});
     
  }
};
