const Team = require('../models').Team;
const User = require('../models').User;

// Extracts the preference for each user and makes it a top level value for user
const transformTeam = team => {
  team = team.get({ plain: true })
  console.log("applicants: " + team.applicants);
  if (team.applicants !== undefined) {
      team.applicants = team.applicants.map(user => {
      user.preference = user.UserTeams.preference;
      delete user.UserTeams;
      return user;
    })
  }
  return team;
}

module.exports = {
  create(req, res) {
    return Team
      .create({
        name: req.body.name,
        questionOne: req.body.questionOne,
        questionTwo: req.body.questionTwo,
      })	
      .then(Team => res.status(201).send(Team))
      .catch(error => res.status(400).send(error));  
  },
  
  
  list(req, res) {
    return Team
      .findAll({
        include: [
          { model: User, attributes: ['id', 'firstName', 'lastName'], as: 'applicants', through: {attributes: ["preference"]} },
        ]
      })
      .then(teams => res.status(200).send(teams.map(transformTeam)))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Team
      .findOne({ 
        where: {id: req.params.id},
        include: [
          { model: User, attributes: ['id', 'firstName', 'lastName'], as: 'applicants', through: {attributes: ["preference"]} },
        ]
      })
      .then(team => {
        if (!team) {
          return res.status(404).send({
            message: "err",
          });
        }
        return res.status(200).send(transformTeam(team));
      })
      .catch(error => res.status(400).send({
        message: "400 err",
      }));  
  },


  update(req, res){
    return Team
      .findOne({ where: {id: req.params.id} })
      .then(team => {
        return team
          .update({
            name: req.body.name || team.name,
            questionOne: req.body.questionOne || team.questionOne,
            questionTwo: req.body.questionTwo || team.questionTwo,          
          })
          .then(() => res.status(200).send(transformTeam(team)));
      });
  },


  destroy(req, res){
    return Team
      .findOne({ where: {id: req.params.id} })
      .then(team => {
        return team
          .destroy()
          .then(() => res.status(204).send());
      });
  },
}
