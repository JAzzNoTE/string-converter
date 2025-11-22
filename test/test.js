const { en2sn, sn2en } = require('string-converter');

function testString2Number() {
  const assert = require('assert');
  const { string2Number } = require('../index'); // Assuming test is in a 'test' folder

  // Test case 1: Simple integer string
  assert.strictEqual(string2Number('123'), 123, "Test Case 1 Failed: Simple integer");

  // Test case 2: String with commas
  assert.strictEqual(string2Number('1,234,567'), 1234567, "Test Case 2 Failed: String with commas");

  // Test case 3: String with decimal and commas
  assert.strictEqual(string2Number('1,234.56'), 1234.56, "Test Case 3 Failed: Decimal with commas");

  // Test case 4: Accounting-style negative number
  assert.strictEqual(string2Number('(987)'), -987, "Test Case 4 Failed: Accounting-style negative");

  // Test case 5: Accounting-style negative decimal
  assert.strictEqual(string2Number('(987.65)'), -987.65, "Test Case 5 Failed: Accounting-style negative decimal");

  // Test case 6: Standard negative number
  assert.strictEqual(string2Number('-123.45'), -123.45, "Test Case 6 Failed: Standard negative");

  // Test case 7: Non-numeric string
  assert.ok(isNaN(string2Number('abc')), "Test Case 7 Failed: Non-numeric string should return NaN");

  console.log('All string2Number tests passed!');
}

function testRemoveCharacter() {
  const assert = require('assert');
  const { removeCharacter } = require('../index');

  // Test case 1: Remove a character that exists
  assert.strictEqual(removeCharacter('hello world', 'l'), 'heo word', "Test Case 1 Failed: Remove 'l'");

  // Test case 2: Remove a character that appears multiple times
  assert.strictEqual(removeCharacter('banana', 'a'), 'bnn', "Test Case 2 Failed: Remove multiple 'a's");

  // Test case 3: Remove a character that does not exist
  assert.strictEqual(removeCharacter('hello', 'z'), 'hello', "Test Case 3 Failed: Remove non-existent 'z'");

  // Test case 4: Remove a space character
  assert.strictEqual(removeCharacter('hello world', ' '), 'helloworld', "Test Case 4 Failed: Remove space");

  // Test case 5: Empty string input
  assert.strictEqual(removeCharacter('', 'a'), '', "Test Case 5 Failed: Empty string input");

  // Test case 6: Non-string input
  assert.strictEqual(removeCharacter(123, '1'), 123, "Test Case 6 Failed: Non-string input");

  console.log('All removeCharacter tests passed!');
}

function testConvertBoolString() {
  const assert = require('assert');
  const { convertBoolString } = require('../index');

  // Test cases for string to boolean conversion
  assert.strictEqual(convertBoolString('true'), true, "Test Case 1 Failed: 'true' string");
  assert.strictEqual(convertBoolString('TRUE'), true, "Test Case 2 Failed: 'TRUE' string (case-insensitive)");
  assert.strictEqual(convertBoolString('false'), false, "Test Case 3 Failed: 'false' string");
  assert.strictEqual(convertBoolString('FALSE'), false, "Test Case 4 Failed: 'FALSE' string (case-insensitive)");

  // Test cases for number to boolean conversion
  assert.strictEqual(convertBoolString(1), true, "Test Case 5 Failed: Positive number");
  assert.strictEqual(convertBoolString(100), true, "Test Case 6 Failed: Large positive number");
  assert.strictEqual(convertBoolString(0), false, "Test Case 7 Failed: Zero");
  assert.strictEqual(convertBoolString(-1), false, "Test Case 8 Failed: Negative number");

  // Test case for non-boolean string
  assert.strictEqual(convertBoolString('not a boolean'), 'not a boolean', "Test Case 9 Failed: Non-boolean string");

  console.log('All convertBoolString tests passed!');
}

function testConvertCharacter2SN() {
  const assert = require('assert');
  const { en2sn } = require('../index');

  assert.strictEqual(en2sn('a'), 0, "Test Case 1 Failed: 'a' -> 0");
  assert.strictEqual(en2sn('j'), 9, "Test Case 2 Failed: 'j' -> 9");
  assert.strictEqual(en2sn('z'), 25, "Test Case 3 Failed: 'z' -> 25");
  assert.strictEqual(en2sn('AA'), 26, "Test Case 4 Failed: 'AA' -> 26");
  assert.strictEqual(en2sn('az'), 51, "Test Case 5 Failed: 'az' -> 51 (case-insensitive)");
  assert.strictEqual(en2sn('BA'), 52, "Test Case 6 Failed: 'BA' -> 52 (case-insensitive)");
  assert.strictEqual(en2sn('Bk'), 62, "Test Case 7 Failed: 'Bk' -> 62 (case-insensitive)");
  assert.strictEqual(en2sn('zz'), 701, "Test Case 8 Failed: 'zz' -> 701");
  assert.strictEqual(en2sn('AAA'), 702, "Test Case 9 Failed: 'AAA' -> 702");

  console.log('All en2sn tests passed!');
}

function testConvertSN2Character() {
  console.log('0', sn2en(0)); //a
  console.log('9', sn2en(9)); //j
  console.log('25', sn2en(25)); //z
  console.log('26', sn2en(26)); //aa // TODO:
  console.log('51', sn2en(51)); //az // TODO:
  console.log('52', sn2en(52)); //ba // TODO:
  console.log('62', sn2en(62)); //bk // TODO:
  console.log('701', sn2en(701)); //zz // TODO:
  console.log('702', sn2en(702)); //aaa // TODO:
}

function testSplitByComma() {
  const assert = require('assert');
  const { splitByComma } = require('../index');

  // Test case 1: String with spaces around commas
  assert.deepStrictEqual(splitByComma('a, b, c'), ['a', 'b', 'c'], "Test Case 1 Failed: Spaces around commas");

  // Test case 2: String with no spaces around commas
  assert.deepStrictEqual(splitByComma('a,b,c'), ['a', 'b', 'c'], "Test Case 2 Failed: No spaces around commas");

  // Test case 3: String with varied spaces around commas
  assert.deepStrictEqual(splitByComma('a ,b,  c'), ['a', 'b', 'c'], "Test Case 3 Failed: Varied spaces around commas");

  // Test case 4: String with only commas
  assert.deepStrictEqual(splitByComma(', ,, '), [], "Test Case 4 Failed: String with only commas should return an empty array");

  // Test case 5: String with a leading comma
  assert.deepStrictEqual(splitByComma(',a,b,c'), ['a', 'b', 'c'], "Test Case 5 Failed: Leading comma should be handled");

  // Test case 6: String with a trailing comma
  assert.deepStrictEqual(splitByComma('a,b,c,'), ['a', 'b', 'c'], "Test Case 6 Failed: Trailing comma should be handled");

  // Test case 7: String with multiple consecutive commas
  assert.deepStrictEqual(splitByComma('a,,b,c'), ['a', 'b', 'c'], "Test Case 7 Failed: Multiple consecutive commas");

  // Test case 8: String with no commas
  assert.deepStrictEqual(splitByComma('abc'), ['abc'], "Test Case 8 Failed: String with no commas");

  // Test case 9: Empty string input
  assert.deepStrictEqual(splitByComma(''), [], "Test Case 9 Failed: Empty string input");

  // Test case 10: Mix of spaced and non-spaced commas
  assert.deepStrictEqual(splitByComma('a,b , c,d'), ['a', 'b', 'c', 'd'], "Test Case 10 Failed: Mix of spaced and non-spaced commas");

  console.log('All splitByComma tests passed!');
}

testString2Number();
testRemoveCharacter();
testConvertCharacter2SN();
//testConvertSN2Character();
testConvertBoolString();
testSplitByComma();
