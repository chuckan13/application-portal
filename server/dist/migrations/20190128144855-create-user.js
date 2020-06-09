'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      concentration: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING
      },
      responseOne: {
        type: Sequelize.TEXT
      },
      responseTwo: {
        type: Sequelize.TEXT
      },
      responseThree: {
        type: Sequelize.TEXT
      },
      responseFour: {
        type: Sequelize.TEXT
      },
      responseFive: {
        type: Sequelize.TEXT
      },
      responseSix: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users', {
      cascade: true
    });
  }
};