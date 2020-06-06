import DataTypes from 'sequelize';
import { sequelize } from '../database/db';
import { Team } from './team';
import { User } from './user';

const UserTeam = sequelize.define(
	'userteams',
	{
		team_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Team,
				key: 'id'
			}
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: User,
				key: 'id'
			}
		},
		preference: {
			type: DataTypes.INTEGER
		}
	},
	{ timestamps: false }
);

export default UserTeam;
