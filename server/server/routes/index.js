const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);
  app.get('/api/users/:token', usersController.retrieve);
  app.put('/api/users/:token', usersController.update);
  app.delete('/api/users/:token', usersController.destroy);
};