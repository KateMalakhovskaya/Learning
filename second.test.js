const request = require('supertest')
const agent = request('https://reqres.in/api')


describe("Тест 2 - ну что-нибудь посложнее", function() {
  it("Тест 2.1", function(done) {
    agent
     .get('/user')
     .expect('Content-Type', /json/)
     .expect(200, done)
  })

  it("Тест 2.2", function(done) {
    agent
     .get('/users/2')
     .expect('Content-Type', /json/)
     .expect(200, done)
  })

  it("Тест 2.3", function(done) {
    agent
     .get('/users/104')
     .expect('Content-Type', /json/)
     .expect(404, done)
  })

  it("Тест 2.4", function(done) {
    agent
     .post('/users')
     .send({
        name: 'John',
        job: 'Developer'
     })
     .set('Accept', 'application/json')
     .expect('Content-Type', /json/)
     .expect(201, done)
  })
})