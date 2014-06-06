var chai   = require('chai');
var string = require('../lib/string');

describe('string', function() {

  describe('#email()', function() {

    it('should return true', function() {
      chai.expect(string.email('i@bodokaiser.io'))
        .to.be.true;
    });

    it('should return false', function() {
      chai.expect(string.email('@bodo.io'))
        .to.be.false;
    });

  });

  describe('#alpha()', function() {

    it('should return true', function() {
      chai.expect(string.alpha('Bodo Kaiser'))
        .to.be.true;
    });

    it('should return true', function() {
      chai.expect(string.alpha('Ralf Müller'))
        .to.be.true;
    });

    it('should return false', function() {
      chai.expect(string.alpha('WHAT?'))
        .to.be.false;
    });

    it('should return false', function() {
      chai.expect(string.alpha('Me1'))
        .to.be.false;
    });

  });

  describe('#alphanum()', function() {

    it('should return true', function() {
      chai.expect(string.alphanum('Bodo Kaiser12'))
        .to.be.true;
    });

    it('should return false', function() {
      chai.expect(string.alphanum('Melb0rn$'))
        .to.be.false;
    });

  });

  describe('#length(min[, max])', function() {

    it('should return true', function() {
      chai.expect(string.length('abc', 3))
        .to.be.true;
    });

    it('should return true', function() {
      chai.expect(string.length('abcd', 3))
        .to.be.true;
    });

    it('should return true', function() {
      chai.expect(string.length('abcd', 3, 4))
        .to.be.true;
    });

    it('should return true', function() {
      chai.expect(string.length('abcd', 4, 4))
        .to.be.true;
    });

    it('should return false', function() {
      chai.expect(string.length('ab', 3))
        .to.be.false;
    });

    it('should return false', function() {
      chai.expect(string.length('abcd', 2, 3))
        .to.be.false;
    });

  });

});
