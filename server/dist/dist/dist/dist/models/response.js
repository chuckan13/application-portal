"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../database/db");

var _user = _interopRequireDefault(require("../models/user"));

var _question = _interopRequireDefault(require("../models/question"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var Response = _db.sequelize.define('response', {
  text: _sequelize["default"].TEXT,
  question_id: {
    type: _sequelize["default"].INTEGER,
    references: {
      model: 'question',
      key: 'id'
    }
  },
  user_id: {
    type: _sequelize["default"].INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  }
}, {
  timestamps: false
});

Response.associate = function () {
  Response.belongsTo(_user["default"]);
  Response.belongsTo(_question["default"]);
};

var _default = Response;
exports["default"] = _default;