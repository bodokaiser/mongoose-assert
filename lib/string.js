var validator = require('validator');

/**
 * Returns true if value is alphanum.
 *
 * @param {String} value
 * @return {Boolean}
 */
exports.email = function(value) {
  return validator.isEmail(value);
};

/**
 * Returns true if value is alpha.
 *
 * @param {String} value
 * @return {Boolean}
 */
exports.alpha = function(value) {
  return validator.isAlpha(sanitize(value));
};

/**
 * Returns true if value is alphanum.
 *
 * @param {String} value
 * @return {Boolean}
 */
exports.alphanum = function(value) {
  return validator.isAlphanumeric(sanitize(value));
};

/**
 * Returns true if value has defined length.
 *
 * @param {String} value
 * @param {Number} length
 * @return {Boolean}
 */
exports.length = function(value, min, max) {
  return validator.isLength(value, min, max);
};

// workaround to allow german characters,
// spaces and dots on alpha* constrains
function sanitize(value) {
  value = value || '';

  return value
    .replace('ß', 'ss')
    .replace('ä', 'ae')
    .replace('ö', 'oe')
    .replace('ü', 'ue')
    .replace('Ä', 'Ae')
    .replace('Ö', 'Oe')
    .replace('Ü', 'Ue')
    .replace(/\s/g, '')
    .replace(/\./g, '');
}
