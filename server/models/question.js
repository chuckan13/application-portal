import DataTypes from 'sequelize';
import { sequelize } from '../database/db';
import Team from '../models/teams';
import Response from '../models/response';

const Question = sequelize.define('Question', {
    text: DataTypes.TEXT,
}, {});

Question.associate = () => {
    Question.belongsTo(Team, {
        foreignKey: 'teamId',
    });

    Question.hasMany(Response, {
        foreignKey: 'questionId',
    })
}

export default Question;