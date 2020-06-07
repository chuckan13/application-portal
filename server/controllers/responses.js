import Team from '../models/team';
import User from '../models/user';
import Question from '../models/question';
import Response from '../models/response';

export default {
	create: (req, res) =>
		Response.create({
			text: req.body.text,
			question_id: req.body.question_id,
			user_id: req.body.user_id
		})
			.then(response => res.status(201).send(response))
			.catch(err => res.status(500).send(err)),

	list: (req, res) =>
		Response.findAll(
			{
				// include: [
				// 	{
				// 		model: User,
				// 		attributes: [ 'id', 'first_name', 'last_name' ],
				// 		as: 'users',
				// 		through: { attributes: [ 'preference' ] }
				// 	},
				// 	{
				// 		model: Question,
				// 		attributes: [ 'id', 'text' ],
				// 		as: 'question',
				// 		include: [
				// 			{
				// 				model: Response,
				// 				as: 'response',
				// 				attributes: [ 'id', 'text', 'user_id' ]
				// 			}
				// 		]
				// 	}
				// ]
			}
		)
			.then(responses => res.status(200).send(responses))
			.catch(err => res.status(500).send(err))

	// retrieve: (req, res) =>
	// 	Team.findOne({
	// 		where: { id: req.params.id },
	// 		include: [
	// 			{
	// 				model: User,
	// 				attributes: [ 'id', 'first_name', 'last_name' ],
	// 				as: 'users',
	// 				through: { attributes: [ 'preference' ] }
	// 			},
	// 			{
	// 				model: Question,
	// 				attributes: [ 'id', 'text' ],
	// 				as: 'question',
	// 				include: [
	// 					{
	// 						model: Response,
	// 						as: 'response',
	// 						attributes: [ 'id', 'text', 'user_id' ]
	// 					}
	// 				]
	// 			}
	// 		]
	// 	})
	// 		.then(team => {
	// 			if (!team) {
	// 				return res.status(404).send({
	// 					message: 'Not found'
	// 				});
	// 			}
	// 			return res.status(200).send(Team.transform(team));
	// 		})
	// 		.catch(err => res.status(500).send(err)),

	// update: (req, res) =>
	// 	Team.findOne({
	// 		where: { id: req.params.id }
	// 	})
	// 		.then(team =>
	// 			team.update({
	// 				name: req.body.name || team.name
	// 			})
	// 		)
	// 		.then(team => res.status(200).send(Team.transform(team)))
	// 		.catch(err => res.status(500).send(err)),

	// destroy: (req, res) =>
	// 	Team.findOne({ where: { id: req.params.id } }).then(team => team.destroy()).then(n => res.status(204).send(n))
};
