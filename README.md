
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
```

# API Reference

Based on its usage in `csv2json.js`, the following functions are available:

### `removeSpace(str)`
Removes all whitespace characters from a string.

- **`str`** `{string}` - The input string.
- **Returns** `{string}` - The string with all spaces removed.

### `splitByComma(str)`
Splits a string by commas (`,`) into an array of substrings.

- **`str`** `{string}` - The string to split.
- **Returns** `{Array<string>}` - An array of strings.

### `splitBySemicolon(str)`
Splits a string by semicolons (`;`) into an array of substrings.

- **`str`** `{string}` - The string to split.
- **Returns** `{Array<string>}` - An array of strings.

### `convertBoolString(value)`
Converts a string representation of a boolean (e.g., "true", "false", "1", "0") into an actual boolean value.

- **`value`** `{string}` - The string to convert.
- **Returns** `{boolean}` - The resulting boolean value.

### `checkNull(value)`
Checks if a value is a string representation of `null` or is an empty string.

- **`value`** `{string}` - The value to check.
- **Returns** `{boolean}` - `true` if the value represents null, otherwise `false`.

### `string2Number(str)`
Converts a string into a number. It likely handles strings that may not be parsed correctly by `parseInt` or `parseFloat` directly.

- **`str`** `{string}` - The string to convert to a number.
- **Returns** `{number}` - The converted number.