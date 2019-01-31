const cas = require('../config/cas');
const usersController = require('../controllers').users;
const teamsController = require('../controllers').teams;

module.exports = (app) => {
  app.post('/api/users', cas.block, usersController.create);
  app.get('/api/users', cas.block, usersController.list);
  app.get('/api/users/:token', cas.block, usersController.retrieve);
  app.put('/api/users/:token', cas.block, usersController.update);
  app.put('/api/users', cas.block, usersController.update);
  app.delete('/api/users/:id', cas.block, usersController.destroy);

  app.post('/api/teams', teamsController.create);
  app.get('/api/teams', teamsController.list);
  app.get('/api/teams/:teamID', teamsController.retrieve);
  app.put('/api/teams', teamsController.update);
  app.delete('/api/users/:id', teamsController.destroy);
};
