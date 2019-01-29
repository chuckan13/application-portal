const User = require('../models').User;

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
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        teamThree: req.body.teamThree,
        responseOne: req.body.responseOne,
        responseTwo: req.body.responseTwo,
        responseThree: req.body.responseThree,
        responseFour: req.body.responseFour,
        responseFive: req.body.responseFive,
        responseSix: req.body.responseSix
      })
      .then(User => res.status(201).send(User))
      .catch(error => res.status(400).send(error));
  },

  
  list(req, res) {
    return User
      .all()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },


  retrieve(req,res){
    //const nam = req.params.token;
    return User
      .findOne({ where: {token: req.params.token} })
      .then(user => {
        if(!user){
          return res.status(404).send({
            message: "err",
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send({
        message: "wtf are you doing",
      }));
  },

  update(req, res){
    return User
      .findOne({ where: {token: req.params.token} })
      .then(user => {
        return user
          .update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            class: req.body.class,
            concentration: req.body.concentration,
            gender: req.body.gender,
            teamOne: req.body.teamOne,
            teamTwo: req.body.teamTwo,
            teamThree: req.body.teamThree,
            responseOne: req.body.responseOne,
            responseTwo: req.body.responseTwo,
            responseThree: req.body.responseThree,
            responseFour: req.body.responseFour,
            responseFive: req.body.responseFive,
            responseSix: req.body.responseSix
          })
          .then(() => res.status(200).send(user));
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
