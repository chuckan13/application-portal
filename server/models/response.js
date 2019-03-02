import DataTypes from 'sequelize';
import { sequelize } from '../database/db';
import User from '../models/user';
import Question from '../models/question';

const Response = sequelize.define('Response', {
    text: DataTypes.TEXT,
}, {});

Response.associate = () => {
    Response.belongsTo(User, {
        foreignKey: 'userId',
    });
    Response.belongsTo(Question, {
        foreignKey: 'questionId',
        as: 'question',
    });
}

export default Response;