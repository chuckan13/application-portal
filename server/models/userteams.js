import DataTypes from 'sequelize';
import { sequelize } from '../database/db';
import { Team } from './teams';
import { User } from './user';

const UserTeam = sequelize.define('UserTeams', {
  teamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Team,
      key: 'id',
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    }
  },
  preference: {
    type: DataTypes.INTEGER,
  },
});

export default UserTeam;
