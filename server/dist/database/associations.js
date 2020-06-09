"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("../models/user"));

var _team = _interopRequireDefault(require("../models/team"));

var _question = _interopRequireDefault(require("../models/question"));

var _response = _interopRequireDefault(require("../models/response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  _user["default"].associate();

  _team["default"].associate();

  _question["default"].associate();

  _response["default"].associate();
};

exports["default"] = _default;