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
    return _response["default"].create({
      text: req.body.text,
      question_id: req.body.question_id,
      user_id: req.body.user_id
    }).then(function (response) {
      return res.status(201).send(response);
    })["catch"](function (err) {
      return res.status(500).send(err);
    });
  },
  list: function list(req, res) {
    return _response["default"].findAll({// include: [
      // 	{
      // 		model: User,
      // 		attributes: [ 'id', 'first_name', 'last_name' ],
      // 		as: 'users',
      // 		through: { attributes: [ 'preference' ] }
      // 	},
      // 	{
      // 		model: Question,
      // 		attributes: [ 'id', 'text' ],
      // 		as: 'question',
      // 		include: [
      // 			{
      // 				model: Response,
      // 				as: 'response',
      // 				attributes: [ 'id', 'text', 'user_id' ]
      // 			}
      // 		]
      // 	}
      // ]
    }).then(function (responses) {
      return res.status(200).send(responses);
    })["catch"](function (err) {
      return res.status(500).send(err);
    });
  } // retrieve: (req, res) =>
  // 	Team.findOne({
  // 		where: { id: req.params.id },
  // 		include: [
  // 			{
  // 				model: User,
  // 				attributes: [ 'id', 'first_name', 'last_name' ],
  // 				as: 'users',
  // 				through: { attributes: [ 'preference' ] }
  // 			},
  // 			{
  // 				model: Question,
  // 				attributes: [ 'id', 'text' ],
  // 				as: 'question',
  // 				include: [
  // 					{
  // 						model: Response,
  // 						as: 'response',
  // 						attributes: [ 'id', 'text', 'user_id' ]
  // 					}
  // 				]
  // 			}
  // 		]
  // 	})
  // 		.then(team => {
  // 			if (!team) {
  // 				return res.status(404).send({
  // 					message: 'Not found'
  // 				});
  // 			}
  // 			return res.status(200).send(Team.transform(team));
  // 		})
  // 		.catch(err => res.status(500).send(err)),
  // update: (req, res) =>
  // 	Team.findOne({
  // 		where: { id: req.params.id }
  // 	})
  // 		.then(team =>
  // 			team.update({
  // 				name: req.body.name || team.name
  // 			})
  // 		)
  // 		.then(team => res.status(200).send(Team.transform(team)))
  // 		.catch(err => res.status(500).send(err)),
  // destroy: (req, res) =>
  // 	Team.findOne({ where: { id: req.params.id } }).then(team => team.destroy()).then(n => res.status(204).send(n))

};
exports["default"] = _default;