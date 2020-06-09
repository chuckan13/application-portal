'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Roland',
      lastName: 'Fong',
      token: 'a',
      email: 'rfong@princeton.edu',
      "class": '2019',
      concentration: 'Computer Science',
      gender: 'male',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};