"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _cas = _interopRequireDefault(require("../config/cas"));

var _users = _interopRequireDefault(require("../controllers/users"));

var _teams = _interopRequireDefault(require("../controllers/teams"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _default(app) {
  app.post('/api/users', _cas["default"].block, _users["default"].create);
  app.get('/api/users', _cas["default"].block, _users["default"].list);
  app.get('/api/users/:token', _cas["default"].block, _users["default"].retrieve);
  app.put('/api/users/:token', _cas["default"].block, _users["default"].update);
  app.put('/api/users/:id', _cas["default"].block, _users["default"].update);
  app["delete"]('/api/users/:id', _cas["default"].block, _users["default"].destroy);
  app.post('/api/teams', _cas["default"].block, _teams["default"].create);
  app.get('/api/teams', _cas["default"].block, _teams["default"].list);
  app.get('/api/teams/:id', _cas["default"].block, _teams["default"].retrieve);
  app.put('/api/teams/:id', _cas["default"].block, _teams["default"].update);
  app["delete"]('/api/users/:id', _cas["default"].block, _teams["default"].destroy);
}