'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [{
      text: "Why join web dev?",
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      text: "Is web dev fun?",
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      text: "Why hack?",
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      text: "What even is a hack?",
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      text: "Design?",
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      text: "What is art?",
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
