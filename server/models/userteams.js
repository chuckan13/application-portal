'use strict';
const User = require('./user').User
const Team = require('./teams').Team

module.exports = (sequelize, DataTypes) => {
  const UserTeam = sequelize.define('UserTeams', {
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Team,
        key: 'id',
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      }
    },
    preference: {
      type: DataTypes.INTEGER,
    },
  });
  return UserTeam;
};