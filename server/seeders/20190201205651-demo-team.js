'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teams', [{
      name: 'Web Development',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'HackPrinceton',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Design',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teams', null, {});
  }
};
