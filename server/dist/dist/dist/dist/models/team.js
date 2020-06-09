"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../database/db");

var _user = _interopRequireDefault(require("./user"));

var _question = _interopRequireDefault(require("./question"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var Team = _db.sequelize.define('team', {
  name: {
    type: _sequelize["default"].STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

Team.associate = function () {
  Team.belongsToMany(_user["default"], {
    through: 'userteam',
    foreignKey: 'team_id',
    as: 'users'
  }); // Team.hasMany(Question);
}; // Transforms the team to plain javascript object
// Extracts the preference for each user and makes it a top level value for user


Team.transform = function (team) {
  var transformed = team.get({
    plain: true
  });

  if (transformed.users) {
    transformed.users = transformed.users.map(function (user) {
      user.preference = user.UserTeam.preference;
      delete user.UserTeam;
      return user;
    });
  }

  return transformed;
};

var _default = Team;
exports["default"] = _default;