"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _config = _interopRequireDefault(require("../config/config.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var env = process.env.NODE_ENV || 'development';
var config = _config["default"][env];
var sequelize = new _sequelize["default"](config.database, config.username, config.password, config);
exports.sequelize = sequelize;