'use strict';

module.exports = {
   async up(queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Beta_readers', [{
         first_name: 'Alexandre',
         last_name: 'lézard',
         birthday: '1929-06-27',
         user_id: 3,
         description: 'BLA BLA',
         img: null,
         experience: 'bla bla bla',
         method_working: 'et hein ho fait pas chier !',
         createdAt: new Date(),
         updatedAt: new Date()
      }, {
         first_name: 'François',
         last_name: 'Mondot',
         birthday: '1929-06-27',
         user_id: 4,
         description: 'BLA BLA',
         img: null,
         experience: 'bla bla bla',
         method_working: 'et hein ho fait pas chier !',
         createdAt: new Date(),
         updatedAt: new Date()
      }], {});

   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Beta_readers', null, {});

   }
};
