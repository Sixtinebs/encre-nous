// 'use strict';
const Sequelize = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Authors', [{
        first_name: 'Marie',
        last_name: 'rose',
        email: 'marie@rose.com',
        birthday: '1997-06-27',
        description: 'BLA BLA',
        img: null,
        createdAt: new Date(),
        updatedAt: new Date()
     }], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Authors', null, {});
     
  }
};
