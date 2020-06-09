"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../database/db");

var _team = require("./team");

var _user = require("./user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UserTeam = _db.sequelize.define('userteams', {
  team_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _team.Team,
      key: 'id'
    }
  },
  user_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _user.User,
      key: 'id'
    }
  },
  preference: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

var _default = UserTeam;
exports["default"] = _default;