const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        class: req.body.class,
        concentration: req.body.concentration,
        gender: req.body.gender,
        //teamPicks: req.body.teamPicks,

        
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
            // update status
            status: req.body.status || user.status,
          })
          .then(() => res.status(200).send(user));
      });


  },


  destroy(req, res){
    return User
      .findOne({ where: {token: req.params.token} })
      .then(user => {
        return user
          .destroy()
          .then(() => res.status(204).send());
      });


  },

};