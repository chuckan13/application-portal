"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _team = _interopRequireDefault(require("../models/team"));

var _user = _interopRequireDefault(require("../models/user"));

var _userteam = _interopRequireDefault(require("../models/userteam"));

var _question = _interopRequireDefault(require("../models/question"));

var _response = _interopRequireDefault(require("../models/response"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var _default = {
  create: function create(req, res) {
    return _user["default"].create({
      token: req.body.token,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      "class": req.body["class"],
      concentration: req.body.concentration,
      role: req.body.role
    }).then(function (user) {
      return Promise.all([_userteam["default"].create({
        user_id: user.id,
        team_id: req.body.teamOne,
        preference: 1
      }), _userteam["default"].create({
        user_id: user.id,
        team_id: req.body.teamTwo,
        preference: 2
      }), _userteam["default"].create({
        user_id: user.id,
        team_id: req.body.teamThree,
        preference: 3
      })]).then(function () {
        return user;
      });
    }).then(function (user) {
      return _user["default"].findOne({
        // find the user again to include team choices
        where: {
          id: user.id
        }
      });
    }).then(function (user) {
      return res.status(201).send(_user["default"].transform(user));
    })["catch"](function (err) {
      return res.status(500).send(err);
    });
  },
  list: function list(req, res) {
    return _user["default"].findAll({
      include: [{
        model: _team["default"],
        attributes: ['id', 'name'],
        as: 'teams',
        through: {
          attributes: ['preference']
        }
      }, {
        model: _response["default"],
        attributes: ['id', 'text'],
        as: 'response',
        include: [{
          model: _question["default"],
          as: 'question',
          attributes: ['id', 'text', 'team_id']
        }]
      }]
    }).then(function (users) {
      return res.status(200).send(users.map(_user["default"].transform));
    })["catch"](function (err) {
      return res.status(500).send(err);
    });
  },
  retrieve: function retrieve(req, res) {
    return _user["default"].findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: _team["default"],
        attributes: ['id', 'name'],
        as: 'teams',
        through: {
          attributes: ['preference']
        }
      }, {
        model: _response["default"],
        attributes: ['id', 'text'],
        as: 'response',
        include: [{
          model: _question["default"],
          as: 'question',
          attributes: ['id', 'text', 'team_id']
        }]
      }]
    }).then(function (user) {
      if (!user) {
        return res.status(404).send({
          message: 'Not found'
        });
      }

      return res.status(200).send(_user["default"].transform(user));
    })["catch"](function (err) {
      return res.status(500).send(err);
    });
  },
  update: function update(req, res) {
    return _user["default"].findOne({
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      return user.update({
        token: req.body.token || user.token,
        first_name: req.body.first_name || user.first_name,
        last_name: req.body.last_name || user.last_name,
        email: req.body.email || user.email,
        "class": req.body["class"] || user["class"],
        concentration: req.body.concentration || user.concentration,
        role: req.body.role || user.role
      });
    } // TODO if team prefs change, update UserTeam tables accordingly
    ).then(function (user) {
      return res.status(200).send(_user["default"].transform(user));
    })["catch"](function (err) {
      return res.status(500).send(err);
    });
  },
  destroy: function destroy(req, res) {
    return _user["default"].findOne({
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      if (!user) return res.status(404).send({
        message: 'Not Found'
      });
      user.destroy();
    }).then(function (n) {
      return res.status(204).send(n);
    })["catch"](function (err) {
      return res.status(500).send(err);
    });
  }
};
exports["default"] = _default;