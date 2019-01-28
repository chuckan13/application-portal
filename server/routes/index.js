const cas = require('../config/cas');
const usersController = require('../controllers').users;

module.exports = (app) => {
  app.post('/api/users', cas.block, usersController.create);
  app.get('/api/users', cas.block, usersController.list);
  app.get('/api/users/:token', cas.block, usersController.retrieve);
  app.put('/api/users/:token', cas.block, usersController.update);
  app.delete('/api/users/:id', cas.block, usersController.destroy);
};
