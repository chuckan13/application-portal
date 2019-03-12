
process.env.NODE_ENV = 'test'

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp)

const app = api(models)

describe('API Routes', () => {

    // start with a fresh DB 
    beforeEach(done => {
        models.sequelize.sync({ force: true, match: /_test$/, logging: false })
            .then(() => {
                return seed(models)
            }).then(() => {
                done()
            })

    })

    describe('GET /v1/users', (done) => {
        it('should get a list of users', (done) => {
            chai.request(app)
                .get('/v1/users')
                .end((err, res) => {
                    expect(res.status).to.equal(200)
                    expect(res).to.be.json
                    expect(res.body).to.be.a('array')
                    done()
                })
        })
    })

})
