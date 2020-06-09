"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../database/db");

var _team = _interopRequireDefault(require("./team"));

var _response = _interopRequireDefault(require("../models/response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Question = _db.sequelize.define('question', {
  text: _sequelize["default"].TEXT,
  team_id: {
    type: _sequelize["default"].INTEGER,
    references: {
      model: 'teams',
      key: 'id'
    }
  }
}, {
  timestamps: false
});

Question.associate = function () {
  // Question.belongsTo(Team);
  Question.hasMany(_response["default"], {
    foreignKey: 'question_id',
    as: 'response'
  });
};

var _default = Question;
exports["default"] = _default;