var chai   = require('chai');
var number = require('../lib/number');

describe('number', function() {

  describe('#zip()', function() {

    it('should return true', function() {
      chai.expect(number.zip(10999))
        .to.be.true;
    });

    it('should return false', function() {
      chai.expect(number.zip(9999))
        .to.be.false;
    });

    it('should return false', function() {
      chai.expect(number.zip(100000))
        .to.be.false;
    });

    it('should return false', function() {
      chai.expect(number.zip(10999.5))
        .to.be.false;
    });

  });

  describe('#steps(unit)', function() {

    it('should return true', function() {
      chai.expect(number.steps(2.99, 0.01))
        .to.be.true;
    });

    it('should return false', function() {
      chai.expect(number.steps(2.9901, 0.01))
        .to.be.false;
    });

  });

});
