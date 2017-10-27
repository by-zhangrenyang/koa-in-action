var fs = require('fs');
var should = require('should');
describe('fs', function() {
  describe('#readFile()', function() {
    it('should not be null', function(done) {
      fs.readFile('./1.txt', 'utf8', function(err,res){
        if (err) throw err;
        res.should.not.equal(null);
        done();
      });
    });
  });
});