import cas from '../config/cas';
import usersController from '../controllers/users';
import teamsController from '../controllers/teams';

export default function(app) {
	app.post('/api/users', cas.block, usersController.create);
	app.get('/api/users', cas.block, usersController.list);
	app.get('/api/users/:id', cas.block, usersController.retrieve);
	app.put('/api/users/:id', cas.block, usersController.update);
	app.put('/api/users/:id', cas.block, usersController.update);
	app.delete('/api/users/:id', cas.block, usersController.destroy);

	app.post('/api/teams', cas.block, teamsController.create);
	app.get('/api/teams', cas.block, teamsController.list);
	app.get('/api/teams/:id', cas.block, teamsController.retrieve);
	app.put('/api/teams/:id', cas.block, teamsController.update);
	app.delete('/api/users/:id', cas.block, teamsController.destroy);
}
