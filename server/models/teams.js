module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    teamID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    questionOne: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    questionTwo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  Team.associate = (models) => {
    // associations can be defined here
    Team.hasMany(models.User, {
      foreignKey: 'userID',
      as: 'users',
    });
  };
  return Team;
};