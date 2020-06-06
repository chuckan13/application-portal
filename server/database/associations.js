import User from '../models/user';
import Team from '../models/team';
import Question from '../models/question';
import Response from '../models/response';

export default () => {
	User.associate();
	Team.associate();
	Question.associate();
	Response.associate();
};
