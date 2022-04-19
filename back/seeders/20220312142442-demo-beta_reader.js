'use strict';

module.exports = {
   async up(queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Beta_readers', [{
         first_name: 'caps',
         last_name: 'lézard',
         birthday: '1929-06-27',
         user_id: 3,
         description: 'BLA BLA',
         price: '0.5 centimes / mot',
         siret: 28697044704782,
         img: null,
         experience: 'bla bla bla',
         method_working: 'et hein ho fait pas chier !',
         createdAt: new Date(),
         updatedAt: new Date()
      }, {
         first_name: 'Titi',
         last_name: 'Mondot',
         birthday: '1929-06-27',
         user_id: 4,
         description: 'BLA BLA',
         price: '0.7 centimes / mot',
         siret: 72639182736553,
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
