import DataTypes from 'sequelize';
import { sequelize } from '../database/db';
import Team from './team';
import Response from '../models/response';

const Question = sequelize.define(
	'question',
	{
		text: DataTypes.TEXT,
		team_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'teams',
				key: 'id'
			}
		}
	},
	{ timestamps: false }
);

Question.associate = () => {
	// Question.belongsTo(Team);

	Question.hasMany(Response, {
		foreignKey: 'question_id',
		as: 'response'
	});
};

export default Question;
