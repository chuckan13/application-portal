const User = require('../models').User;
const Team = require('../models').Team;
const UserTeams = require('../models').UserTeams;

// Extracts the preference for each team and makes it a top level value for team
const transformUser = user => {
  user = user.get({ plain: true })
  user.teams = user.teams.map(team => {
    team.preference = team.UserTeams.preference;
    delete team.UserTeams;
    return team;
  })
  return user;
}

module.exports = {
  create(req, res) {
    return User
      .create({
        token: req.body.token,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        class: req.body.class,
        concentration: req.body.concentration,
        gender: req.body.gender,
        responseOne: req.body.responseOne,
        responseTwo: req.body.responseTwo,
        responseThree: req.body.responseThree,
        responseFour: req.body.responseFour,
        responseFive: req.body.responseFive,
        responseSix: req.body.responseSix
      })
      .then(user => {
        return Promise.all([
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
        ]).then(() => {
          res.status(201).send(user)
        }).catch(err => res.status(500).send(error))
      })
      .catch(error => res.status(400).send(error));
  },

  
  list(req, res) {
    return User
      .findAll({
        include: [
          { 
            model: Team, 
            attributes: ['id', 'name'], 
            as: 'teams', 
            through: {attributes: [ "preference" ]} ,
          },
        ],
      })
      .then(users => res.status(200).send(users.map(transformUser)))
      .catch(error => {
        console.log(error);
        res.status(400).send(error);
      });
  },


  retrieve(req,res){
    return User
      .findOne({ 
        where: {token: req.params.token},
        include: [
          { 
            model: Team, 
            attributes: ['id', 'name'], 
            as: 'teams', 
            through: {attributes: [ "preference" ]} 
          },
        ]
       })
      .then(user => {
        if(!user){
          return res.status(404).send({
            message: "err",
          });
        }
        return res.status(200).send(transformUser(user));
      })
      .catch(error => res.status(400).send({
        message: "wtf are you doing",
      }));
  },

  update(req, res){
    return User
      .findOne({ 
        where: {token: req.params.token},
        include: [
          { 
            model: Team, 
            attributes: ['id', 'name'], 
            as: 'teams', 
            through: {attributes: [ "preference" ]} 
          },
        ]
      })
      .then(user => {
        // TODO this will overwrite values if some fields are null, change
        // so that only values that are present are written in
        // e.g. req.body.email || user.email
        return user
          .update({
            firstName: req.body.firstName || user.firstName,
            lastName: req.body.lastName || user.lastName,
            email: req.body.email || user.email,
            class: req.body.class || user.class,
            concentration: req.body.concentration || user.concentration,
            gender: req.body.gender || user.gender,
            responseOne: req.body.responseOne || user.responseOne,
            responseTwo: req.body.responseTwo || user.responseTwo,
            responseThree: req.body.responseThree || user.responseThree,
            responseFour: req.body.responseFour || user.responseFour,
            responseFive: req.body.responseFive || user.responseFive,
            responseSix: req.body.responseSix || user.responseSix
          }) // TODO if team prefs change, update UserTeam tables accordingly
          .then(() => res.status(200).send(transformUser(user)));
      });


  },


  destroy(req, res){
    return User
      .findOne({ where: {id: req.params.id} })
      .then(user => {
        return user
          .destroy()
          .then(() => res.status(204).send());
      });


  },

};
