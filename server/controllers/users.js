import Team from '../models/teams';
import User from '../models/user';
import UserTeams from '../models/userteams';
import Question from '../models/question';
import Response from '../models/response';

export default {
  create: (req, res) => User
    .create({
      token: req.body.token,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      class: req.body.class,
      concentration: req.body.concentration,
      gender: req.body.gender,
      role: req.body.role,
    })
    .then(user => 
      Promise.all([
        UserTeams.create({
          userId: user.id,
          teamId: req.body.teamOne,
          preference: 1,
        }),
        UserTeams.create({
          userId: user.id,
          teamId: req.body.teamTwo,
          preference: 2,
        }),
        UserTeams.create({
          userId: user.id,
          teamId: req.body.teamThree,
          preference: 3,
        })
      ]).then(() => user)
    )
    .then(user => User
      .findOne({ // find the user again to include team choices
        where: { id: user.id },
        include: [
          {
            model: Team,
            attributes: ['id', 'name'],
            as: 'teams',
            through: { attributes: ["preference"] }
          },
        ]
      })
    ).then(user => res.status(201).send(User.transform(user)))
    .catch(err => res.status(500).send(err)),

  list: (req, res) => User
    .findAll({
      include: [
        {
          model: Team,
          attributes: ['id', 'name'],
          as: 'teams',
          through: { attributes: ["preference"] },
        },
        {
          model: Response,
          attributes: ['id', 'text'],
          as: 'responses',
          include: [{
            model: Question, 
            as: 'question',
            attributes: ['id', 'text'],
          }],
        },
      ],
    })
    .then(users => res.status(200).send(users.map(User.transform)))
    .catch(err => res.status(500).send(err)),

  retrieve: (req, res) => User
    .findOne({
      where: { token: req.params.token },
      include: [
        {
          model: Team,
          attributes: ['id', 'name'],
          as: 'teams',
          through: { attributes: ["preference"] },
        },
        
        {
          model: Response,
          attributes: ['id', 'text'],
          as: 'responses',
          include: [{
            model: Question, 
            as: 'question',
            attributes: ['id', 'text'],
          }],
        },
      ]
    })
    .then(user => {
      if (!user) {
        return res.status(404).send({message: "Not found"});
      }
      return res.status(200).send(User.transform(user));
    })
    .catch(err => res.status(500).send(err)),

  update: (req, res) => User
    .findOne({
      where: { token: req.params.token },
      include: [
        {
          model: Team,
          attributes: ['id', 'name'],
          as: 'teams',
          through: { attributes: ["preference"] },
          include: [{
            model: Question, 
            as: 'question',
            attributes: ['id', 'text'],
          }],
        },
      ]
    })
    .then(user => user
      .update({
        firstName: req.body.firstName || user.firstName,
        lastName: req.body.lastName || user.lastName,
        email: req.body.email || user.email,
        class: req.body.class || user.class,
        concentration: req.body.concentration || user.concentration,
        gender: req.body.gender || user.gender,
        role: req.body.role || user.role,
      }) // TODO if team prefs change, update UserTeam tables accordingly
    )
    .then(user => res.status(200).send(User.transform(user)))
    .catch(err => res.status(500).send(err)),

  destroy: (req, res) => User
    .findOne({ where: { id: req.params.id } })
    .then(user => {
      if (!user) return res.status(404).send({message: "Not Found"})
      user.destroy()
    })
    .then(n => res.status(204).send(n))
    .catch(err => res.status(500).send(err)),
}
