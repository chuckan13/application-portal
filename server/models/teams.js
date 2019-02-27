import DataTypes from 'sequelize';
import { sequelize } from '../database/db';
import User from '../models/user';
import Question from '../models/question';

const Team = sequelize.define('Team', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // questionOne: {
  //   type: DataTypes.TEXT,
  //   allowNull: false,
  // },
  // questionTwo: {
  //   type: DataTypes.TEXT,
  //   allowNull: false,
  // },
});

Team.associate = () => {
  Team.belongsToMany(User, {
    through: 'UserTeams',
    foreignKey: 'teamId',
    as: 'applicants',
  });

  Team.hasMany(Question, {
    foreignKey: 'teamId',
    as: 'questions',
  });
}

// Transforms the team to plain javascript object
// Extracts the preference for each user and makes it a top level value for user
Team.transform = team => {
  const transformed = team.get({ plain: true })
  if (transformed.applicants) {
    transformed.applicants = transformed.applicants.map(user => {
      user.preference = user.UserTeams.preference;
      delete user.UserTeams;
      return user;
    })
  }
  return transformed;
}

export default Team;
