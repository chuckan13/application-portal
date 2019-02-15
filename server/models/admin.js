import DataTypes from 'sequelize';
import {sequelize} from '../database/db';
import Team from '../model/teams';

const Admin = sequelize.define('Admin', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    team: DataTypes.STRING
}, {});

Admin.associate = () => {
    Admin.belongsTo(Team, {
        foreignKey: 'adminId',
        as: 'teams',
    });
}

export default Admin;