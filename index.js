const _isString = (str) => { return (typeof str === 'string') ? true : false; };

function _removeEmptyArrElements(arr) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] === '') arr.splice(i, 1);
  }
  return arr;
}

/**
 * @private
 * Removes all comma characters from a string.
 * @param {string} str The input string from which commas will be removed.
 * @returns {string} The string with all commas removed.
 */
function _removeComma(str) { return removeCharacter(str, ','); }

/**
 * Removes all space characters from a string.
 * @param {string} str The input string from which spaces will be removed.
 * @returns {string} The string with all spaces removed.
 */
function removeSpace(str) {
  if (_isString(str)) {
    while (str.indexOf(" ") >= 0) { str = str.replace(" ", ""); }
  }
  return str;
}

/**
 * Converts a string ('true', 'false') or a number to a boolean.
 * @param {string|number} str The input string or number to convert. Case-insensitive for strings.
 * @returns {boolean|string} Returns `true` if the string is 'true' or the number is > 0. Returns `false` if the string is 'false' or the number is <= 0. Returns the original string if it's not a boolean representation.
 */
function convertBoolString(str) {
  if (typeof str === 'number') return (str > 0) ? true : false;

  let strUpper = str.toUpperCase();
  return (strUpper === 'TRUE') ? true : (strUpper === 'FALSE') ? false : str;
}

/**
 * Checks if a value is null or the string 'NULL'.
 * @param {*} str The input value to check.
 * @returns {boolean} Returns `true` if the input is `null` or the string 'NULL' (case-insensitive), otherwise `false`.
 */
// TODO: rename to 'isNull'
function checkNull(str) {
  if (str === null) {
    return true;
  } else if (typeof str !== 'string') {
    return false;
  }

  str = str.toUpperCase();
  return (str === 'NULL') ? true : false;
}

/**
 * Splits a string by commas, trims whitespace around the commas, and removes empty elements.
 * @param {string} str The input string to be split.
 * @returns {string[]} An array of strings resulting from the split.
 */
function splitByComma(str) {
  let spliter = /\s*[\,]\s*/;
  let arr = str.split(spliter);

  return _removeEmptyArrElements(arr);
}

/**
 * Splits a string by colons, trims whitespace around the colons, and removes empty elements.
 * @param {string} str The input string to be split.
 * @returns {string[]} An array of strings resulting from the split.
 */
function splitByColon(str) {
  let spliter = /\s*[\:]\s*/;
  let arr = str.split(spliter);

  return _removeEmptyArrElements(arr);
}

/**
 * Splits a string by semicolons, trims whitespace around the semicolons, and removes empty elements.
 * @param {string} str The input string to be split.
 * @returns {string[]} An array of strings resulting from the split.
 */
function splitBySemicolon(str) {
  let spliter = /\s*[\;]\s*/;
  let arr = str.split(spliter);

  return _removeEmptyArrElements(arr);
}

/**
 * Converts a string representation of a number into a numeric type.
 * This function handles strings with commas (e.g., "1,000") and accounting-style
 * negative numbers (e.g., "(123.45)").
 * @param {string} str The input string to convert.
 * @returns {number} The resulting floating-point number. Returns `NaN` if the string cannot be parsed into a number.
 */
function string2Number(str) {
  str = _removeComma(str);
  return parseFloat(_formatNegativeNumberStyle(str));
}

/**
 * @private
 * Formats a string representing a negative number in accounting style (e.g., "(123.45)")
 * to the standard negative format (e.g., "-123.45").
 * @param {string} str The input string to format.
 * @returns {string} The formatted string with a leading minus sign if it was in accounting format, otherwise the original string.
 */
function _formatNegativeNumberStyle(str) {
  const regexp = /^\(\d+(\.\d+)?\)$/;

  if (typeof str !== 'string') return str;
  if (regexp.test(str) === true) {
    str = str.replace('(', '');
    str = str.replace(')', '');
    str = '-' + str;
  }

  return str;
}

/**
 * Removes all occurrences of a specified character from a string.
 * @param {string} str The input string from which the character will be removed.
 * @param {string} character The character to remove from the string.
 * @returns {string} The string with all occurrences of the specified character removed.
 */
function removeCharacter(str, character) {
  let strNew = str;
  if (_isString(str) && _isString(character)) {
    while (strNew.indexOf(character) >= 0) { strNew = strNew.replace(character, ''); }
  }
  return strNew;
}

/**
 * Converts an alphabetic string (like a spreadsheet column identifier) to a zero-based serial number.
 * For example, 'A' or 'a' will be converted to 0, 'B' or 'b' to 1, 'Z' to 25, 'AA' to 26, etc.
 * @param {string} str The input alphabetic string to convert. Case-insensitive.
 * @returns {number} The calculated zero-based serial number.
 */
function en2sn(str) {
  let len = str.length;
  let sn = 0;
  str = str.toLowerCase();

  for (let i = 0; i < len; i += 1) {
    let pow = len - i - 1;
    // charCode 'a' is 97
    let num = str.charCodeAt(i) - 96;

    sn += Math.pow(26, pow) * num;
    //console.log(pow, num, sn)
  }
  // Start from 0
  return sn - 1;
}

/**
 * Converts a zero-based serial number to a single alphabetic character.
 * For example, 0 will be converted to 'a' (or 'A'), 1 to 'b' (or 'B'), etc. This function only handles single characters (0-25).
 * @param {number} num The zero-based serial number to convert (e.g., 0 for 'a', 1 for 'b').
 * @param {boolean} [upperCase=false] Optional. If true, the output character will be uppercase. Defaults to false (lowercase).
 * @returns {string} The corresponding alphabetic character.
 */
function sn2en(num, upperCase) {
  // charCode 'a' is 97
  let str = String.fromCharCode(97 + num);
  return (upperCase === true) ? str.toUpperCase() : str;
}

module.exports = {
  removeSpace, removeCharacter,
  convertBoolString,
  checkNull,
  splitByComma, splitByColon, splitBySemicolon,
  string2Number,
  en2sn, sn2en
};
// TODO: 嘗試生成測試檔
function testConvertCharacter2SN() {
  console.log('a', en2sn('a')); //0
  console.log('j', en2sn('j')); //9
  console.log('z', en2sn('z')); //25
  console.log('AA', en2sn('AA')); //26
  console.log('az', en2sn('az')); //51
  console.log('BA', en2sn('BA')); //52
  console.log('Bk', en2sn('Bk')); //62
  console.log('zz', en2sn('zz')); //701
  console.log('AAA', en2sn('AAA')); //702
}
//testConvertCharacter2SN();