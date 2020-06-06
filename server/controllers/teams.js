import Team from '../models/team';
import User from '../models/user';
import Question from '../models/question';
import Response from '../models/response';

export default {
	create: (req, res) =>
		Team.create({
			name: req.body.name
		})
			.then(team => res.status(201).send(team))
			.catch(err => res.status(500).send(err)),

	list: (req, res) =>
		Team.findAll({
			include: [
				{
					model: User,
					attributes: [ 'id', 'first_name', 'last_name' ],
					as: 'users',
					through: { attributes: [ 'preference' ] }
				},
				{
					model: Question,
					attributes: [ 'id', 'text' ],
					as: 'question',
					include: [
						{
							model: Response,
							as: 'response',
							attributes: [ 'id', 'text', 'user_id' ]
						}
					]
				}
			]
		})
			.then(teams => res.status(200).send(teams.map(Team.transform)))
			.catch(err => res.status(500).send(err)),

	retrieve: (req, res) =>
		Team.findOne({
			where: { id: req.params.id }
		})
			.then(team => {
				if (!team) {
					return res.status(404).send({
						message: 'Not found'
					});
				}
				return res.status(200).send(Team.transform(team));
			})
			.catch(err => res.status(500).send(err)),

	update: (req, res) =>
		Team.findOne({
			where: { id: req.params.id }
		})
			.then(team =>
				team.update({
					name: req.body.name || team.name
				})
			)
			.then(team => res.status(200).send(Team.transform(team)))
			.catch(err => res.status(500).send(err)),

	destroy: (req, res) =>
		Team.findOne({ where: { id: req.params.id } }).then(team => team.destroy()).then(n => res.status(204).send(n))
};
