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
     },{
      first_name: 'Haloïse',
      last_name: 'Bertrand',
      email: 'bb@rose.com',
      birthday: '1997-06-27',
      description: 'BLA BLA',
      img: null,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      first_name: 'Lys',
      last_name: 'Savaëte',
      email: 'lys@lys.com',
      birthday: '1997-06-27',
      description: 'BLA BLA',
      img: null,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      first_name: 'Rose',
      last_name: 'Savaëte',
      email: 'rose@lys.com',
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
