const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const mainStr = String(str);
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const separator = options.separator || '+';
  const repeatTimes = options.repeatTimes || 1;   
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  const additionBlock = new Array(additionRepeatTimes)
  .fill(addition)
  .join(additionSeparator);

  const result = new Array(repeatTimes)
  .fill(mainStr + additionBlock)
  .join(separator);

  return result

}

module.exports = {
  repeater
};
