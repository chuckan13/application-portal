'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'teamOne',
         Sequelize.STRING
       ),
      queryInterface.addColumn(
        'Users',
        'teamTwo',
        Sequelize.STRING
      )
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'Users',
        'teamTwo',
         Sequelize.STRING
       ),
      queryInterface.removeColumn(
        'Users',
        'teamTwo',
        Sequelize.STRING
      )
    ]);
  }
};