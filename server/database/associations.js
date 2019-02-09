import User from '../models/user';
import Team from '../models/teams';

export default () => {
  User.associate();
  Team.associate();
}