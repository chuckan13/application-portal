'use strict';

module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    questionOne: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    questionTwo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  Team.associate = (models) => {
    Team.belongsToMany(models.User, {
      through: 'UserTeams',
      foreignKey: 'teamId',
      as: 'applicants',
    });
  };
  return Team;
};