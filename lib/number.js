/**
 * Returns true if value is zipcode.
 *
 * @param {Number} value
 * @return {Boolean}
 */
exports.zip = function(value) {
  if (value > 99999) return false;
  if (value < 10000) return false;
  if (value % 1 !== 0) return false;

  return true;
};

/**
 * Returns true if value matches steps.
 *
 * @param {Number} value
 * @param {Number} steps
 * @return {Boolean}
 */
exports.steps = function(value, steps) {
  return value / steps % 1 === 0;
};
