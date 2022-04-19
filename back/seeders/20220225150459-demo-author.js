// 'use strict';
const Sequelize = require('sequelize');

module.exports = {
   async up(queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Authors', [{
         first_name: 'Sissi',
         last_name: 'rose',
         birthday: '1997-06-27',
         user_id: 1,
         description: 'BLA BLA',
         img: null,
         createdAt: new Date(),
         updatedAt: new Date()
      }, {
         first_name: 'Sosso',
         last_name: 'Bertrand',
         birthday: '1997-06-27',
         user_id: 2,
         description: 'BLA BLA',
         img: null,
         createdAt: new Date(),
         updatedAt: new Date()
      }
      ], {});

   },

   async down(queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Authors', null, {});

   }
};
