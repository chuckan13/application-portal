'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Roland',
      lastName: 'Fong',
      token: 'a',
      email: 'rfong@princeton.edu',
      class: '2019',
      concentration: 'Computer Science',
      gender: 'male',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
