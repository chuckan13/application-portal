import DataTypes from 'sequelize';
import { sequelize } from '../database/db';
import Team from '../models/teams';
import Response from '../models/response';

const User = sequelize.define('User', {
  token: DataTypes.STRING,
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  class: DataTypes.STRING,
  concentration: DataTypes.STRING,
  gender: DataTypes.STRING,
  // responseOne: DataTypes.TEXT,
  // responseTwo: DataTypes.TEXT,
  // responseThree: DataTypes.TEXT,
  // responseFour: DataTypes.TEXT,
  // responseFive: DataTypes.TEXT,
  // responseSix: DataTypes.TEXT,
  role: DataTypes.STRING,
}, {});

User.associate = () => {
  User.belongsToMany(Team, {
    through: 'UserTeams',
    foreignKey: 'userId',
    as: 'teams',
  });

  User.hasMany(Response, {
    foreignKey: 'userId',
    as: 'responses',
  });
}

// Transforms to plain javascript object
// Extracts the preference for each team and makes it a top level value for team
User.transform = user => {
  const transformed = user.get({ plain: true })
  if (transformed.teams) {
    transformed.teams = transformed.teams.map(team => {
      team.preference = team.UserTeams.preference;
      delete team.UserTeams;
      return team;
    })
  }
  return transformed;
}

export default User;
