import Team from '../models/team';
import User from '../models/user';
import UserTeam from '../models/userteam';
import Question from '../models/question';
import Response from '../models/response';

export default {
	create: (req, res) =>
		User.create({
			token: req.body.token,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			class: req.body.class,
			concentration: req.body.concentration,
			role: req.body.role
		})
			.then(user =>
				Promise.all([
					UserTeam.create({
						user_id: user.id,
						team_id: req.body.teamOne,
						preference: 1
					}),
					UserTeam.create({
						user_id: user.id,
						team_id: req.body.teamTwo,
						preference: 2
					}),
					UserTeam.create({
						user_id: user.id,
						team_id: req.body.teamThree,
						preference: 3
					})
				]).then(() => user)
			)
			.then(user =>
				User.findOne({
					// find the user again to include team choices
					where: { id: user.id }
				})
			)
			.then(user => res.status(201).send(User.transform(user)))
			.catch(err => res.status(500).send(err)),

	list: (req, res) =>
		User.findAll({
			include: [
				{
					model: Team,
					attributes: [ 'id', 'name' ],
					as: 'teams',
					through: { attributes: [ 'preference' ] }
				},
				{
					model: Response,
					attributes: [ 'id', 'text' ],
					as: 'response',
					include: [
						{
							model: Question,
							as: 'question',
							attributes: [ 'id', 'text', 'team_id' ]
						}
					]
				}
			]
		})
			.then(users => res.status(200).send(users.map(User.transform)))
			.catch(err => res.status(500).send(err)),

	retrieve: (req, res) =>
		User.findOne({
			where: { id: req.params.id },
			include: [
				{
					model: Team,
					attributes: [ 'id', 'name' ],
					as: 'teams',
					through: { attributes: [ 'preference' ] }
				},
				{
					model: Response,
					attributes: [ 'id', 'text' ],
					as: 'response',
					include: [
						{
							model: Question,
							as: 'question',
							attributes: [ 'id', 'text', 'team_id' ]
						}
					]
				}
			]
		})
			.then(user => {
				if (!user) {
					return res.status(404).send({ message: 'Not found' });
				}
				return res.status(200).send(User.transform(user));
			})
			.catch(err => res.status(500).send(err)),

	update: (req, res) =>
		User.findOne({
			where: { id: req.params.id }
		})
			.then(
				user =>
					user.update({
						token: req.body.token || user.token,
						first_name: req.body.first_name || user.first_name,
						last_name: req.body.last_name || user.last_name,
						email: req.body.email || user.email,
						class: req.body.class || user.class,
						concentration: req.body.concentration || user.concentration,
						role: req.body.role || user.role
					}) // TODO if team prefs change, update UserTeam tables accordingly
			)
			.then(user => res.status(200).send(User.transform(user)))
			.catch(err => res.status(500).send(err)),

	destroy: (req, res) =>
		User.findOne({ where: { id: req.params.id } })
			.then(user => {
				if (!user) return res.status(404).send({ message: 'Not Found' });
				user.destroy();
			})
			.then(n => res.status(204).send(n))
			.catch(err => res.status(500).send(err))
};
