import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { sequelize } from '../database/db';
import app from '../app';
import User from '../models/user';

chai.use(chaiHttp)

const user1 = {
  firstName: 'Roland',
  lastName: 'Fong',
  token: 'a',
  email: 'rfong@princeton.edu',
  class: '2019',
  concentration: 'Computer Science',
  gender: 'male',
  createdAt: new Date(),
  updatedAt: new Date(),
}

describe('API Routes', () => {
  // start with a fresh DB 
  beforeEach(done => {
    sequelize.sync({ force: true })
      .then(() => {
        User.create(user1);
      }).then(() => {
        done()
      }).catch(e => console.err(e));
  })

  describe('GET /api/users', done => {
    it('should get a list of users', done => {
      chai.request(app)
        .get('/api/users')
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res).to.be.json
          expect(res.body).to.be.a('array')
          expect(res.body).to.be.length(1)
          // TODO have some assertion for contents - note that DB adds additional fields (which is okay, but must be accounted for)
          done()
        })
    })
  })

})
