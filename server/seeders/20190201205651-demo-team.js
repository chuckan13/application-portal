'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teams', [{
      name: 'Web Development',
      questionOne: 'What is life?',
      questionTwo: 'Why?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'HackPrinceton',
      questionOne: 'What is a hack?',
      questionTwo: 'Why?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Design',
      questionOne: 'Qui es-tu?',
      questionTwo: 'Why?',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teams', null, {});
  }
};
