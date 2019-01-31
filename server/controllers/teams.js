const Team = require('../models').Team;

module.exports = {
  create(req, res) {
    return Team
      .create({
        teamID: req.body.teamID,
        name: req.body.name,
        questionOne: req.body.questionOne,
        questionTwo: req.body.questionTwo,
	applicants: req.body.applicants
      })	
      .then(Team => res.status(201).send(Team))
      .catch(error => res.status(400).send(error));  
  },
  
  
  list(req, res) {
    return Team
      .all()
      .then(teams => res.status(200).send(teams))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Team
      .findOne({ where: {teamID: req.params.teamID}})
      .then(team => {
        if(!team){
	  return res.status(404.send({
            message: "err",
          });
        }
        return res.status(200).send(team);
      })
      .catch(error => res.status(400).send({
        message: "400 err",
      }));  
  },


  update(req, res){
    return Team
      .findOne({ where: {teamID: req.params.teamID} })
      .then(team => {
        return team
          .update({
            name: req.body.name,
            questionOne: req.body.questionOne,
            questionTwo: req.body.questionTwo,          })
          .then(() => res.status(200).send(team));
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