import DataTypes from 'sequelize';
import { sequelize } from '../database/db';
import Team from '../models/teams';

const Question = sequelize.define('Question', {
    associatedTeamID: DataTypes.INTEGER,
    teamQuestion: DataTypes.TEXT,
}, {});

Question.associate = () => {
    Question.belongsTo(Team, {
        foreignKey: 'questionId',
        as: 'teams',
    });

    Question.hasMany(Response, {
        foreignKey: 'questionId',
        as: 'responses',
    })
}

export default Question;