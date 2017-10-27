var superagent = require('supertest');
var app = require('./app');

function request() {
  return superagent(app.listen());
}

describe('Routes', function () {
  describe('GET /', function () {
    it('should return 200', function (done) {
      request()
        .get('/')
        .expect(200, done);
    });
  });
  describe('GET /', function () {
    it('should return 200', function (done) {
      request()
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err,res){
           if(err)return done(err);
           var text = res.text;
           var json = JSON.parse(text);
           json.should.have.property('name');
           done();
        })
    });
  });
});