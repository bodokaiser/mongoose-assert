var number = require('./number');
var string = require('./string');

module.exports = function(mongoose) {

  var Types = mongoose.Schema.Types;

  /**
   * Applies validation for (german) zip code.
   *
   * @param {String}
   * @return {SchemaType}
   */
  Types.Number.prototype.zip = function(message) {
    message = message || 'Path `{PATH}` ({VALUE}) is not a zip code.';

    this.validators.push([
      number.zip,
      message,
      'zip'
    ]);

    return this;
  };

  /**
   * Applies validation for number steps.
   *
   * @param {Number} steps
   * @param {String} message
   * @return {SchemaType}
   */
  Types.Number.prototype.steps = function(steps, message) {
    message = message || 'Path `{PATH}` ({VALUE}) has not {STEPS} steps.',

    this.validators.push([
      function(value) {
        return number.steps(value, steps);
      },
      message.replace('{STEPS}', steps),
      'steps'
    ]);

    return this;
  };

  /**
   * Applies validation for string length.
   *
   * @param {String} message
   * @return {SchemaType}
   */
  Types.String.prototype.length = function(min, max, message) {
    message = message || 'Path `{PATH}` ({VALUE}) has invalid length.',

    this.validators.push([
      function(value) {
        return string.length(value, min, max);
      },
      message,
      'length'
    ]);

    return this;
  };

  /**
   * Applies validation for email addresses.
   *
   * @param {String} message
   * @return {SchemaType}
   */
  Types.String.prototype.email = function(message) {
    message = message || 'Path `{PATH}` ({VALUE}) is not an email.',

    this.validators.push([
      string.email,
      message,
      'email'
    ]);

    return this;
  };

  /**
   * Applies validation for alpha characters.
   *
   * @param {String} message
   * @return {SchemaType}
   */
  Types.String.prototype.alpha = function(message) {
    message = message || 'Path `{PATH}` ({VALUE}) has non alpha characters.',

    this.validators.push([
      string.alpha,
      message,
      'alpha'
    ]);

    return this;
  };

  /**
   * Applies validation for alpha numeric characters.
   *
   * @param {String} message
   * @return {SchemaType}
   */
  Types.String.prototype.alphanum = function(message) {
    message = message || 'Path `{PATH}` ({VALUE}) has non alphanumeric characters.',

    this.validators.push([
      string.alphanum,
      message,
      'email'
    ]);

    return this;
  };

};
