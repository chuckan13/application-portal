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
    responseOne: DataTypes.TEXT,
    responseTwo: DataTypes.TEXT,
    responseThree: DataTypes.TEXT,
    responseFour: DataTypes.TEXT,
    responseFive: DataTypes.TEXT,
    responseSix: DataTypes.TEXT
  }, {});
  User.associate = (models) => {
    User.belongsToMany(models.Team, {
      through: 'UserTeams',
      foreignKey: 'userId',
      as: 'teams',
    });
  };
  return User;
};