import DataTypes from 'sequelize';
import { sequelize } from '../database/db';
import User from '../models/user';
import Question from '../models/question';

const Response = sequelize.define('Response', {
    associatedUserID: DataTypes.INTEGER,
    userResponse: DataTypes.TEXT,
}, {});

Response.associate = () => {
    Response.belongsTo(User, {
        foreignKey: 'responseId',
        as: 'applicants',
    });
    Response.belongsTo(Question, {
        foreignKey: 'questionId',
        as: 'questions',
    });
}

export default Response;