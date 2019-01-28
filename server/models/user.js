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
    responseOne: DataTypes.STRING,
    responseTwo: DataTypes.STRING,
    responseThree: DataTypes.STRING,
    responseFour: DataTypes.STRING,
    responseFive: DataTypes.STRING,
    responseSix: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};