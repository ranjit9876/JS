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
// // '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// let age_1 = 18;
// let age_2 = 18;
// // let age_3 = age_1 + 5;
// var age_3 = new Number(age_1);

// console.log(age_1, age_2, age_3);
// console.table([age_1 , age_2, age_3]);
// console.log(age_1 == age_2); // true , compare only value, not address because address is not available in JS or not defined even if data type will change
// console.log(age_1 == age_3); // true , compare only value, not address because address is not available in JS or not defined even if data type will change

// // ''''''''''''''''''''''''
// // Integer Numbers (Whole Numbers)
// let age_1 = 18
// let age_2 = age_1 + "" // "18"
// let age_3 = age_1 + "123" //  "18123"

// console.log(typeof age_1); // number
// console.log(typeof age_2); // string
// console.log(123 == "123"); // true
// console.log(age_1 == age_2); // true (18 == "18")
// console.log(age_1 == age_3); // false (18 == "18123")

// // ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// // '''''''''''''''''''''''''''''''''''''''''''''''''''Number Literals'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// let integer = 42 // Decimal Integer Literals
// let float = 3.14 // Float - Point Literal
// let scientific = 6.022e23; // Float - Point Literals(Avogadro's Number: 6.022 * 10^23)
// let octal = 0o10; // (Octal Literals) Equivalent to 8 in decimal
// let Binary = 0b1010; // (Binary Literals)Equivalent to 10 in decimal 
// let Hexadecimal = 0xFF; // (Hexadecimal Literals)Equivalent to 255 in decimal

// // ''''''''''''''''''''''''''''''''''''''''''''''''''Special numeric values''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// // Infinity
// let positiveInfinity = Infinity;
// let negativeInfinity = -Infinity;

// console.log(positiveInfinity, negativeInfinity, - negativeInfinity);
// console.log(positiveInfinity > 0); // true
// console.log(negativeInfinity < 0); // true
// console.log(positiveInfinity * 10); // Infinity
// console.log(positiveInfinity * 0); // NaN
// console.log(negativeInfinity * 10); // -Infinity
// console.log(negativeInfinity * 0); // NaN
// console.log(positiveInfinity - negativeInfinity); // Infinity
// console.log(negativeInfinity - positiveInfinity); // -Infinity
// console.log(positiveInfinity - positiveInfinity); // NaN
// console.log(negativeInfinity - negativeInfinity); // NaN
// console.log((positiveInfinity - positiveInfinity) == NaN); // false

// // Zeroes
// let positiveZero = 0;
// let negativeZero = -0;
// console.log(positiveZero);
// console.log(negativeZero);
// console.log(-negativeZero);

// console.log(positiveZero == 0); // true
// console.log(negativeZero == -0); // true
// console.log(negativeZero == 0); // true

// // Check if a value is finite or infinite
// console.log(isFinite(123)); // true
// console.log(isFinite(Infinity)); // false
// console.log(isFinite(-Infinity)); // false

// function checkFinite(value) {
//     if (isFinite(value)) {
//         return value + " : This is finite.";
//     } else {
//         return value + " : This is not finite.";
//     }
// }

// console.log(checkFinite(123)); // 123 : This is finite.

// // ''''''''''''''''''''''''''''''''''''''''''''''''''''''''NaN(Not a Number)'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// let result = 5 / 0;
// console.log(result); // Infinity (not NaN in this case)

// let result2 = Math.sqrt(-1);
// console.log(result2); // NaN

// let result3 = 10 + "apple";
// console.log(result3); // 10apple
// console.log(isNaN(result3)); // true

// let value1 = NaN;
// // let value2 = "Hello";
// let value2 = "1234";
// console.log(value1, value2); // NaN, "1234"
// console.log(isNaN(value1)); // true
// console.log(isNaN("Hello")); // true (because "Hello" can't be converted to a number)
// console.log(isNaN(value2)); // false (because "1234" can be converted to a number)

// let value3 = NaN;
// let value4 = "Hello";
// console.log(Number.isNaN(value3)); // true
// console.log(Number.isNaN(value4)); // false

// // let userInput = "1234";
// let userInput = "Invalid Input";
// let parsedNumber = parseFloat(userInput);

// if (Number.isNaN(parsedNumber)) {
//   console.log("Invalid input. Please enter a valid number.");
// } else {
//   console.log(`Parsed number: ${parsedNumber}`);
// }

// let result4 = "Hello"  * 5; // NaN
// console.log(result4); // NaN

// let nanValue = NaN;
// console.log(nanValue === NaN); // false

// let nanValue2 = NaN;
// let convertedValue = Number(nanValue2);
// console.log(convertedValue); // NaN

// let notANumber = parseInt("abc");
// console.log(notANumber); // NaN


// '''''''''''''''// Check if a value is NaN
// console.log(isNaN(positiveInfinity - negativeInfinity)); // False
// console.log(isNaN(NaN)); // true

// function checkNaN(value) {
//     if (isNaN(value)) {
//         return "NaN";
//     } else {
//         return "Not NaN";
//     }
// }

// console.log(checkNaN(NaN)); // NaN
// console.log(checkNaN(Math.sqrt(-9))); //  NaN
// console.log(checkNaN(123 - 123)); // Not NaN
// console.log(checkNaN(123)); // Not NaN

// // Mathematical Function that return a NaN value
// console.log(Math.sqrt(-9)); // NaN
// console.log(Math.log(0)); // -Infinity

// console.log(1 / 0); // Infinity
// console.log(-1 / 0); // -Infinity
// console.log(1 / -0); // I-nfinity
// console.log(-1 / -0); // Infinity

// console.log(0 / 0); // NaN
// console.log(isNaN(0 / 0)); // true

// // NaN can result from operations involving Infinity
// console.log(Infinity / Infinity); // NaN
// console.log(Infinity / -Infinity); // NaN
// console.log(-Infinity / -Infinity); // NaN

// // '''''''''''''''''''''''''''''''''''''''''''''''''Number Operations''''''''''''''''''''''''''''''''''''''''''''''
// // Basic Arithmetic Operations
// let num1 = 42;
// let num2 = 7;

// let additionResult = num1 + num2;
// let subtractionResult = num1 - num2;
// let multiplicationResult = num1 * num2;
// let divisionResult = num1 / num2;
// let modulusResult = num1 % num2;

// console.log("Addition:", additionResult);
// console.log("Subtraction:", subtractionResult);
// console.log("Multiplication:", multiplicationResult);
// console.log("Division:", divisionResult);
// console.log("Modulus:", modulusResult);

// // Increment and Decrement
// let counter = 10;

// counter++;
// console.log("Incremented Counter:", counter);

// counter--;
// console.log("Decremented Counter:", counter);

// // Assignment Operations
// let total = 100;

// total += 20;
// console.log("Total after addition assignment:", total);

// total -= 10;
// console.log("Total after subtraction assignment:", total);

// total *= 2;
// console.log("Total after multiplication assignment:", total);

// total /= 4;
// console.log("Total after division assignment:", total);

// total %= 3;
// console.log("Total after modulus assignment:", total);

// // Comparison Operators
// let isEqual = num1 == num2;
// let isNotEqual = num1 != num2;
// let isStrictEqual = num1 === num2;
// let isStrictNotEqual = num1 !== num2;
// let isGreater = num1 > num2;
// let isLess = num1 < num2;
// let isGreaterOrEqual = num1 >= num2;
// let isLessOrEqual = num1 <= num2;

// console.log("Is Equal:", isEqual);
// console.log("Is Not Equal:", isNotEqual);
// console.log("Is Strict Equal:", isStrictEqual);
// console.log("Is Strict Not Equal:", isStrictNotEqual);
// console.log("Is Greater:", isGreater);
// console.log("Is Less:", isLess);
// console.log("Is Greater or Equal:", isGreaterOrEqual);
// console.log("Is Less or Equal:", isLessOrEqual);

// // Logical Operators
// let logicalAnd = true && false;
// let logicalOr = true || false;
// let logicalNot = !true;

// console.log("Logical AND:", logicalAnd);
// console.log("Logical OR:", logicalOr);
// console.log("Logical NOT:", logicalNot);

// // Bitwise Operators
// let bitwiseAnd = num1 & num2;
// let bitwiseOr = num1 | num2;
// let bitwiseXor = num1 ^ num2;
// let bitwiseNot = ~num1;
// let leftShift = num1 << 2;
// let rightShift = num1 >> 1;
// let zeroFillRightShift = num1 >>> 1;

// console.log("Bitwise AND:", bitwiseAnd);
// console.log("Bitwise OR:", bitwiseOr);
// console.log("Bitwise XOR:", bitwiseXor);
// console.log("Bitwise NOT:", bitwiseNot);
// console.log("Left Shift:", leftShift);
// console.log("Right Shift:", rightShift);
// console.log("Zero-fill Right Shift:", zeroFillRightShift);

// // ''''''''''''''''''''''''''''''''''''''''''''''''''' Mathematical Functions''''''''''''''''''''''''''''''''''''''''''''''''''''''
// // 1.Trigonometry Functions
// console.log(Math.floor(3.90)); // (method) Math.floor(x: number): number -- Returns the greatest integer less than or equal to its numeric argument.
// console.log(Math.ceil(3.01)); // Returns the smallest integer greater than or equal to its numeric argument.
// console.log(Math.round(3.49)); // (method) Math.round(x: number): number -- Returns a supplied numeric expression rounded to the nearest integer.
// console.log(Math.max(10, 6, 15, 12, 5)); // (method) Math.max(...values: number[]): number -- Returns the larger of a set of supplied numeric expressions.
// console.log(Math.min(10, 6, 15, 12, 5)); // (method) Math.min(...values: number[]): number -- Returns the smaller of a set of supplied numeric expressions.
// console.log(Math.abs(-5)); // (method) Math.abs(x: number): number
// console.log(Math.acos(1)); // (method) Math.acos(x: number): number -- Returns the arc cosine (or inverse cosine) of a number.
// console.log(Math.asin(1)); // (method) Math.asin(x: number): number -- Returns the arcsine of a number.
// console.log(Math.acosh(90)); // Returns the arcsine of a number. -- Returns the inverse hyperbolic cosine of a number.















// // ''''''''''''''''''''''''''''''''''''''''''''''''''''''''Math Objects'''''''''''''''''''''''''''''''''''''''''''''''''''''
// console.log(Math.E); // 2.718281828459045 -> (property) Math.E: number -- The mathematical constant e. This is Euler's number, the base of natural logarithms.
// console.log(Math.PI); // 3.141592653589793 -> (property) Math.PI: number -- Pi. This is the ratio of the circumference of a circle to its diameter.
// console.log(Math.SQRT2); // 1.4142135623730951-> (property) Math.SQRT2: number -- The square root of 2.
// console.log(Math.SQRT1_2); // 0.7071067811865476 -> (property) Math.SQRT1_2: number -- The square root of 0.5, or, equivalently, one divided by the square root of 2.
// console.log(Math.LN10); // 2.302585092994046 -> (property) Math.LN10: number -- The natural logarithm of 10.
// console.log(Math.LN2); // 0.6931471805599453 -> (property) Math.LN2: number -- The natural logarithm of 2.
// console.log(Math.LOG10E); // 0.4342944819032518 -> (property) Math.LOG10E: number -- The base-10 logarithm of e.
// console.log(Math.LOG2E); // 1.4426950408889634 -> (property) Math.LOG2E: number -- The base-2 logarithm of e.


// // '''''''''''''''''''''''''''''''''''''''''''''''''''Number Conversion'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// let decimal = 1234;

// console.log(decimal.toString(2)); // Decimal to Binary Conversion
// console.log(typeof decimal.toString(2) == "string"); // true
// console.log(typeof decimal.toString(2) === "string"); // true
// console.log(decimal.toString(8)); // Decimal to Octal Conversion
// console.log(decimal.toString(16).toUpperCase()); // Decimal to Hexadecimal Conversion

// let binary = "1010";
// /*
// parseInt() -> A value between 2 and 36 that specifies the base of the number in string. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.
//  */
// // Binary to Decimal
// console.log(parseInt(binary, 2)); // 10 -> function parseInt(string: string, radix?: number | undefined): number -- Converts a string to an integer.
// console.log(parseInt(binary,2).toString(8)); // Binary to Octal Conversion
// console.log(parseInt(binary,2).toString(16)); // Binary to Hexadecimal Conversion

// let Octal =  "52";
// console.log(parseInt(Octal, 8)); // Octal to Decimal Conversion

// let Hexadecimal = "2F"
// console.log(parseInt(Hexadecimal, 16)); // Hexadecimal to Decimal Conversion

// // String to Integer Conversion
// let str = "12345"
// console.log(parseInt(str)); // 12345

// // Integer to String
// let integer = 12345
// console.log(integer.toString()); // "12345"

// // String to Float Conversion
// console.log(parseFloat(str)); // 12345

// // Float to String Conversion
// let float = 12345.6
// console.log(float.toString()); // "12345.6"

// // '''''''''''''''''''''''''''''''''''''''''''Comparision of Number''''''''''''''''''''''''''''''''''''''''''''''''''
// // Comparison Operators
// let a = 5;
// let b = 10;

// // Equal to (==)
// console.log("Equal to (==):", a == b); // Returns false

// // Not equal to (!=)
// console.log("Not equal to (!=):", a != b); // Returns true

// // Strict equal to (===)
// console.log("Strict equal to (===):", a === b); // Returns false

// // Strict not equal to (!==)
// console.log("Strict not equal to (!==):", a !== b); // Returns true

// // Greater than (>)
// console.log("Greater than (>):", a > b); // Returns false

// // Greater than or equal to (>=)
// console.log("Greater than or equal to (>=):", a >= b); // Returns false

// // Less than (<)
// console.log("Less than (<):", a < b); // Returns true

// // Less than or equal to (<=)
// console.log("Less than or equal to (<=):", a <= b); // Returns true

// // NaN Comparison
// let nanValue = NaN;

// // NaN is not equal to anything, including itself
// console.log("NaN is equal to itself:", nanValue === nanValue); // Returns false
// console.log("NaN is not equal to itself (!==):", nanValue !== nanValue); // Returns true

// // NaN comparison using isNaN function
// console.log("NaN is NaN (using isNaN):", isNaN(nanValue)); // Returns true

// // Infinity Comparison
// let infinityValue = Infinity;

// // Infinity comparisons
// console.log("Infinity is greater than a:", infinityValue > a); // Returns true
// console.log("Infinity is less than a:", infinityValue < a); // Returns false

// // Negative Infinity Comparison
// let negativeInfinityValue = -Infinity;

// // Negative Infinity comparisons
// console.log("Negative Infinity is less than a:", negativeInfinityValue < a); // Returns true
// console.log("Negative Infinity is greater than a:", negativeInfinityValue > a); // Returns false

// ''''''''''''''''''''''''''''''''''Comparision of Numbers'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
