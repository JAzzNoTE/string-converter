
# string-converter

A lightweight and versatile JavaScript utility library for string manipulation and type conversion. This module provides a collection of simple functions to handle common data formatting tasks.

# Usage

```javascript
const Converter = require('string-converter');

// Example: Remove spaces from a string
const spacedString = "  hello world  ";
const noSpaces = Converter.removeSpace(spacedString);
console.log(noSpaces); // "helloworld"

// Example: Convert a comma-separated string to an array
const csv = "apple,banana,orange";
const fruits = Converter.splitByComma(csv);
console.log(fruits); // ["apple", "banana", "orange"]

// Example: Convert a string to a boolean
const boolStr = "true";
const myBool = Converter.convertBoolString(boolStr);
console.log(myBool); // true

// Example: Split a string by colons
const timeStr = "12:34:56";
const timeParts = Converter.splitByColon(timeStr);
console.log(timeParts); // ["12", "34", "56"]
```

# API Reference

Based on its usage in `csv2json.js`, the following functions are available:

### `removeSpace(str)`
Removes all whitespace characters from a string.

- **`str`** `{string}` - The input string.
- **Returns** `{string}` - The string with all spaces removed.

### `removeCharacter(str, char)`
Removes all occurrences of a specified character from a string.

- **`str`** `{string}` - The input string.
- **`char`** `{string}` - The character to remove.
- **Returns** `{string}` - The string with the specified character removed.

### `convertBoolString(value)`
Converts a string representation of a boolean (e.g., "true", "false", "1", "0") into an actual boolean value.

- **`value`** `{string}` - The string to convert.
- **Returns** `{boolean}` - The resulting boolean value.

### `checkNull(value)`
Checks if a value is a string representation of `null` or is an empty string.

- **`value`** `{string}` - The value to check.
- **Returns** `{boolean}` - `true` if the value represents null, otherwise `false`.

### `splitByComma(str)`
Splits a string by commas (`,`) into an array of substrings.

- **`str`** `{string}` - The string to split.
- **Returns** `{Array<string>}` - An array of strings.

### `splitByColon(str)`
Splits a string by colons (`:`) into an array of substrings.

- **`str`** `{string}` - The string to split.
- **Returns** `{Array<string>}` - An array of strings.

### `splitBySemicolon(str)`
Splits a string by semicolons (`;`) into an array of substrings.

- **`str`** `{string}` - The string to split.
- **Returns** `{Array<string>}` - An array of strings.

### `string2Number(str)`
Converts a string into a number. It likely handles strings that may not be parsed correctly by `parseInt` or `parseFloat` directly.

- **`str`** `{string}` - The string to convert to a number.
- **Returns** `{number}` - The converted number.

### `en2sn(str)`
Converts Excel column name to zero-based serial number.

- **`str`** `{string}` - The input string containing English characters.
- **Returns** `{string}` - The string with English characters converted to zero-based serial numbers.

### `sn2en(str)`
Converts a zero-based serial number to their corresponding English numerals.

- **`str`** `{string}` - The input string containing zero-based serial numbers.
- **Returns** `{string}` - The string with zero-based serial number converted to English characters.
