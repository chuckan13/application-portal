import DataTypes from 'sequelize';
import { sequelize } from '../database/db';
import User from '../models/user';
import Question from '../models/question';

const Response = sequelize.define(
	'response',
	{
		text: DataTypes.TEXT,
		question_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'question',
				key: 'id'
			}
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'users',
				key: 'id'
			}
		}
	},
	{ timestamps: false }
);

Response.associate = () => {
	// Response.belongsTo(User);
	Response.belongsTo(Question, {
		foreignKey: 'question_id',
		as: 'question'
	});
};

export default Response;
