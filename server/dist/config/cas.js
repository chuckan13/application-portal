"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _casAuthentication = _interopRequireDefault(require("cas-authentication"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Create a new instance of CASAuthentication.
var cas = new _casAuthentication["default"]({
  cas_url: 'https://fed.princeton.edu/cas/',
  service_url: 'http://localhost:3001',
  cas_version: 'saml1.1',
  is_dev_mode: true,
  // set to true during development
  dev_mode_user: 'tester'
});
var _default = cas;
exports["default"] = _default;