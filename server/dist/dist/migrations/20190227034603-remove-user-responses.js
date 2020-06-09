'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(function (t) {
      return Promise.all([queryInterface.removeColumn('Users', 'responseOne', {
        transaction: t
      }), queryInterface.removeColumn('Users', 'responseTwo', {
        transaction: t
      }), queryInterface.removeColumn('Users', 'responseThree', {
        transaction: t
      }), queryInterface.removeColumn('Users', 'responseFour', {
        transaction: t
      }), queryInterface.removeColumn('Users', 'responseFive', {
        transaction: t
      }), queryInterface.removeColumn('Users', 'responseSix', {
        transaction: t
      }), queryInterface.addColumn('Users', 'role', {
        type: Sequelize.STRING
      }, {
        transaction: t
      })]);
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(function (t) {
      return Promise.all([queryInterface.addColumn('Users', 'responseOne', {
        type: Sequelize.TEXT
      }, {
        transaction: t
      }), queryInterface.addColumn('Users', 'responseTwo', {
        type: Sequelize.TEXT
      }, {
        transaction: t
      }), queryInterface.addColumn('Users', 'responseThree', {
        type: Sequelize.TEXT
      }, {
        transaction: t
      }), queryInterface.addColumn('Users', 'responseFour', {
        type: Sequelize.TEXT
      }, {
        transaction: t
      }), queryInterface.addColumn('Users', 'responseFive', {
        type: Sequelize.TEXT
      }, {
        transaction: t
      }), queryInterface.addColumn('Users', 'responseSix', {
        type: Sequelize.TEXT
      }, {
        transaction: t
      }), queryInterface.removeColumn('Users', 'role', {
        transaction: t
      })]);
    });
  }
};