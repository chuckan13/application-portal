"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../database/db");

var _team = _interopRequireDefault(require("./team"));

var _response = _interopRequireDefault(require("../models/response"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var User = _db.sequelize.define('users', {
  token: _sequelize["default"].STRING,
  first_name: _sequelize["default"].STRING,
  last_name: _sequelize["default"].STRING,
  email: _sequelize["default"].STRING,
  "class": _sequelize["default"].STRING,
  concentration: _sequelize["default"].STRING,
  role: _sequelize["default"].STRING
}, {
  timestamps: false
});

User.associate = function () {
  User.belongsToMany(_team["default"], {
    through: 'userteam',
    foreignKey: 'user_id',
    as: 'team'
  }); // User.hasMany(Response);
}; // Transforms to plain javascript object
// Extracts the preference for each team and makes it a top level value for team


User.transform = function (user) {
  var transformed = user.get({
    plain: true
  });

  if (transformed.team) {
    transformed.team = transformed.team.map(function (team) {
      team.preference = team.UserTeam.preference;
      delete team.UserTeam;
      return team;
    });
  }

  return transformed;
};

var _default = User;
exports["default"] = _default;