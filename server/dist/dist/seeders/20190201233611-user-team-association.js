'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UserTeams', [{
      userId: 1,
      teamId: 1,
      preference: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 1,
      teamId: 2,
      preference: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 1,
      teamId: 3,
      preference: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UserTeams', null, {});
  }
};