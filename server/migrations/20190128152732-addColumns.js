'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'teamThree',
         Sequelize.STRING
       ),
      queryInterface.addColumn(
        'Users',
        'responseOne',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'responseTwo',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'responseThree',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'responseFour',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'responseFive',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'responseSix',
        Sequelize.STRING
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'Users',
        'teamThree',
         Sequelize.STRING
       ),
      queryInterface.removeColumn(
        'Users',
        'responseOne',
        Sequelize.STRING
      ),
      queryInterface.removeColumn(
        'Users',
        'responseTwo',
        Sequelize.STRING
      ),
      queryInterface.removeColumn(
        'Users',
        'responseThree',
        Sequelize.STRING
      ),
      queryInterface.removeColumn(
        'Users',
        'responseFour',
        Sequelize.STRING
      ),
      queryInterface.removeColumn(
        'Users',
        'responseFive',
        Sequelize.STRING
      ),
      queryInterface.removeColumn(
        'Users',
        'responseSix',
        Sequelize.STRING
      )
    ]);
  }
};
