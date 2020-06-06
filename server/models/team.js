import DataTypes from 'sequelize';
import { sequelize } from '../database/db';
import User from './user';
import Question from './question';

const Team = sequelize.define(
	'teams',
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{ timestamps: false }
);

Team.associate = () => {
	Team.belongsToMany(User, {
		through: 'userteams',
		foreignKey: 'team_id',
		as: 'users'
	});

	Team.hasMany(Question, {
		foreignKey: 'team_id',
		as: 'question'
	});
};

// Transforms the team to plain javascript object
// Extracts the preference for each user and makes it a top level value for user
Team.transform = team => {
	const transformed = team.get({ plain: true });
	if (transformed.user) {
		transformed.user = transformed.users.map(user => {
			user.preference = user.UserTeam.preference;
			delete user.UserTeam;
			return user;
		});
	}
	return transformed;
};

export default Team;
