// '''''''''''''''''''''''''''''''''''''''''''''''''''''''Type coercion'''''''''''''''''''''''''''''''''''''''''''''''''''''''
/**
Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). 
Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

*/
// // ''''''''''''''''''''''''''''''''''''''''''''1.Implict Conversion'''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// /*Rules of Implicit Type Coercion:
//     1.String and Number: When a string and a number are involved in an operation, the string is typically coerced to a number.
//     Example: '5' * 2 evaluates to 10.
//     2.Boolean and Non-Boolean: When a boolean and a non-boolean value are involved in an operation, the non-boolean value is coerced to a boolean.
//     Falsy values (e.g., 0, '', null, undefined, NaN) coerce to false, while all other values coerce to true.
//     3.Comparison: When comparing values using comparison operators (==, !=, <, >, <=, >=), JavaScript may perform type coercion to make the values comparable.
//  */

// let result =  9 + '5' // output: 95 as Number 9 is converted to a string '9'
// let sum = 9 + Number('5') 
// console.log(typeof result); // string
// console.log(result); // '95' as a string output 
// console.log(sum); // 14 as 5 is converted to a number 5























// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Number Formatting'''''''''''''''''''''''''''''''''''''''''''''
// Number Formatting Methods
let num = 123.1234567
// Number.toFixed() --> // output: 123.12 -> (method) Number.toFixed(fractionDigits?: number | undefined): string -- Returns a string representing a number in fixed-point notation. -- @param fractionDigits — Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
console.log(num.toFixed(2)); 

// Number.toExponential() --> (method) Number.toExponential(fractionDigits?: number | undefined): string -- Returns a string containing a number represented in exponential notation. -- @param fractionDigits — Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
console.log(num.toExponential(2)); // output: 1.23e+2
console.log(typeof num.toExponential(2)); // string

// Number.toPrecision() --> (method) Number.toPrecision(precision?: number | undefined): string -- Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits. -- @param precision — Number of significant digits. Must be in the range 1 - 21, inclusive.
console.log(num.toPrecision(2)); // 1.2e+2
console.log(num.toPrecision(5)); // 123.12
console.log(typeof num.toPrecision(5)); // string
 
// Number.toLocaleString()
console.log(num.toLocaleString('en-US', {style: 'currency', currency: 'USD'})); // $123.12

console.log(num.toString(16));

// Number.valueOf() --> (method) Number.valueOf(): number -- Returns the primitive value of the specified object.
console.log(num.valueOf()); // output : 123.12345

// Intl.NumberFormat.prototype.format()
