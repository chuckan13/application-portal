import DataTypes from 'sequelize';
import { sequelize } from '../database/db';
import Team from './team';
import Response from '../models/response';

const User = sequelize.define(
	'users',
	{
		token: DataTypes.STRING,
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		email: DataTypes.STRING,
		class: DataTypes.STRING,
		concentration: DataTypes.STRING,
		role: DataTypes.STRING
	},
	{ timestamps: false }
);

User.associate = () => {
	User.belongsToMany(Team, {
		through: 'userteams',
		foreignKey: 'user_id',
		as: 'teams'
	});

	User.hasMany(Response, {
		foreignKey: 'user_id',
		as: 'response'
	});
};

// Transforms to plain javascript object
// Extracts the preference for each team and makes it a top level value for team
User.transform = user => {
	const transformed = user.get({ plain: true });
	if (transformed.team) {
		transformed.team = transformed.team.map(team => {
			team.preference = team.UserTeam.preference;
			delete team.UserTeam;
			return team;
		});
	}
	return transformed;
};

export default User;
