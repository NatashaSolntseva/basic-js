const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (!str) return '';

  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i += 1) {
    const current = str[i];
    const next = str[i + 1];

    if (current === next) {
      count += 1;
    } else {
      result += (count > 1 ? count : '') + current;
      count = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
