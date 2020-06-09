"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _team = _interopRequireDefault(require("../models/team"));

var _user = _interopRequireDefault(require("../models/user"));

var _question = _interopRequireDefault(require("../models/question"));

var _response = _interopRequireDefault(require("../models/response"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var _default = {
  create: function create(req, res) {
    return _team["default"].create({
      name: req.body.name
    }).then(function (team) {
      return res.status(201).send(team);
    })["catch"](function (err) {
      return res.status(500).send(err);
    });
  },
  list: function list(req, res) {
    return _team["default"].findAll({
      include: [{
        model: _user["default"],
        attributes: ['id', 'first_name', 'last_name'],
        as: 'users',
        through: {
          attributes: ['preference']
        }
      }, {
        model: _question["default"],
        attributes: ['id', 'text'],
        as: 'question',
        include: [{
          model: _response["default"],
          as: 'response',
          attributes: ['id', 'text', 'user_id']
        }]
      }]
    }).then(function (teams) {
      return res.status(200).send(teams.map(_team["default"].transform));
    })["catch"](function (err) {
      return res.status(500).send(err);
    });
  },
  retrieve: function retrieve(req, res) {
    return _team["default"].findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: _user["default"],
        attributes: ['id', 'first_name', 'last_name'],
        as: 'users',
        through: {
          attributes: ['preference']
        }
      }, {
        model: _question["default"],
        attributes: ['id', 'text'],
        as: 'question',
        include: [{
          model: _response["default"],
          as: 'response',
          attributes: ['id', 'text', 'user_id']
        }]
      }]
    }).then(function (team) {
      if (!team) {
        return res.status(404).send({
          message: 'Not found'
        });
      }

      return res.status(200).send(_team["default"].transform(team));
    })["catch"](function (err) {
      return res.status(500).send(err);
    });
  },
  update: function update(req, res) {
    return _team["default"].findOne({
      where: {
        id: req.params.id
      }
    }).then(function (team) {
      return team.update({
        name: req.body.name || team.name
      });
    }).then(function (team) {
      return res.status(200).send(_team["default"].transform(team));
    })["catch"](function (err) {
      return res.status(500).send(err);
    });
  },
  destroy: function destroy(req, res) {
    return _team["default"].findOne({
      where: {
        id: req.params.id
      }
    }).then(function (team) {
      return team.destroy();
    }).then(function (n) {
      return res.status(204).send(n);
    });
  }
};
exports["default"] = _default;