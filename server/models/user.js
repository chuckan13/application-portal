'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    token: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    class: DataTypes.STRING,
    concentration: DataTypes.STRING,
    gender: DataTypes.STRING,
    teamOne: DataTypes.STRING,
    teamTwo: DataTypes.STRING,
    teamThree: DataTypes.STRING,
    responseOne: DataTypes.TEXT,
    responseTwo: DataTypes.TEXT,
    responseThree: DataTypes.TEXT,
    responseFour: DataTypes.TEXT,
    responseFive: DataTypes.TEXT,
    responseSix: DataTypes.TEXT
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};