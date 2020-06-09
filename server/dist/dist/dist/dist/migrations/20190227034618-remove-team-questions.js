'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(function (t) {
      return Promise.all([queryInterface.removeColumn('Teams', 'questionOne', {
        transaction: t
      }), queryInterface.removeColumn('Teams', 'questionTwo', {
        transaction: t
      })]);
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(function (t) {
      return Promise.all([queryInterface.addColumn('Teams', 'questionOne', {
        type: Sequelize.TEXT
      }, {
        transaction: t
      }), queryInterface.addColumn('Teams', 'questionTwo', {
        type: Sequelize.TEXT
      }, {
        transaction: t
      })]);
    });
  }
};