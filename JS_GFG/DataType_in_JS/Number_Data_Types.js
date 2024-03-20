// // Integer and Floating-Point Numbers
// // ''''''''''''''''''''''''''''''''''''''''''''''''1.Number''''''''''''''''''''''''''''''''''''''''''''''''''''''
// // Integer numbers (whole numbers)
// let age = 30;
// let quantity = -10;
// let count = 0;

// // Performing arithmetic operations with integers
// let sum = age + quantity; // 20
// let product = age * 2;    // 60

// // Parsing integers from strings
// let strNumber = "42";
// let parsedNumber = parseInt(strNumber); // 42

// // ''''''''''''''''''''''''''''''''''''''''''''2.Floating-Point Numbers''''''''''''''''''''''''''''''''''''''''''''
// // Floating-point variables(Number with Decimal)
// let pi = 3.14159;
// let price = 19.99;
// let temperature = -5.5;

// // Floating-point arithmetic
// let circleArea = Math.PI * Math.pow(2, 2); // Calculate the area of a circle
// let totalCost = price * 5; // Calculate the total cost of 5 items

// // Parsing floating-point numbers from strings
// let strFloat = "3.14";
// let parsedFloat = parseFloat(strFloat); // 3.14


// let integerNumber = 5;
// let floatingPointNumber = 2.5;

// let result = integerNumber + floatingPointNumber; // 7.5

// // '''''''''''''''''''''''''''''''''''''''''''''Percision Limitation''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// let result = 0.1 + 0.2
// console.log(result); // Output may not be exactly 0.3 due to precision issues
// console.log(result == 0.3); // This comparison may not yield true due to precision limitations

// // Machine Epsilon and tolerance
// let a = 0.1
// let b = 0.2

// let sum = a + b;
// // Using Number.EPSILON for comparison a tolerance
// let tolerance = Number.EPSILON
// console.log("tolerance: " + tolerance);
// if (Math.abs(sum - 0.3) < tolerance) {
//     console.log("The Result is Approximately 0.3");
// } else {
//     console.log("The Result is not Approximately 0.3");
// }

// // '''''''''''''''''''''''''''''''''''''''''''Infinity and NaN''''''''''''''''''''''''''''''''''''''''''''''''''''''
// let positiveInfinity = 1 / 0
// console.log(positiveInfinity);  //output: Infinity

// let negativeInfinity = -1 / 0
// console.log(negativeInfinity); //output: -Infinity

// let notANumber = 0 / 0
// console.log(notANumber); //output: NaN
// console.log(isNaN(notANumber)); //output: true

// // '''''''''''''''''''''''''''''''''Number.MAX_VALUE ans Number.MIN_VALUE'''''''''''''''''''''''''''''''
// console.log(Number.MAX_VALUE); //output: 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); //output: 5e-324

// // '''''''''''''''''''''''''''''Arithematic Operation''''''''''''''''''''''''''''''''''''''''''''''''''''
// let num1 = 10;
// let num2 = 3;

// // Addition
// let sum = num1 + num2; // 13

// // Subtraction
// let difference = num1 - num2; // 7

// // Multiplication
// let product = num1 * num2; // 30

// // Division
// let quotient = num1 / num2; // 3.3333333333333335

// // Modulus (Remainder)
// let remainder = num1 % num2; // 1

// // Exponentiation (ES6)
// let exponentiation = num1 ** num2; // 1000

// // Increment and Decrement
// let count = 5;
// count++; // Increment by 1
// count--; // Decrement by 1

// // Assignment with Arithmetic Operators
// let total = 10;
// total += 5; // Add 5 to total
// total -= 3; // Subtract 3 from total
// total *= 2; // Multiply total by 2
// total /= 4; // Divide total by 4

// console.log("Addition:", sum);
// console.log("Subtraction:", difference);
// console.log("Multiplication:", product);
// console.log("Division:", quotient);
// console.log("Modulus:", remainder);
// console.log("Exponentiation:", exponentiation);
// console.log("Increment:", count);
// console.log("Total after Assignment Operations:", total);

// '''''''''''''''''''''''''''NaN (Not-a-Number)'''''''''''''''''''''''''''''''''
let result = 5 / 0;
console.log(result); // Infinity (not NaN in this case)

let result2 = Math.sqrt(-1);
console.log(result2); // NaN

let result3 = 10 + "apple";
console.log(result3); // 10apple
console.log(isNaN(result3)); // true

let value1 = NaN;
let value2 = "Hello";
console.log(isNaN(value1)); // true
console.log(isNaN(value2)); // true (because "Hello" can't be converted to a number)

let value3 = NaN;
let value4 = "Hello";
console.log(Number.isNaN(value3)); // true
console.log(Number.isNaN(value4)); // false

let userInput = "invalid input";
let parsedNumber = parseFloat(userInput);

if (Number.isNaN(parsedNumber)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  console.log(`Parsed number: ${parsedNumber}`);
}

let result4 = "Hello" * 5;
console.log(result4); // NaN

let nanValue = NaN;
console.log(nanValue === NaN); // false

let nanValue2 = NaN;
let convertedValue = Number(nanValue2);
console.log(convertedValue); // NaN

let notANumber = parseInt("abc");
console.log(notANumber); // NaN

// // ''''''''''''''''''''''''''''''''''''''''''''''Infinity and -Infinity'''''''''''''''''''''''''''''''''''''''''''''''''
// let positiveInfinity = 1 / 0;
// let negativeInfinity = -1 / 0;

// console.log("Positive Infinity:", positiveInfinity);
// console.log("Negative Infinity:", negativeInfinity);

// // NaN can result from operations involving Infinity
// let nanResult = Infinity / Infinity;
// console.log(nanResult); // NaN
// console.log(isNaN(nanResult)); // true

// // Infinity is greater than any finite number
// console.log("Is Infinity greater than 1000?", Infinity > 1000); // true

// // Negative Infinity is less than any finite number
// console.log("Is Negative Infinity less than -1000?", -Infinity < -1000); // true

// // You can perform arithmetic operations with Infinity
// console.log("Infinity + 5:", Infinity + 5); // Infinity
// console.log("Infinity * 10:", Infinity * 10); // Infinity
// console.log("Infinity / 2:", Infinity / 2); // Infinity

// // Similarly, for -Infinity
// console.log("-Infinity - 5:", -Infinity - 5); // -Infinity
// console.log("-Infinity * 10:", -Infinity * 10); // -Infinity
// console.log("-Infinity / 2:", -Infinity / 2); // -Infinity

// // NaN can result from operations involving Infinity
// let nanResult2 = Infinity / Infinity;
// console.log(isNaN(nanResult2)); // true

// // '''''''''''''''''''''''''''''''''''Number.MAX_VALUE and Number.MIN_VALUE '''''''''''''''''''''''''''''''''''''
// // Display Number.MAX_VALUE and Number.MIN_VALUE
// console.log("Number.MAX_VALUE: " + Number.MAX_VALUE);
// console.log("Number.MIN_VALUE: " + Number.MIN_VALUE);

// // Check if Number.MAX_VALUE is finite
// console.log("Is Number.MAX_VALUE finite? " + isFinite(Number.MAX_VALUE));

// // Try to go beyond Number.MAX_VALUE
// let maxVal = Number.MAX_VALUE;
// let overflow = maxVal * 2;
// console.log("Attempting to go beyond Number.MAX_VALUE: " + overflow);

// // Try to go below Number.MIN_VALUE
// let minVal = Number.MIN_VALUE;
// let underflow = minVal / 2;
// console.log("Attempting to go below Number.MIN_VALUE: " + underflow);

// // Test the precision of Number.MAX_VALUE
// let precisionTest = maxVal + 1;
// console.log("Testing the precision of Number.MAX_VALUE: " + precisionTest);

// // Test the precision of Number.MIN_VALUE
// let smallestPositive = Number.MIN_VALUE;
// let precisionResult = smallestPositive / 2;
// console.log("Testing the precision of Number.MIN_VALUE: " + precisionResult);

// // Handling Number.POSITIVE_INFINITY and Number.NEGATIVE_INFINITY
// let positiveInfinity = 1 / 0;
// let negativeInfinity = -1 / 0;
// console.log("Positive Infinity: " + positiveInfinity);
// console.log("Negative Infinity: " + negativeInfinity);

// // Check if values are finite or infinite
// function checkFinity(value) {
//   if (isFinite(value)) {
//     return "Finite";
//   } else if (value === Infinity) {
//     return "Positive Infinity";
//   } else if (value === -Infinity) {
//     return "Negative Infinity";
//   } else {
//     return "NaN";
//   }
// }

// console.log("Is maxVal finite or infinite? " + checkFinity(maxVal));
// console.log("Is positiveInfinity finite or infinite? " + checkFinity(positiveInfinity));

// // Check if values are NaN
// function checkNaN(value) {
//   return isNaN(value) ? "NaN" : "Not NaN";
// }

// console.log("Is maxVal NaN? " + checkNaN(maxVal));
// console.log("Is overflow NaN? " + checkNaN(overflow));

// // Using Number.isFinite() to check if a number is finite
// console.log("Using Number.isFinite(maxVal): " + Number.isFinite(maxVal));
// console.log("Using Number.isFinite(positiveInfinity): " + Number.isFinite(positiveInfinity));

// // Using Number.isNaN() to check if a value is NaN
// console.log("Using Number.isNaN(maxVal): " + Number.isNaN(maxVal));
// console.log("Using Number.isNaN(overflow): " + Number.isNaN(overflow));

// // Negative zero
// let negativeZero = -0;
// console.log("Negative Zero: " + negativeZero);
// let divisionByZero = 10 / negativeZero;
// console.log("Dividing by Negative Zero: " + divisionByZero);

// // '''''''''''''''''''''''''''''''''''''''''''''''''''''Precision Loss in Operations'''''''''''''''''''''''''''''
// // Initialize variables
// let a = 0.1;
// let b = 0.2;
// let c = 0.3;

// // Calculate the result of addition
// let additionResult = a + b;
// console.log("Addition Result: " + additionResult);

// // Check for equality with a tolerance
// let tolerance = 1e-10;
// let isEqual = Math.abs(additionResult - c) < tolerance;
// console.log("Are a + b and c approximately equal? " + isEqual);

// // Calculate the result of subtraction
// let subtractionResult = c - b;
// console.log("Subtraction Result: " + subtractionResult);

// // Calculate the result of multiplication
// let multiplicationResult = a * b;
// console.log("Multiplication Result: " + multiplicationResult);

// // Calculate the result of division
// let divisionResult = a / b;
// console.log("Division Result: " + divisionResult);

// // Calculate the result of a complex expression
// let complexExpressionResult = ((a + b) * c - b) / a;
// console.log("Complex Expression Result: " + complexExpressionResult);

// // Precision loss due to cumulative addition
// let sum = 0;
// for (let i = 0; i < 10; i++) {
//   sum += 0.1;
// }
// console.log("Cumulative Addition Result: " + sum);

// // Precision loss due to cumulative subtraction
// let difference = 1.0;
// for (let i = 0; i < 10; i++) {
//   difference -= 0.1;
// }
// console.log("Cumulative Subtraction Result: " + difference);

// // Precision loss in large numbers
// let largeNumber = 1e20;
// let result1 = largeNumber + 1;
// let result2 = largeNumber + 1e-6;
// console.log("Large Number Result 1: " + result1);
// console.log("Large Number Result 2: " + result2);

// // ''''''''''''''''''''''''''''''Avoiding Floating-Point Issues''''''''''''''''''''''''''''''''''
// // Example 1: Using integer arithmetic for precise calculations
// let num1 = 1e17;
// let num2 = 1;
// let result1 = num1 + num2;
// console.log("Using integer arithmetic: " + result1);

// // Example 2: Rounding numbers to a specified precision
// let value = 0.1 + 0.2;
// let precision = 1e-10;
// let roundedValue = Math.round(value / precision) * precision;
// console.log("Rounded Value: " + roundedValue);

// // Example 3: Comparing numbers with a tolerance
// let a = 0.1;
// let b = 0.2;
// let c = 0.3;
// let tolerance = 1e-10;
// let isEqual = Math.abs(a + b - c) < tolerance;
// console.log("Are a + b and c approximately equal? " + isEqual);

// // Example 4: Using a dedicated library for high-precision calculations
// const { Decimal } = require("decimal.js");
// let decimalValue1 = new Decimal("0.1");
// let decimalValue2 = new Decimal("0.2");
// let decimalResult = decimalValue1.plus(decimalValue2);
// console.log("High-Precision Decimal Result: " + decimalResult.toString());

// // Example 5: Avoiding division by zero
// function safeDivision(a, b) {
//   if (b === 0) {
//     console.log("Division by zero is not allowed.");
//     return NaN;
//   }
//   return a / b;
// }
// let divisionResult = safeDivision(10, 0);
// console.log("Division Result: " + divisionResult);

// // Example 6: Using fixed-point arithmetic for currency calculations
// function calculateTotal(price, quantity) {
//   return price.times(quantity);
// }
// const price = new Decimal("0.1");
// const quantity = new Decimal("3");
// const total = calculateTotal(price, quantity);
// console.log("Total (Fixed-Point Arithmetic): " + total.toString());

// // Example 7: Handling very small and very large numbers
// let verySmallNumber = 1e-307;
// let veryLargeNumber = 1e308;
// console.log("Very Small Number: " + verySmallNumber);
// console.log("Very Large Number: " + veryLargeNumber);

// // Example 8: Avoiding precision loss in cumulative addition
// let cumulativeSum = new Decimal(0);
// for (let i = 0; i < 10; i++) {
//   cumulativeSum = cumulativeSum.plus(0.1);
// }
// console.log("Cumulative Addition Result: " + cumulativeSum.toString());

// // ''''''''''''''''''''''''''''''Type Conversion in Number Data Types''''''''''''''''''''''''''''''''
// // Implicit Type Conversion (Coercion)
// let numString = "42";
// let num = numString + 10;
// console.log("1.Implicit Type Conversion: " + num); // Result: "4210" (string concatenation)

// // Type Conversion with Math Functions
// let mathResult = Math.sqrt("25");
// console.log("2.Type Conversion with Math Function: " + mathResult); // Result: 5 (implicit conversion)

// // Type Conversion in Comparison
// let numValue = 42;
// let stringNum = "42";
// let isEqual = numValue == stringNum;
// console.log("3.ype Conversion in Comparison: " + isEqual); // Result: true (coercion)

// // Type Conversion in Template Literals
// let templateString = `The result is ${5 + "5"}`;
// console.log("4.Type Conversion in Template Literal: " + templateString); // Result: "The result is 55"

// // Type Conversion in Functions
// function addNumbers(a, b) {
//     return a + b;
//   }
//   let result = addNumbers("3", 4);
//   console.log("5.Type Conversion in Function: " + result); // Result: 7 (implicit conversion)

// // Type Conversion in Conditional Statements
// let truthyString = "true";
// if (truthyString) {
//   console.log("6.Truthy Value in Condition: " + truthyString);
// }

// // Type Conversion in Bitwise Operations (Automatic ToInt32)
// let bitwiseResult = "10" | 0;
// console.log("7.Type Conversion in Bitwise Operation: " + bitwiseResult); // Result: 10 (explicit conversion)

// // Type Conversion with isNaN() and Number.isNaN()
// let nanValue2 = "NaN";
// let nanCheck = isNaN(nanValue2);
// let strictNanCheck = Number.isNaN(nanValue2);
// console.log("8.isNaN(): " + nanCheck); // Result: true (coercion)
// console.log("8.Number.isNaN(): " + strictNanCheck); // Result: false (not a strict NaN)

// // Type Conversion in Array Operations
// let numArray = [1, 2, 3];
// let sumArray = numArray + 10;
// console.log("9.Type Conversion in Array Operation: " + sumArray); // Result: "1,2,310" (string concatenation)

// // Type Conversion in Object Properties
// let person = { age: "30" };
// let ageNumber = person.age - 10;
// console.log("10.Type Conversion in Object Property: " + ageNumber); // Result: 20 (implicit conversion)

// // '''''''''''''''''''''''''''''''''

// // Example 1: Converting a string to a number
// let strNumber = "42";
// let parsedNumber = parseInt(strNumber);
// console.log("1.String to Integer: " + parsedNumber);

// // Example 2: Converting a string to a floating-point number
// let strFloat = "3.14";
// let parsedNumber2 = parseInt(strFloat);
// let parsedFloat = parseFloat(strFloat);
// console.log("2.String to Number: " + parsedNumber2);
// console.log("2.String to Float: " + parsedFloat);

// // Example 3: Converting a string to a number using Number()
// let strValue = "123.45";
// let numberValue = Number(strValue);
// console.log("3.String to Number (Number()): " + numberValue);

// // Example 4: Converting a number to a string
// let numericValue = 42;
// let strFromNumber = numericValue.toString();
// console.log("4.Number to String (toString()): " + strFromNumber);

// // Example 5: Converting a number to a string using String()
// let strFromNumber2 = String(numericValue);
// console.log("5.Number to String (String()): " + strFromNumber2);

// // Example 6: Converting a number to a string with specified precision
// let pi = 3.14159265359;
// let strPi = pi.toFixed(2);
// console.log("6.Number to String with Precision: " + strPi);

// // Example 7: Using type coercion in string concatenation
// let age = 25;
// let message = "I am " + age + " years old.";
// console.log("7.message: "+message);

// // Example 8: Using the unary plus operator to convert a string to a number
// let strNum = "42";
// let convertedNum = +strNum;
// console.log("8.Unary Plus Operator: " + convertedNum);

// // Example 9: Converting a boolean to a number
// let boolValue = true;
// let numFromBool = +boolValue;
// console.log("9.Boolean to Number: " + numFromBool);

// // Example 10: Converting a null value to a number
// let nullValue = null;
// let numFromNull = +nullValue;
// console.log("10.Null to Number: " + numFromNull);

// // Example 11: Converting undefined to a number
// let undefinedValue = undefined;
// let numFromUndefined = +undefinedValue;
// console.log("11.Undefined to Number: " + numFromUndefined);

// // Example 12: Converting NaN to a number
// let nanValue = NaN;
// let numFromNaN = +nanValue;
// console.log("12.NaN to Number: " + numFromNaN);

// // Example 13: Converting an empty string to a number
// let emptyStr = "";
// let numFromEmptyStr = +emptyStr;
// console.log("13.Empty String to Number: " + numFromEmptyStr);

// // Example 14: Converting an array to a number
// let arrayValue = [1, 2, 3];
// let numFromArray = +arrayValue;
// console.log("14.Array to Number: " + numFromArray);

// // Example 15: Converting an object to a number
// let objValue = { key: "value" };
// let numFromObj = +objValue;
// console.log("15.Object to Number: " + numFromObj);

// // Example 16: Using parseInt() with a radix (base)
// let binaryValue = "1010";
// let decimalValue = parseInt(binaryValue, 2); // Parses binary as base 2
// console.log("16.Binary to Integer: " + decimalValue);

// // Example 17: Using parseFloat() with a string containing non-numeric characters
// let mixedValue = "42 years old";
// let parsedMixed = parseFloat(mixedValue);
// console.log("17.Parsing a Mixed String: " + parsedMixed);

// // Example 18: Using parseFloat() with a string containing only a decimal point
// let dotValue = ".";
// let parsedDot = parseFloat(dotValue);
// console.log("18.Parsing a String with Only a Dot: " + parsedDot);

// // '''''''''''''''''''''''''''''''''''''Number Properties''''''''''''''''''''''''''''''''''''
// // Example 1: Basic number properties
// let num1 = 42;
// console.log("Number: " + num1);
// console.log("Type of number: " + typeof num1);
// console.log("Is it NaN? " + isNaN(num1));
// console.log("Is it finite? " + isFinite(num1));
// console.log("Is it an integer? " + Number.isInteger(num1));
// console.log("Is it a safe integer? " + Number.isSafeInteger(num1));
// console.log("Maximum safe integer: " + Number.MAX_SAFE_INTEGER);
// console.log("Minimum safe integer: " + Number.MIN_SAFE_INTEGER);
// console.log("Positive Infinity: " + Number.POSITIVE_INFINITY);
// console.log("Negative Infinity: " + Number.NEGATIVE_INFINITY);

// // Example 2: Arithmetic operations
// let num2 = 10;
// let num3 = 5;
// console.log("Addition: " + (num2 + num3));
// console.log("Subtraction: " + (num2 - num3));
// console.log("Multiplication: " + (num2 * num3));
// console.log("Division: " + (num2 / num3));
// console.log("Modulus (Remainder): " + (num2 % num3));
// console.log("Exponentiation: " + (num2 ** num3));
// console.log("Increment: " + (++num2));
// console.log("Decrement: " + (--num3));

// // Example 3: Number methods
// let num4 = 3.14159;
// console.log("Absolute value: " + Math.abs(num4));
// console.log("Round to nearest integer: " + Math.round(num4));
// console.log("Ceil (Smallest integer greater than or equal to the number): " + Math.ceil(num4));
// console.log("Floor (Largest integer less than or equal to the number): " + Math.floor(num4));
// console.log("Truncate (Remove decimal part): " + Math.trunc(num4));
// console.log("Minimum of two numbers: " + Math.min(num2, num3));
// console.log("Maximum of two numbers: " + Math.max(num2, num3));
// console.log("Square root: " + Math.sqrt(num2));
// console.log("Cube root: " + Math.cbrt(num2));
// console.log("Random number between 0 and 1: " + Math.random());

// // Example 4: Rounding to a specified number of decimal places
// function roundToDecimalPlaces(number, decimalPlaces) {
//   const factor = 10 ** decimalPlaces;
//   return Math.round(number * factor) / factor;
// }

// let num5 = 3.14159;
// console.log("Rounded to 2 decimal places: " + roundToDecimalPlaces(num5, 2));

// // Example 5: Converting between degrees and radians
// function degreesToRadians(degrees) {
//   return degrees * (Math.PI / 180);
// }

// function radiansToDegrees(radians) {
//   return radians * (180 / Math.PI);
// }

// console.log("90 degrees in radians: " + degreesToRadians(90));
// console.log("PI/4 radians in degrees: " + radiansToDegrees(Math.PI / 4));

// // Example 6: Logarithmic functions
// console.log("Natural logarithm (base e) of 10: " + Math.log(10));
// console.log("Base 10 logarithm of 100: " + Math.log10(100));
// console.log("Base 2 logarithm of 8: " + Math.log2(8));

// // Example 7: Trigonometric functions
// console.log("Sine of 45 degrees: " + Math.sin(degreesToRadians(45)));
// console.log("Cosine of 60 degrees: " + Math.cos(degreesToRadians(60)));
// console.log("Tangent of 30 degrees: " + Math.tan(degreesToRadians(30)));
// console.log("Arcsine of 0.5: " + radiansToDegrees(Math.asin(0.5)));
// console.log("Arccosine of 0.86602540378: " + radiansToDegrees(Math.acos(0.86602540378)));
// console.log("Arctangent of 0.57735026919: " + radiansToDegrees(Math.atan(0.57735026919)));

// // Example 8: Hyperbolic functions
// console.log("Hyperbolic sine of 1: " + Math.sinh(1));
// console.log("Hyperbolic cosine of 2: " + Math.cosh(2));
// console.log("Hyperbolic tangent of 0.5: " + Math.tanh(0.5));

// // Example 9: Absolute value and sign
// console.log("Absolute value of -42: " + Math.abs(-42));
// console.log("Sign of -7: " + Math.sign(-7));
// console.log("Sign of 0: " + Math.sign(0));
// console.log("Sign of 42: " + Math.sign(42));

// // Example 10: Exponents and power
// console.log("e raised to the power of 2: " + Math.exp(2));
// console.log("2 raised to the power of 3: " + Math.pow(2, 3));

// // Example 11: Constants
// console.log("Value of PI: " + Math.PI);
// console.log("Value of Euler's number (e): " + Math.E);

// // Example 12: Number parsing and formatting
// console.log("Parsing '42' to a number: " + parseInt('42'));
// console.log("Parsing '3.14' to a float: " + parseFloat('3.14'));
// console.log("Formatting 12345.6789 to 2 decimal places: " + 12345.6789.toFixed(2));

// // Example 13: Checking for special values
// let specialValue1 = NaN;
// let specialValue2 = Infinity;
// let specialValue3 = -Infinity;
// console.log("Is specialValue1 NaN? " + isNaN(specialValue1));
// console.log("Is specialValue2 finite? " + isFinite(specialValue2));
// console.log("Is specialValue3 finite? " + isFinite(specialValue3));
// console.log("Is specialValue1 a number? " + Number.isNaN(specialValue1));
// console.log("Is specialValue2 a number? " + Number.isNaN(specialValue2));

// // Example 14: Precision and rounding issues
// let num6 = 0.1 + 0.2;
// console.log("0.1 + 0.2 = " + num6); // Note: May not be exactly 0.3 due to floating-point precision

// // Example 15: Converting numbers to strings
// let num7 = 42;
// let num8 = 3.14159;
// console.log("Number to string: " + num7.toString());
// console.log("Number to string with 2 decimal places: " + num8.toFixed(2));

// // Example 16: Checking if a value is an integer
// function isInteger(value) {
//   return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
// }

// console.log("Is 42 an integer? " + isInteger(42));
// console.log("Is 3.14 an integer? " + isInteger(3.14));

// // Example 17: Handling integer overflow
// let largeInt1 = 9007199254740991; // Maximum safe integer
// let largeInt2 = 9007199254740992; // One more than the maximum safe integer
// console.log("Large integer 1: " + largeInt1);
// console.log("Large integer 2: " + largeInt2);

// // Example 18: Handling NaN values
// let result1 = 42 / "foo"; // Produces NaN
// let result2 = Math.sqrt(-1); // Produces NaN
// console.log("Result 1: " + result1);
// console.log("Is Result 1 NaN? " + isNaN(result1));
// console.log("Result 2: " + result2);
// console.log("Is Result 2 NaN? " + isNaN(result2));

// // Example 19: Bitwise operations
// let num9 = 42;
// let num10 = 23;
// console.log("Bitwise AND: " + (num9 & num10));
// console.log("Bitwise OR: " + (num9 | num10));
// console.log("Bitwise XOR: " + (num9 ^ num10));
// console.log("Bitwise NOT: " + (~num9));
// console.log("Left shift by 1: " + (num9 << 1));
// console.log("Right shift by 1: " + (num9 >> 1));

// // Example 20: Number conversions
// let strNum = "42";
// console.log("String to number: " + Number(strNum));
// let boolNum = true;
// console.log("Boolean to number (true): " + Number(boolNum));
// console.log("Boolean to number (false): " + Number(false));

// // Example 21: Checking for floating-point equality with tolerance
// function areEqual(num1, num2, tolerance) {
//   return Math.abs(num1 - num2) < tolerance;
// }

// let num11 = 0.1 + 0.2;
// let num12 = 0.3;
// console.log("Are num11 and num12 equal (with tolerance)? " + areEqual(num11, num12, 0.0001));

// // Example 22: Finding the nearest integer greater than or equal to a number
// console.log("Ceil of 3.14: " + Math.ceil(3.14));
// console.log("Ceil of -3.14: " + Math.ceil(-3.14));

// // Example 23: Finding the nearest integer less than or equal to a number
// console.log("Floor of 3.14: " + Math.floor(3.14));
// console.log("Floor of -3.14: " + Math.floor(-3.14));

// // Example 24: Using toExponential for scientific notation
// let num13 = 123456789;
// console.log("In exponential notation: " + num13.toExponential());

// // Example 25: Using toPrecision for controlling the number of significant digits
// let num14 = 3.14159;
// console.log("With 2 significant digits: " + num14.toPrecision(2));

// // Example 26: Handling very large numbers
// let largeNum1 = 1e308; // 1 followed by 308 zeros
// let largeNum2 = 1e309; // 1 followed by 309 zeros (beyond the limits of precision)
// console.log("Large number 1: " + largeNum1);
// console.log("Large number 2: " + largeNum2);

// // Example 27: Checking if a number is positive, negative, or zero
// function checkNumberType(number) {
//   if (number > 0) {
//     return "Positive";
//   } else if (number < 0) {
//     return "Negative";
//   } else {
//     return "Zero";
//   }
// }

// console.log("Type of -5: " + checkNumberType(-5));
// console.log("Type of 0: " + checkNumberType(0));
// console.log("Type of 7: " + checkNumberType(7));

// // Example 28: Using the Number object to create numbers
// let num15 = new Number(42);
// console.log("Number created with Number object: " + num15);

// // Example 29: Generating random integers within a range
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log("Random integer between 1 and 10: " + getRandomInt(1, 10));

// // Example 30: Calculating the average of an array of numbers
// function calculateAverage(numbers) {
//   if (numbers.length === 0) {
//     return 0;
//   }
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum / numbers.length;
// }

// let numbersArray = [1, 2, 3, 4, 5];
// console.log("Average of numbersArray: " + calculateAverage(numbersArray));

// // Example 31: Converting between bases (decimal, binary, hexadecimal, octal)
// let decimalNum = 42;
// let binaryNum = decimalNum.toString(2);
// let hexadecimalNum = decimalNum.toString(16);
// let octalNum = decimalNum.toString(8);

// console.log("Decimal: " + decimalNum);
// console.log("Binary: " + binaryNum);
// console.log("Hexadecimal: " + hexadecimalNum);
// console.log("Octal: " + octalNum);

// // Example 32: Generating random floating-point numbers within a range
// function getRandomFloat(min, max) {
//   return Math.random() * (max - min) + min;
// }

// console.log("Random floating-point number between 0 and 1: " + getRandomFloat(0, 1));

// // Example 33: Finding the minimum and maximum values in an array
// function findMinAndMax(numbers) {
//   if (numbers.length === 0) {
//     return { min: undefined, max: undefined };
//   }
//   let min = numbers[0];
//   let max = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i];
//     }
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return { min, max };
// }

// let numbersArray2 = [10, 5, 8, 20, 3];
// let minAndMax = findMinAndMax(numbersArray2);
// console.log("Minimum value: " + minAndMax.min);
// console.log("Maximum value: " + minAndMax.max);

// // Example 34: Checking if a number is an odd or even
// function isEvenOrOdd(number) {
//   return number % 2 === 0 ? "Even" : "Odd";
// }

// console.log("Is 7 even or odd? " + isEvenOrOdd(7));
// console.log("Is 10 even or odd? " + isEvenOrOdd(10));

// // Example 35: Converting a number to a binary string
// let decimalNum2 = 42;
// let binaryStr = decimalNum2.toString(2);

// console.log("Binary string representation of " + decimalNum2 + ": " + binaryStr);

// // Example 36: Finding the factorial of a non-negative integer
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log("Factorial of 5: " + factorial(5));

// // Example 37: Converting a binary string to a decimal number
// let binaryStr2 = "101010";
// let decimalNum3 = parseInt(binaryStr2, 2);

// console.log("Decimal number representation of " + binaryStr2 + ": " + decimalNum3);

// // Example 38: Finding the greatest common divisor (GCD) of two numbers
// function gcd(a, b) {
//   if (b === 0) {
//     return a;
//   }
//   return gcd(b, a % b);
// }

// console.log("GCD of 48 and 18: " + gcd(48, 18));

// // Example 39: Finding the least common multiple (LCM) of two numbers
// function lcm(a, b) {
//   return (a * b) / gcd(a, b);
// }

// console.log("LCM of 4 and 6: " + lcm(4, 6));

// // Example 40: Checking if a number is a prime number
// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }
//   if (number <= 3) {
//     return true;
//   }
//   if (number % 2 === 0 || number % 3 === 0) {
//     return false;
//   }
//   let i = 5;
//   while (i * i <= number) {
//     if (number % i === 0 || number % (i + 2) === 0) {
//       return false;
//     }
//     i += 6;
//   }
//   return true;
// }

// console.log("Is 17 a prime number? " + isPrime(17));
// console.log("Is 10 a prime number? " + isPrime(10));

// // Example 41: Converting a decimal number to any base
// function decimalToBase(number, base) {
//   if (base < 2 || base > 36) {
//     return "Invalid base";
//   }
//   return number.toString(base);
// }

// console.log("Decimal to binary: " + decimalToBase(42, 2));
// console.log("Decimal to octal: " + decimalToBase(42, 8));
// console.log("Decimal to hexadecimal: " + decimalToBase(42, 16));

// // Example 42: Generating a range of numbers
// function range(start, end, step = 1) {
//   let result = [];
//   for (let i = start; i <= end; i += step) {
//     result.push(i);
//   }
//   return result;
// }

// console.log("Range from 1 to 10: " + range(1, 10));
// console.log("Range from 0 to 10 with step 2: " + range(0, 10, 2));

// // Example 43: Checking if a number is a perfect square
// function isPerfectSquare(number) {
//   return Math.sqrt(number) % 1 === 0;
// }

// console.log("Is 16 a perfect square? " + isPerfectSquare(16));
// console.log("Is 25 a perfect square? " + isPerfectSquare(25));
// console.log("Is 30 a perfect square? " + isPerfectSquare(30));

// // Example 44: Summing the digits of a number
// function sumDigits(number) {
//   let sum = 0;
//   while (number) {
//     sum += number % 10;
//     number = Math.floor(number / 10);
//   }
//   return sum;
// }

// console.log("Sum of digits in 12345: " + sumDigits(12345));

// // Example 45: Finding the square of a number
// function square(number) {
//   return number * number;
// }

// console.log("Square of 7: " + square(7));
// console.log("Square of -5: " + square(-5));

// // Example 46: Converting degrees to radians and vice versa
// function degreesToRadians2(degrees) {
//   return (degrees * Math.PI) / 180;
// }

// function radiansToDegrees2(radians) {
//   return (radians * 180) / Math.PI;
// }

// console.log("90 degrees in radians: " + degreesToRadians2(90));
// console.log("PI/4 radians in degrees: " + radiansToDegrees2(Math.PI / 4));

// // Example 47: Converting between radians and degrees for trigonometric functions
// let radiansValue = Math.PI / 3;
// let degreesValue = (radiansValue * 180) / Math.PI;
// console.log("Radians to degrees: " + degreesValue);

// // Example 48: Finding the nth Fibonacci number using recursion
// function fibonacciRecursive(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }

// console.log("Fibonacci sequence (first 10 numbers):");
// for (let i = 0; i < 10; i++) {
//   console.log(fibonacciRecursive(i));
// }

// // Example 49: Finding the nth Fibonacci number using iteration
// function fibonacciIterative(n) {
//   if (n <= 1) {
//     return n;
//   }
//   let fibPrev = 0;
//   let fibCurrent = 1;
//   for (let i = 2; i <= n; i++) {
//     let temp = fibCurrent;
//     fibCurrent = fibPrev + fibCurrent;
//     fibPrev = temp;
//   }
//   return fibCurrent;
// }

// console.log("Fibonacci sequence (first 10 numbers):");
// for (let i = 0; i < 10; i++) {
//   console.log(fibonacciIterative(i));
// }

// // Example 50: Finding the nth Fibonacci number using memoization
// function fibonacciMemoization(n, memo = {}) {
//   if (n in memo) {
//     return memo[n];
//   }
//   if (n <= 1) {
//     return n;
//   }
//   memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
//   return memo[n];
// }

// console.log("Fibonacci sequence (first 10 numbers):");
// for (let i = 0; i < 10; i++) {
//   console.log(fibonacciMemoization(i));
// }

// // Example 51: Finding the nth Fibonacci number using Binet's formula
// function fibonacciBinet(n) {
//   let phi = (1 + Math.sqrt(5)) / 2;
//   let psi = (1 - Math.sqrt(5)) / 2;
//   return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5));
// }

// console.log("Fibonacci sequence (first 10 numbers):");
// for (let i = 0; i < 10; i++) {
//   console.log(fibonacciBinet(i));
// }

// // Example 52: Finding the nth Fibonacci number using matrix exponentiation
// function matrixMultiply(a, b) {
//   let result = [];
//   for (let i = 0; i < a.length; i++) {
//     result[i] = [];
//     for (let j = 0; j < b[0].length; j++) {
//       let sum = 0;
//       for (let k = 0; k < a[0].length; k++) {
//         sum += a[i][k] * b[k][j];
//       }
//       result[i][j] = sum;
//     }
//   }
//   return result;
// }

// function matrixPower(matrix, n) {
//   let result = matrix;
//   for (let i = 1; i < n; i++) {
//     result = matrixMultiply(result, matrix);
//   }
//   return result;
// }

// function fibonacciMatrixExponentiation(n) {
//   if (n <= 1) {
//     return n;
//   }
//   let baseMatrix = [[1, 1], [1, 0]];
//   let resultMatrix = matrixPower(baseMatrix, n - 1);
//   return resultMatrix[0][0];
// }

// console.log("Fibonacci sequence (first 10 numbers):");
// for (let i = 0; i < 10; i++) {
//   console.log(fibonacciMatrixExponentiation(i));
// }

// // Example 53: Using the Number object to create numbers
// let num16 = new Number(42);
// console.log("Number created with Number object: " + num16);

// // Example 54: Generating random integers within a range
// function getRandomInt2(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log("Random integer between 1 and 10: " + getRandomInt2(1, 10));

// // Example 55: Calculating the average of an array of numbers
// function calculateAverage2(numbers) {
//   if (numbers.length === 0) {
//     return 0;
//   }
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum / numbers.length;
// }

// let numbersArray3 = [1, 2, 3, 4, 5];
// console.log("Average of numbersArray: " + calculateAverage2(numbersArray3));

// // Example 56: Converting between bases (decimal, binary, hexadecimal, octal)
// let decimalNum6 = 42;
// let binaryNum2 = decimalNum6.toString(2);
// let hexadecimalNum2 = decimalNum6.toString(16);
// let octalNum2 = decimalNum6.toString(8);

// console.log("Decimal: " + decimalNum3);
// console.log("Binary: " + binaryNum2);
// console.log("Hexadecimal: " + hexadecimalNum2);
// console.log("Octal: " + octalNum2);

// // Example 57: Generating random floating-point numbers within a range
// function getRandomFloat2(min, max) {
//   return Math.random() * (max - min) + min;
// }

// console.log("Random floating-point number between 0 and 1: " + getRandomFloat2(0, 1));

// // Example 58: Finding the minimum and maximum values in an array
// function findMinAndMax2(numbers) {
//   if (numbers.length === 0) {
//     return { min: undefined, max: undefined };
//   }
//   let min = numbers[0];
//   let max = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i];
//     }
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return { min, max };
// }

// let numbersArray4 = [10, 5, 8, 20, 3];
// let minAndMax2 = findMinAndMax2(numbersArray4);
// console.log("Minimum value: " + minAndMax2.min);
// console.log("Maximum value: " + minAndMax2.max);

// // Example 59: Checking if a number is an odd or even
// function isEvenOrOdd2(number) {
//   return number % 2 === 0 ? "Even" : "Odd";
// }

// console.log("Is 7 even or odd? " + isEvenOrOdd2(7));
// console.log("Is 10 even or odd? " + isEvenOrOdd2(10));

// // Example 60: Converting a number to a binary string
// let decimalNum4 = 42;
// let binaryStr3 = decimalNum4.toString(2);

// console.log("Binary string representation of " + decimalNum4 + ": " + binaryStr3);

// // Example 61: Finding the factorial of a non-negative integer
// function factorial2(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log("Factorial of 5: " + factorial2(5));

// // Example 62: Converting a binary string to a decimal number
// let binaryStr4 = "101010";
// let decimalNum5 = parseInt(binaryStr4, 2);

// console.log("Decimal number representation of " + binaryStr4 + ": " + decimalNum5);

// // Example 63: Finding the greatest common divisor (GCD) of two numbers
// function gcd2(a, b) {
//   if (b === 0) {
//     return a;
//   }
//   return gcd2(b, a % b);
// }

// console.log("GCD of 48 and 18: " + gcd2(48, 18));

// // Example 64: Finding the least common multiple (LCM) of two numbers
// function lcm2(a, b) {
//   return (a * b) / gcd2(a, b);
// }

// console.log("LCM of 4 and 6: " + lcm2(4, 6));

// // Example 65: Checking if a number is a prime number
// function isPrime2(number) {
//   if (number <= 1) {
//     return false;
//   }
//   if (number <= 3) {
//     return true;
//   }
//   if (number % 2 === 0 || number % 3 === 0) {
//     return false;
//   }
//   let i = 5;
//   while (i * i <= number) {
//     if (number % i === 0 || number % (i + 2) === 0) {
//       return false;
//     }
//     i += 6;
//   }
//   return true;
// }

// console.log("Is 17 a prime number? " + isPrime2(17));
// console.log("Is 10 a prime number? " + isPrime2(10));

// // Example 66: Converting a decimal number to any base
// function decimalToBase2(number, base) {
//   if (base < 2 || base > 36) {
//     return "Invalid base";
//   }
//   return number.toString(base);
// }

// console.log("Decimal to binary: " + decimalToBase2(42, 2));
// console.log("Decimal to octal: " + decimalToBase2(42, 8));
// console.log("Decimal to hexadecimal: " + decimalToBase2(42, 16));

// // Example 67: Generating a range of numbers
// function range2(start, end, step = 1) {
//   let result = [];
//   for (let i = start; i <= end; i += step) {
//     result.push(i);
//   }
//   return result;
// }

// console.log("Range from 1 to 10: " + range2(1, 10));
// console.log("Range from 0 to 10 with step 2: " + range2(0, 10, 2));

// // Example 68: Checking if a number is a perfect square
// function isPerfectSquare2(number) {
//   return Math.sqrt(number) % 1 === 0;
// }

// console.log("Is 16 a perfect square? " + isPerfectSquare2(16));
// console.log("Is 25 a perfect square? " + isPerfectSquare2(25));
// console.log("Is 30 a perfect square? " + isPerfectSquare2(30));

// // Example 69: Summing the digits of a number
// function sumDigits2(number) {
//   let sum = 0;
//   while (number) {
//     sum += number % 10;
//     number = Math.floor(number / 10);
//   }
//   return sum;
// }

// console.log("Sum of digits in 12345: " + sumDigits2(12345));

// // Example 70: Finding the square of a number
// function square2(number) {
//   return number * number;
// }

// console.log("Square of 7: " + square2(7));
// console.log("Square of -5: " + square2(-5));

// // Example 71: Converting degrees to radians and vice versa
// function degreesToRadians3(degrees) {
//   return (degrees * Math.PI) / 180;
// }

// function radiansToDegrees3(radians) {
//   return (radians * 180) / Math.PI;
// }

// console.log("90 degrees in radians: " + degreesToRadians3(90));
// console.log("PI/4 radians in degrees: " + radiansToDegrees3(Math.PI / 4));

// // Example 72: Converting between radians and degrees for trigonometric functions
// let radiansValue2 = Math.PI / 3;
// let degreesValue2 = (radiansValue2 * 180) / Math.PI;
// console.log("Radians to degrees: " + degreesValue2);

// // Example 73: Finding the nth Fibonacci number using recursion
// function fibonacciRecursive2(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacciRecursive2(n - 1) + fibonacciRecursive2(n - 2);
// }

// console.log("Fibonacci sequence (first 10 numbers):");
// for (let i = 0; i < 10; i++) {
//   console.log(fibonacciRecursive2(i));
// }

// // Example 74: Finding the nth Fibonacci number using iteration
// function fibonacciIterative2(n) {
//   if (n <= 1) {
//     return n;
//   }
//   let fibPrev = 0;
//   let fibCurrent = 1;
//   for (let i = 2; i <= n; i++) {
//     let temp = fibCurrent;
//     fibCurrent = fibPrev + fibCurrent;
//     fibPrev = temp;
//   }
//   return fibCurrent;
// }

// console.log("Fibonacci sequence (first 10 numbers):");
// for (let i = 0; i < 10; i++) {
//   console.log(fibonacciIterative2(i));
// }

// // Example 75: Finding the nth Fibonacci number using memoization
// function fibonacciMemoization2(n, memo = {}) {
//   if (n in memo) {
//     return memo[n];
//   }
//   if (n <= 1) {
//     return n;
//   }
//   memo[n] = fibonacciMemoization2(n - 1, memo) + fibonacciMemoization2(n - 2, memo);
//   return memo[n];
// }

// console.log("Fibonacci sequence (first 10 numbers):");
// for (let i = 0; i < 10; i++) {
//   console.log(fibonacciMemoization2(i));
// }

// // Example 76: Finding the nth Fibonacci number using Binet's formula
// function fibonacciBinet2(n) {
//   let phi = (1 + Math.sqrt(5)) / 2;
//   let psi = (1 - Math.sqrt(5)) / 2;
//   return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5));
// }

// console.log("Fibonacci sequence (first 10 numbers):");
// for (let i = 0; i < 10; i++) {
//   console.log(fibonacciBinet2(i));
// }

// // Example 77: Finding the nth Fibonacci number using matrix exponentiation
// function matrixMultiply2(a, b) {
//   let result = [];
//   for (let i = 0; i < a.length; i++) {
//     result[i] = [];
//     for (let j = 0; j < b[0].length; j++) {
//       let sum = 0;
//       for (let k = 0; k < a[0].length; k++) {
//         sum += a[i][k] * b[k][j];
//       }
//       result[i][j] = sum;
//     }
//   }
//   return result;
// }

// function matrixPower2(matrix, n) {
//   let result = matrix;
//   for (let i = 1; i < n; i++) {
//     result = matrixMultiply2(result, matrix);
//   }
//   return result;
// }

// function fibonacciMatrixExponentiation2(n) {
//   if (n <= 1) {
//     return n;
//   }
//   let baseMatrix = [[1, 1], [1, 0]];
//   let resultMatrix = matrixPower2(baseMatrix, n - 1);
//   return resultMatrix[0][0];
// }

// console.log("Fibonacci sequence (first 10 numbers):");
// for (let i = 0; i < 10; i++) {
//   console.log(fibonacciMatrixExponentiation2(i));
// }

// // Example 78: Using the Number object to create numbers
// let num17 = new Number(42);
// console.log("Number created with Number object: " + num17);

// // Example 79: Generating random integers within a range
// function getRandomInt3(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log("Random integer between 1 and 10: " + getRandomInt3(1, 10));

// // Example 80: Calculating the average of an array of numbers
// function calculateAverage3(numbers) {
//   if (numbers.length === 0) {
//     return 0;
//   }
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//   }
//   let Average3 = sum / numbers.length;
//   console.log("Average: " + Average3);
// }

// // '''''''''''''''''''''''''''''''Arithmetic Operations'''''''''''''''''''''''''''''''''''''''
// // Addition
// function add(a, b) {
//     return a + b;
//   }
  
//   console.log("Addition: 3 + 4 = " + add(3, 4));
  
//   // Subtraction
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   console.log("Subtraction: 7 - 2 = " + subtract(7, 2));
  
//   // Multiplication
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   console.log("Multiplication: 5 * 6 = " + multiply(5, 6));
  
//   // Division
//   function divide(a, b) {
//     if (b === 0) {
//       return "Cannot divide by zero";
//     }
//     return a / b;
//   }
  
//   console.log("Division: 10 / 2 = " + divide(10, 2));
  
//   // Modulus (Remainder)
//   function modulus(a, b) {
//     if (b === 0) {
//       return "Cannot divide by zero";
//     }
//     return a % b;
//   }
  
//   console.log("Modulus (Remainder): 10 % 3 = " + modulus(10, 3));
  
//   // Increment
//   function increment(value) {
//     return value + 1;
//   }
  
//   console.log("Increment: 5 + 1 = " + increment(5));
  
//   // Decrement
//   function decrement(value) {
//     return value - 1;
//   }
  
//   console.log("Decrement: 8 - 1 = " + decrement(8));
  
//   // Exponentiation
//   function exponentiate(base, exponent) {
//     return Math.pow(base, exponent);
//   }
  
//   console.log("Exponentiation: 2 ^ 3 = " + exponentiate(2, 3));
  
//   // Square
//   function square(value) {
//     return Math.pow(value, 2);
//   }
  
//   console.log("Square: 4 ^ 2 = " + square(4));
  
//   // Square Root
//   function squareRoot(value) {
//     return Math.sqrt(value);
//   }
  
//   console.log("Square Root: √25 = " + squareRoot(25));
  
//   // Cube
//   function cube(value) {
//     return Math.pow(value, 3);
//   }
  
//   console.log("Cube: 3 ^ 3 = " + cube(3));
  
//   // Cube Root
//   function cubeRoot(value) {
//     return Math.cbrt(value);
//   }
  
//   console.log("Cube Root: ∛8 = " + cubeRoot(8));
  
//   // Absolute Value
//   function absoluteValue(value) {
//     return Math.abs(value);
//   }
  
//   console.log("Absolute Value: |-7| = " + absoluteValue(-7));
  
//   // Maximum of Two Numbers
//   function maxOfTwo(a, b) {
//     return Math.max(a, b);
//   }
  
//   console.log("Maximum of 9 and 11: " + maxOfTwo(9, 11));
  
//   // Minimum of Two Numbers
//   function minOfTwo(a, b) {
//     return Math.min(a, b);
//   }
  
//   console.log("Minimum of 8 and 6: " + minOfTwo(8, 6));
  
//   // Rounding to Nearest Integer
//   function roundToNearestInteger(value) {
//     return Math.round(value);
//   }
  
//   console.log("Round to Nearest Integer: 3.6 = " + roundToNearestInteger(3.6));
  
//   // Rounding Down to Nearest Integer
//   function roundDownToInteger(value) {
//     return Math.floor(value);
//   }
  
//   console.log("Round Down to Nearest Integer: 4.9 = " + roundDownToInteger(4.9));
  
//   // Rounding Up to Nearest Integer
//   function roundUpToInteger(value) {
//     return Math.ceil(value);
//   }
  
//   console.log("Round Up to Nearest Integer: 3.2 = " + roundUpToInteger(3.2));
  
//   // Truncating Decimal Part
//   function truncateDecimalPart(value) {
//     return Math.trunc(value);
//   }
  
//   console.log("Truncate Decimal Part: 5.7 = " + truncateDecimalPart(5.7));
  
//   // Getting the Sign
//   function getSign(value) {
//     return Math.sign(value);
//   }
  
//   console.log("Sign of -42: " + getSign(-42));
  
//   // Absolute Difference
//   function absoluteDifference(a, b) {
//     return Math.abs(a - b);
//   }
  
//   console.log("Absolute Difference between 5 and 8: " + absoluteDifference(5, 8));
  
// // ''''''''''''''''''''''''''''''''''''''''Number Methods'''''''''''''''''''''''''''''''
// let num = 42; // Sample number for demonstrations

// // 1. Number.toString(radix)
// let numStr = num.toString(); // Converts to string (base 10)
// let binaryStr = num.toString(2); // Converts to binary string

// // 2. parseInt(string, radix)
// let strToNum = parseInt("123"); // Parses to integer (base 10)
// let binaryStrToNum = parseInt("1010", 2); // Parses binary string to integer

// // 3. Decimal Part
// let decimalPart = num - Math.floor(num);

// // 4. Round to Decimal Place
// let roundedNum = Math.round(num * 10) / 10; // Rounds to one decimal place

// // 5. Math.floor()
// let floorNum = Math.floor(num); // Rounds down

// // 6. Math.ceil()
// let ceilNum = Math.ceil(num); // Rounds up

// // 7. Math.trunc()
// let truncNum = Math.trunc(num); // Removes decimal part

// // 8. Math.abs()
// let absNum = Math.abs(num); // Absolute value

// // 9. Math.max()
// let maxNum = Math.max(5, 7); // Maximum of two numbers

// // 10. Math.min()
// let minNum = Math.min(8, 4); // Minimum of two numbers

// // 11. Math.sin()
// let sinValue = Math.sin(Math.PI / 6); // Sine of an angle

// // 12. Math.cos()
// let cosValue = Math.cos(Math.PI / 6); // Cosine of an angle

// // 13. Math.tan()
// let tanValue = Math.tan(Math.PI / 6); // Tangent of an angle

// // 14. Math.asin()
// let asinValue = Math.asin(0.5); // Arcsine of a value

// // 15. Math.acos()
// let acosValue = Math.acos(0.5); // Arccosine of a value

// // 16. Math.atan()
// let atanValue = Math.atan(1); // Arctangent of a value

// // 17. Math.sinh()
// let sinhValue = Math.sinh(2); // Hyperbolic sine

// // 18. Math.cosh()
// let coshValue = Math.cosh(2); // Hyperbolic cosine

// // 19. Math.tanh()
// let tanhValue = Math.tanh(2); // Hyperbolic tangent

// // 20. Math.log()
// let logEValue = Math.log(Math.E); // Natural logarithm (base e)

// // 21. Math.log10()
// let log10Value = Math.log10(100); // Base 10 logarithm

// // 22. Math.exp()
// let expValue = Math.exp(2); // Exponential value (e^2)

// // 23. Math.ceil()
// let ceilValue = Math.ceil(4.3); // Rounds up

// // 24. Math.floor()
// let floorValue = Math.floor(4.7); // Rounds down

// // 25. Math.trunc()
// let truncValue = Math.trunc(4.9); // Removes decimal part

// // 26. Math.abs()
// let absValue = Math.abs(-7); // Absolute value

// // 27. Math.max()
// let maxValue = Math.max(9, 11); // Maximum of two numbers

// // 28. Math.min()
// let minValue = Math.min(8, 6); // Minimum of two numbers

// // 29. isNaN()
// let isNaNValue = isNaN("abc"); // Checks if value is NaN

// // 30. isFinite()
// let isFiniteValue = isFinite(42); // Checks if number is finite

// // 31. Number.isInteger()
// let isIntegerValue = Number.isInteger(5.25); // Checks if value is an integer

// // 32. Number.isSafeInteger()
// let isSafeIntValue = Number.isSafeInteger(9007199254740992); // Checks if value is a safe integer

// // 33. Converting Degrees to Radians
// function degreesToRadians(degrees) {
//   return (degrees * Math.PI) / 180;
// }
// let radiansValue = degreesToRadians(90); // Converts 90 degrees to radians

// // 34. Converting Radians to Degrees
// function radiansToDegrees(radians) {
//   return (radians * 180) / Math.PI;
// }
// let degreesValue = radiansToDegrees(Math.PI / 4); // Converts π/4 radians to degrees

// // 35. Calculating nth Fibonacci Number (Using Binet's Formula)
// function fibonacciBinet(n) {
//   let phi = (1 + Math.sqrt(5)) / 2;
//   let psi = (1 - Math.sqrt(5)) / 2;
//   return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5));
// }
// let fibonacciValue = fibonacciBinet(5); // Calculates the 5th Fibonacci number

// // '''''''''''''''''''''''''''''''All Functions for Number Data Types'''''''''''''''''''''''''''''''
// // 1. Convert Number to String with Optional Radix
// function numberToString(num, radix = 10) {
//     return num.toString(radix);
//   }
  
//   // 2. Parse String to Integer with Optional Radix
//   function parseIntWithRadix(str, radix = 10) {
//     return parseInt(str, radix);
//   }
  
//   // 3. Get Decimal Part of a Number
//   function getDecimalPart(num) {
//     return num - Math.floor(num);
//   }
  
//   // 4. Round Number to a Specific Decimal Place
//   function roundToDecimalPlace(num, decimalPlaces) {
//     const multiplier = Math.pow(10, decimalPlaces);
//     return Math.round(num * multiplier) / multiplier;
//   }
  
//   // 5. Floor a Number
//   function floorNumber(num) {
//     return Math.floor(num);
//   }
  
//   // 6. Ceil a Number
//   function ceilNumber(num) {
//     return Math.ceil(num);
//   }
  
//   // 7. Truncate Decimal Part of a Number
//   function truncateDecimal(num) {
//     return Math.trunc(num);
//   }
  
//   // 8. Get Absolute Value of a Number
//   function absoluteValue(num) {
//     return Math.abs(num);
//   }
  
//   // 9. Find Maximum of Two Numbers
//   function findMax(num1, num2) {
//     return Math.max(num1, num2);
//   }
  
//   // 10. Find Minimum of Two Numbers
//   function findMin(num1, num2) {
//     return Math.min(num1, num2);
//   }
  
//   // 11. Calculate Sine of an Angle in Radians
//   function sineOfAngle(angleInRadians) {
//     return Math.sin(angleInRadians);
//   }
  
//   // 12. Calculate Cosine of an Angle in Radians
//   function cosineOfAngle(angleInRadians) {
//     return Math.cos(angleInRadians);
//   }
  
//   // 13. Calculate Tangent of an Angle in Radians
//   function tangentOfAngle(angleInRadians) {
//     return Math.tan(angleInRadians);
//   }
  
//   // 14. Calculate Arcsine (Inverse Sine) of a Value
//   function arcsineOfValue(value) {
//     return Math.asin(value);
//   }
  
//   // 15. Calculate Arccosine (Inverse Cosine) of a Value
//   function arccosineOfValue(value) {
//     return Math.acos(value);
//   }
  
//   // 16. Calculate Arctangent (Inverse Tangent) of a Value
//   function arctangentOfValue(value) {
//     return Math.atan(value);
//   }
  
//   // 17. Calculate Hyperbolic Sine of a Value
//   function hyperbolicSine(value) {
//     return Math.sinh(value);
//   }
  
//   // 18. Calculate Hyperbolic Cosine of a Value
//   function hyperbolicCosine(value) {
//     return Math.cosh(value);
//   }
  
//   // 19. Calculate Hyperbolic Tangent of a Value
//   function hyperbolicTangent(value) {
//     return Math.tanh(value);
//   }
  
//   // 20. Calculate Natural Logarithm (Base e) of a Number
//   function naturalLogarithm(num) {
//     return Math.log(num);
//   }
  
//   // 21. Calculate Base 10 Logarithm of a Number
//   function base10Logarithm(num) {
//     return Math.log10(num);
//   }
  
//   // 22. Calculate Exponential (e^x) of a Value
//   function exponentialValue(value) {
//     return Math.exp(value);
//   }
  
//   // 23. Check if a Number is an Integer
//   function isInteger(num) {
//     return Number.isInteger(num);
//   }
  
//   // 24. Check if a Number is a Safe Integer
//   function isSafeInteger(num) {
//     return Number.isSafeInteger(num);
//   }
  
//   // 25. Convert Degrees to Radians
//   function degreesToRadians(degrees) {
//     return (degrees * Math.PI) / 180;
//   }
  
//   // 26. Convert Radians to Degrees
//   function radiansToDegrees(radians) {
//     return (radians * 180) / Math.PI;
//   }
  
//   // 27. Calculate nth Fibonacci Number (Using Binet's Formula)
//   function nthFibonacci(n) {
//     const phi = (1 + Math.sqrt(5)) / 2;
//     const psi = (1 - Math.sqrt(5)) / 2;
//     return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5));
//   }
  
//   // Usage examples:
//   console.log(numberToString(42)); // "42"
//   console.log(parseIntWithRadix("1010", 2)); // 10
//   console.log(getDecimalPart(7.8)); // 0.8
//   console.log(roundToDecimalPlace(3.456, 1)); // 3.5
//   console.log(floorNumber(8.7)); // 8
//   console.log(ceilNumber(6.2)); // 7
//   console.log(truncateDecimal(9.999)); // 9
//   console.log(absoluteValue(-42)); // 42
//   console.log(findMax(5, 7)); // 7
//   console.log(findMin(8, 4)); // 4
//   console.log(sineOfAngle(Math.PI / 6)); // 0.5
//   console.log(cosineOfAngle(Math.PI / 6)); // 0.866
//   console.log(tangentOfAngle(Math.PI / 6)); // 0.577
//   console.log(arcsineOfValue(0.5)); // 0.523
//   console.log(arccosineOfValue(0.5)); // 1.047
//   console.log(arctangentOfValue(1)); // 0.785
//   console.log(hyperbolicSine(2)); // 3.627
//   console.log(hyperbolicCosine(2)); // 3.762
//   console.log(hyperbolicTangent(2)); // 0.964
//   console.log(naturalLogarithm(Math.E)); // 1
//   console.log(base10Logarithm(100)); // 2
//   console.log(exponentialValue(2)); // 7.389
//   console.log(isInteger(5.25)); // false
//   console.log(isSafeInteger(9007199254740992)); // false
//   console.log(degreesToRadians(90)); // 1.5707
//   console.log(radiansToDegrees(Math.PI / 4)); // 45
//   console.log(nthFibonacci(5)); // 5

// // '''''''''''''''''''''''''''''''''''''''''''''''''''''Math Objets'''''''''''''''''''''''''''''''''''''''''''''''''''''''
// // Properties
// console.log("Properties:");
// console.log("Math.E:", Math.E);
// console.log("Math.PI:", Math.PI);
// console.log("Math.LN2:", Math.LN2);
// console.log("Math.LN10:", Math.LN10);
// console.log("Math.LOG2E:", Math.LOG2E);
// console.log("Math.LOG10E:", Math.LOG10E);
// console.log("Math.SQRT2:", Math.SQRT2);
// console.log("Math.SQRT1_2:", Math.SQRT1_2);

// // Methods
// console.log("\nMethods:");
// // Absolute value
// console.log("Math.abs(-5):", Math.abs(-5));

// // Arccosine (inverse cosine)
// console.log("Math.acos(0.5):", Math.acos(0.5));

// // Hyperbolic arccosine
// console.log("Math.acosh(2):", Math.acosh(2));

// // Arcsine (inverse sine)
// console.log("Math.asin(0.5):", Math.asin(0.5));

// // Hyperbolic arcsine
// console.log("Math.asinh(2):", Math.asinh(2));

// // Arctangent (inverse tangent)
// console.log("Math.atan(1):", Math.atan(1));

// // Hyperbolic arctangent
// console.log("Math.atanh(0.5):", Math.atanh(0.5));

// // Arctangent of the quotient of its arguments
// console.log("Math.atan2(1, 2):", Math.atan2(1, 2));

// // Cube root
// console.log("Math.cbrt(8):", Math.cbrt(8));

// // Ceiling (smallest integer greater than or equal to a number)
// console.log("Math.ceil(4.3):", Math.ceil(4.3));

// // Number of leading zero bits in the 32-bit binary representation
// console.log("Math.clz32(5):", Math.clz32(5));

// // Cosine
// console.log("Math.cos(Math.PI):", Math.cos(Math.PI));

// // Hyperbolic cosine
// console.log("Math.cosh(1):", Math.cosh(1));

// // Exponential (e^x)
// console.log("Math.exp(1):", Math.exp(1));

// // Exponential minus 1 (e^x - 1)
// console.log("Math.expm1(1):", Math.expm1(1));

// // Floor (largest integer less than or equal to a number)
// console.log("Math.floor(4.7):", Math.floor(4.7));

// // Round to the nearest 32-bit single precision float
// console.log("Math.fround(1.23456789):", Math.fround(1.23456789));

// // Square root of the sum of squares of its arguments
// console.log("Math.hypot(3, 4):", Math.hypot(3, 4));

// // 32-bit integer multiplication of two numbers
// console.log("Math.imul(2, 3):", Math.imul(2, 3));

// // Natural logarithm (base E)
// console.log("Math.log(Math.E):", Math.log(Math.E));

// // Natural logarithm of 1 plus a number (base E)
// console.log("Math.log1p(1):", Math.log1p(1));

// // Base 10 logarithm
// console.log("Math.log10(100):", Math.log10(100));

// // Base 2 logarithm
// console.log("Math.log2(8):", Math.log2(8));

// // Maximum of two numbers
// console.log("Math.max(5, 7):", Math.max(5, 7));

// // Minimum of two numbers
// console.log("Math.min(8, 4):", Math.min(8, 4));

// // Power
// console.log("Math.pow(2, 3):", Math.pow(2, 3));

// // Pseudo-random number between 0 and 1
// console.log("Math.random():", Math.random());

// // Round to the nearest integer
// console.log("Math.round(4.3):", Math.round(4.3));

// // Sign of a number (1 for positive, -1 for negative, 0 for zero, NaN for NaN)
// console.log("Math.sign(-7):", Math.sign(-7));

// // Sine
// console.log("Math.sin(Math.PI / 6):", Math.sin(Math.PI / 6));

// // Hyperbolic sine
// console.log("Math.sinh(1):", Math.sinh(1));

// // Square root
// console.log("Math.sqrt(25):", Math.sqrt(25));

// // Tangent
// console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4));

// // Hyperbolic tangent
// console.log("Math.tanh(1):", Math.tanh(1));

// // Integer part of a number
// console.log("Math.trunc(4.9):", Math.trunc(4.9));

// // '''''''''''''''''''''''''''''''''''''''Number Formats''''''''''''''''''''''''''''''''''''''
// // Sample numbers for demonstration
// const number1 = 12345.6789;
// const number2 = 9876.54321;

// // Method 1: Using toFixed() to format with a fixed number of decimal places
// const formattedNumber1 = number1.toFixed(2); // 12345.68

// // Method 2: Using toPrecision() to format with a specified precision
// const formattedNumber2 = number2.toPrecision(5); // 9876.5

// // Method 3: Using toLocaleString() for localized formatting
// const formattedNumber3 = number1.toLocaleString(); // Formatted according to the user's locale , output: 12,345.679

// // Method 4: Using Intl.NumberFormat for more control over localization
// const formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   minimumFractionDigits: 2,
// });
// const formattedNumber4 = formatter.format(number2); // $9,876.54

// const formtter2 = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 2,
// });

// // Method 5: Custom function for specialized formatting (e.g., adding commas)
// // function addCommas(number) {
// //     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// // }
// function addCommas(number) {
//   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }
// const formattedNumber5 = addCommas(number1); // 12,345.6789

// // Method 6: Formatting as a percentage
// const formattedNumber6 = (number1 * 100).toFixed(2) + '%'; // 1234567.89%

// // Method 7: Formatting as scientific notation
// const formattedNumber7 = number2.toExponential(2); // 9.88e+03

// // Method 8: Formatting with custom precision and symbols
// function customFormat(number, decimalPlaces, symbol) {
//     const roundedNumber = number.toFixed(decimalPlaces);
//     return `${roundedNumber} ${symbol}`;
// }
// const formattedNumber8 = customFormat(number1, 3, 'USD'); // 12345.679 USD

// // Method 9: Formatting with optional sign and alignment
// // function formatWithSignAndAlignment(number, options) {
// //   const { showSign, alignRight } = options;
// //   const formattedNumber = number.toFixed(2);
// //   return (showSign && number >= 0 ? '+' : '') + formattedNumber.padStart(alignRight ? 10 : 12);
// // }

// function formatWithSignAndAlignment(number, option) {
//     const {showSign, alignRight} = option;
//     const formattedNumber = number.toFixed(2);
//     return (showSign && number >= 0 ? '+' : '') + formattedNumber.padStart(alignRight ? 10 : 12);
// }
// const formattedNumber9 = formatWithSignAndAlignment(number2, { showSign: true, alignRight: false });

// // Display the formatted numbers
// console.log("Method 1 (toFixed):", formattedNumber1);
// console.log("Method 2 (toPrecision):", formattedNumber2);
// console.log("Method 3 (toLocaleString):", formattedNumber3);
// console.log("Method 4 (Intl.NumberFormat):", formattedNumber4);
// console.log("Method 5 (Custom function):", formattedNumber5);
// console.log("Method 6 (Percentage):", formattedNumber6);
// console.log("Method 7 (Scientific Notation):", formattedNumber7);
// console.log("Method 8 (Custom Format):", formattedNumber8);
// console.log("Method 9 (Sign and Alignment):", formattedNumber9);

// // ''''''''''''''''''''''''''''''''''''''Equality and Comparison''''''''''''''''''''''''''''''''''''''''
// // Sample values for demonstration
// const num1 = 10;
// const num2 = 10;
// const str1 = 'Hello';
// const str2 = 'Hello';
// const obj1 = { id: 2 };
// const obj2 = { id: 2 };
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const bool1 = false;
// const bool2 = false;
// const nullValue = null;
// const undefinedValue = undefined;

// // Equality operators (loose equality)
// console.log('Equality Operators:');
// console.log('num1 == num2:', num1 == num2); // false
// console.log('str1 == str2:', str1 == str2); // false
// console.log('obj1 == obj2:', obj1 == obj2); // false
// console.log('arr1 == arr2:', arr1 == arr2); // false
// console.log('bool1 == bool2:', bool1 == bool2); // false
// console.log('null == undefined:', null == undefined); // true
// console.log('null == null:', null == null); // true
// console.log('undefined == undefined:', undefined == undefined); // true

// // Inequality operators (loose inequality)
// console.log('\nInequality Operators:');
// console.log('num1 != num2:', num1 != num2); // true
// console.log('str1 != str2:', str1 != str2); // true
// console.log('obj1 != obj2:', obj1 != obj2); // true
// console.log('arr1 != arr2:', arr1 != arr2); // true
// console.log('bool1 != bool2:', bool1 != bool2); // true
// console.log('null != undefined:', null != undefined); // false
// console.log('null != null:', null != null); // false
// console.log('undefined != undefined:', undefined != undefined); // false

// // Strict equality operators (identity)
// console.log('\nStrict Equality Operators:');
// console.log('num1 === num2:', num1 === num2); // false
// console.log('str1 === str2:', str1 === str2); // false
// console.log('obj1 === obj2:', obj1 === obj2); // false
// console.log('arr1 === arr2:', arr1 === arr2); // false
// console.log('bool1 === bool2:', bool1 === bool2); // false
// console.log('null === undefined:', null === undefined); // false
// console.log('null === null:', null === null); // true
// console.log('undefined === undefined:', undefined === undefined); // true

// // Strict inequality operators (non-identity)
// console.log('\nStrict Inequality Operators:');
// console.log('num1 !== num2:', num1 !== num2); // true
// console.log('str1 !== str2:', str1 !== str2); // true
// console.log('obj1 !== obj2:', obj1 !== obj2); // true
// console.log('arr1 !== arr2:', arr1 !== arr2); // true
// console.log('bool1 !== bool2:', bool1 !== bool2); // true
// console.log('null !== undefined:', null !== undefined); // true
// console.log('null !== null:', null !== null); // false
// console.log('undefined !== undefined:', undefined !== undefined); // false

// // Comparison operators
// console.log('\nComparison Operators:');
// console.log('num1 < num2:', num1 < num2); // true
// console.log('num1 > num2:', num1 > num2); // false
// console.log('num1 <= num2:', num1 <= num2); // true
// console.log('num1 >= num2:', num1 >= num2); // false

// // Type coercion in equality
// console.log('\nType Coercion in Equality:');
// console.log('5 == "5":', 5 == "5"); // true
// console.log('5 === "5":', 5 === "5"); // false
// console.log('true == 1:', true == 1); // true
// console.log('true === 1:', true === 1); // false
// console.log('null == undefined:', null == undefined); // true

// // Object comparison (references)
// console.log('\nObject Comparison (References):');
// console.log('obj1 == obj2:', obj1 == obj2); // false
// console.log('arr1 == arr2:', arr1 == arr2); // false

// // NaN comparison
// console.log('\nNaN Comparison:');
// console.log('NaN == NaN:', NaN == NaN); // false
// console.log('NaN != NaN:', NaN != NaN); // true
// console.log('isNaN(NaN):', isNaN(NaN)); // true
// console.log('isNaN("Hello"):', isNaN("Hello")); // true
// console.log('isNaN(123):', isNaN(123)); // false

// // Null and undefined comparison
// console.log('\nNull and Undefined Comparison:');
// console.log('null == undefined:', null == undefined); // true
// console.log('null === undefined:', null === undefined); // false

// // Ternary operator for conditional comparisons
// const result = num1 > num2 ? 'num1 is greater' : 'num2 is greater';
// console.log('\nTernary Operator for Conditional Comparisons:');
// console.log(result);

// // Logical operators for complex comparisons
// console.log('\nLogical Operators for Complex Comparisons:');
// console.log('num1 > 0 && num2 < 0:', num1 > 0 && num2 < 0); // false
// console.log('num1 > 0 || num2 < 0:', num1 > 0 || num2 < 0); // true

// // Coercion in comparisons
// console.log('\nCoercion in Comparisons:');
// console.log('1 == true:', 1 == true); // true
// console.log('1 === true:', 1 === true); // false
// console.log('0 == false:', 0 == false); // true
// console.log('0 === false:', 0 === false); // false
// console.log('"0" == false:', "0" == false); // true
// console.log('"0" === false:', "0" === false); // false
// console.log('"" == false:', "" == false); // true
// console.log('"" === false:', "" === false); // false

// // Nullish coalescing operator (??) for default values
// const value = nullValue ?? "Default Value123";
// console.log('\nNullish Coalescing Operator for Default Values:');
// console.log('value:', value); // "Default Value"

// // ''''''''''''
// function calculatePiDigit(n) {
//     const HEX_DIGITS = "0123456789ABCDEF";
//     let pi = 0n;
    
//     for (let k = 0; k <= n; k++) {
//         pi += (16n ** BigInt(-k)) * (
//             4n / (8n * BigInt(k) + 1n) -
//             2n / (8n * BigInt(k) + 4n) -
//             1n / (8n * BigInt(k) + 5n) -
//             1n / (8n * BigInt(k) + 6n)
//         );
//     }
    
//     pi = pi % (16n ** BigInt(n + 1));
    
//     const hexPi = pi.toString(16).toUpperCase();
//     return HEX_DIGITS.charAt(parseInt(hexPi.charAt(hexPi.length - 1), 16));
// }

// // Example usage to calculate the 100th hexadecimal digit of Pi:
// const nthDigit = 100;
// const piDigit = calculatePiDigit(nthDigit);
// console.log(`The ${nthDigit}-th digit of Pi is ${piDigit}`);
