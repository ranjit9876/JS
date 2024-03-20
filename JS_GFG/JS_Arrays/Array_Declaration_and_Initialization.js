// 1. Empty Array Declaration
let emptyArray = [];

// 2. Array with Values
let colors = ["red", "green", "blue"];

// 3. Mixed Data Types
let mixedArray = [1, "hello", true, null];

// 4. Nested Arrays
let matrix = [[1, 2], [3, 4], [5, 6]];

// 5. Array Constructor
let numbers = new Array(1, 2, 3, 4, 5);

// // 6. Array of a Specific Length
// let emptyArrayWithLength = new Array(5); // Creates an array with 5 undefined elements

// // 7. Array from a String
// let stringToArray = Array.from("Hello"); // Converts a string into an array of characters

// // 8. Array from a Set
// let setToArray = Array.from(new Set([1, 2, 2, 3, 3])); // Converts a Set into an array

// // 9. Using Array.of
// let arrayFromArgs = Array.of(1, 2, 3); // Creates an array from arguments

// 10. Using the Spread Operator
let spreadArray = [...colors]; // Copies the elements of colors into a new array
console.log(spreadArray);

// 11. Using the Array.prototype.map() method
let squaredNumbers = numbers.map((num) => num * num); // Creates a new array by mapping elements

// 12. Using Array.prototype.filter()
let evenNumbers = numbers.filter((num) => num % 2 === 0); // Filters elements based on a condition

// 13. Using Array.prototype.reduce()
let sum = numbers.reduce((acc, curr) => acc + curr, 0); // Computes the sum of array elements

// 14. Using Array.prototype.concat()
let combinedArrays = colors.concat(numbers); // Combines two arrays

// 15. Using Array.prototype.slice()
let slicedArray = mixedArray.slice(1, 3); // Extracts a portion of an array

// // 16. Using Array.prototype.splice()
// let removedItems = colors.splice(1, 2, "yellow", "purple"); // Removes and adds elements

// // 17. Array Destructuring
// let [firstColor, secondColor] = colors; // Destructuring assignment

// // 18. Initializing with Array.fill()
// let filledArray = new Array(5).fill(0); // Initializes an array with a specific value

// // 19. Using Array.prototype.unshift()
// colors.unshift("brown"); // Adds an element to the beginning of the array

// // 20. Using Array.prototype.pop()
// let lastColor = colors.pop(); // Removes and returns the last element

// // 21. Using Array.prototype.shift()
// let firstItem = colors.shift(); // Removes and returns the first element

// // 22. Using Array.prototype.reverse()
// let reversedColors = colors.reverse(); // Reverses the order of elements

// // 23. Using Array.prototype.sort()
// let sortedNumbers = numbers.sort((a, b) => a - b); // Sorts array elements

// // 24. Using Array.prototype.join()
// let colorsString = colors.join(", "); // Converts array elements to a string

// // 25. Using Array.prototype.includes()
// let hasRed = colors.includes("red"); // Checks if an element exists in the array

// // 26. Using Array.prototype.indexOf()
// let indexOfGreen = colors.indexOf("green"); // Returns the index of an element

// // 27. Using Array.prototype.lastIndexOf()
// let lastIndexOfBlue = colors.lastIndexOf("blue"); // Returns the last index of an element

// // 28. Using Array.prototype.every()
// let allNumbersPositive = numbers.every((num) => num > 0); // Checks if all elements meet a condition

// // 29. Using Array.prototype.some()
// let hasNegativeNumber = numbers.some((num) => num < 0); // Checks if any element meets a condition

// // 30. Using Array.prototype.find()
// let foundItem = numbers.find((num) => num === 3); // Finds the first element that meets a condition

// // 31. Using Array.prototype.findIndex()
// let indexOfFoundItem = numbers.findIndex((num) => num === 3); // Finds the index of the first element that meets a condition

// // 32. Using Array.prototype.flat()
// let nestedArray = [[1, 2], [3, 4], [5, 6]];
// let flatArray = nestedArray.flat(); // Flattens a nested array

// // 33. Using Array.prototype.map() to extract specific values
// let extractedValues = matrix.map((arr) => arr[0]); // Extracts the first element from each subarray

// // 34. Using Array.prototype.reduce() to group elements
// let groupedColors = colors.reduce((groups, color) => {
//   if (!groups[color[0]]) {
//     groups[color[0]] = [];
//   }
//   groups[color[0]].push(color);
//   return groups;
// }, {});

// // 35. Using Array.from() with a mapping function
// let squares = Array.from(numbers, (num) => num * num); // Creates a new array with mapped values

// // 36. Initializing an array with a range of numbers
// let rangeArray = [...Array(10).keys()]; // Creates an array with values from 0 to 9

// // 37. Using Array.from() with a generator function
// function* generateNumbers(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i;
//   }
// }
// let generatedArray = Array.from(generateNumbers(1, 5)); // Generates an array from a generator

// // 38. Initializing an array with a range and mapping function
// let doubledRangeArray = [...Array(5).keys()].map((num) => num * 2); // Creates and maps an array

// // 39. Using Array.prototype.reduce() for frequency count
// let wordArray = ["apple", "banana", "apple", "cherry", "banana"];
// let wordFrequency = wordArray.reduce((count, word) => {
//   count[word] = (count[word] || 0) + 1;
//   return count;
// }, {});

// // 40. Using Array.prototype.forEach()
// let forEachResult = [];
// colors.forEach((color) => {
//   forEachResult.push(color.toUpperCase());
// });

// // 41. Using Array.prototype.entries() to get index-value pairs
// for (const [index, value] of colors.entries()) {
//   console.log(`Index: ${index}, Value: ${value}`);
// }

// // 42. Initializing an array with a default value using Array.from()
// let defaultArray = Array.from({ length: 5 }, () => 0);

// // 43. Creating an array of unique values using Set
// let uniqueArray = [...new Set([1, 2, 2, 3, 3])];

// // 44. Using Array.prototype.reduce() for summing nested arrays
// let nestedNumbers = [[1, 2], [3, 4], [5, 6]];
// let flattenedSum = nestedNumbers.reduce((acc, curr) => acc.concat(curr), []).reduce((acc, curr) => acc + curr, 0);

// // 45. Using Array.prototype.every() with arrow function
// let allNumbersPositiveArrow = numbers.every((num) => num > 0);

// // 46. Using Array.prototype.findIndex() with arrow function
// let indexOfFoundItemArrow = numbers.findIndex((num) => num === 3);

// // 47. Using Array.prototype.filter() with arrow function
// let evenNumbersArrow = numbers.filter((num) => num % 2 === 0);

// // 48. Using Array.prototype.map() with arrow function
// let squaredNumbersArrow = numbers.map((num) => num * num);

// // 49. Using Array.prototype.sort() with arrow function
// let sortedNumbersArrow = numbers.sort((a, b) => a - b);

// // 50. Using Array.prototype.reduce() with arrow function
// let sumArrow = numbers.reduce((acc, curr) => acc + curr, 0);

// // 51. Using Array.prototype.slice() with arrow function
// let slicedArrayArrow = mixedArray.slice(1, 3);

// // 52. Using Array.prototype.splice() with arrow function
// let removedItemsArrow = colors.splice(1, 2, "yellow", "purple");

// // 53. Using Array.prototype.pop() with arrow function
// let lastColorArrow = colors.pop();

// // 54. Using Array.prototype.shift() with arrow function
// let firstItemArrow = colors.shift();

// // 55. Using Array.prototype.unshift() with arrow function
// colors.unshift("brown");

// // 56. Using Array.prototype.reverse() with arrow function
// let reversedColorsArrow = colors.reverse();

// // 57. Using Array.prototype.join() with arrow function
// let colorsStringArrow = colors.join(", ");

// // 58. Using Array.prototype.includes() with arrow function
// let hasRedArrow = colors.includes("red");

// // 59. Using Array.prototype.indexOf() with arrow function
// let indexOfGreenArrow = colors.indexOf("green");

// // 60. Using Array.prototype.lastIndexOf() with arrow function
// let lastIndexOfBlueArrow = colors.lastIndexOf("blue");

// // 61. Using Array.prototype.some() with arrow function
// let hasNegativeNumberArrow = numbers.some((num) => num < 0);

// // 62. Using Array.prototype.find() with arrow function
// let foundItemArrow = numbers.find((num) => num === 3);

// // 63. Using Array.prototype.map() to extract specific values with arrow function
// let extractedValuesArrow = matrix.map((arr) => arr[0]);

// // 64. Using Array.prototype.reduce() to group elements with arrow function
// let groupedColorsArrow = colors.reduce((groups, color) => {
//   if (!groups[color[0]]) {
//     groups[color[0]] = [];
//   }
//   groups[color[0]].push(color);
//   return groups;
// }, {});

// // 65. Using Array.prototype.flat() with arrow function
// let flatArrayArrow = nestedArray.flat();

// // 66. Using Array.from() with a mapping function and arrow function
// let squaresArrow = Array.from(numbers, (num) => num * num);

// // 67. Initializing an array with a range of numbers using Array.from() and arrow function
// let rangeArrayArrow = [...Array(10).keys()];

// // 68. Using Array.from() with a generator function and arrow function
// function* generateNumbersArrow(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i;
//   }
// }
// let generatedArrayArrow = Array.from(generateNumbersArrow(1, 5));

// // 69. Initializing an array with a range and mapping function using arrow function
// let doubledRangeArrayArrow = [...Array(5).keys()].map((num) => num * 2);

// // 70. Using Array.prototype.reduce() for frequency count with arrow function
// let wordFrequencyArrow = wordArray.reduce((count, word) => {
//   count[word] = (count[word] || 0) + 1;
//   return count;
// }, {});

// // 71. Using Array.prototype.forEach() with arrow function
// let forEachResultArrow = [];
// colors.forEach((color) => {
//   forEachResultArrow.push(color.toUpperCase());
// });

// // 72. Using Array.prototype.entries() to get index-value pairs with arrow function
// for (const [index, value] of colors.entries()) {
//   console.log(`Index: ${index}, Value: ${value}`);
// }

// // 73. Initializing an array with a default value using Array.from() and arrow function
// let defaultArrayArrow = Array.from({ length: 5 }, () => 0);

// // 74. Creating an array of unique values using Set and arrow function
// let uniqueArrayArrow = [...new Set([1, 2, 2, 3, 3])];

// // 75. Using Array.prototype.reduce() for summing nested arrays with arrow function
// let flattenedSumArrow = nestedNumbers.reduce((acc, curr) => acc.concat(curr), []).reduce((acc, curr) => acc + curr, 0);

// // 76. Using Array.prototype.every() with arrow function and different condition
// let allNumbersPositiveArrowDiff = numbers.every((num) => num >= 0);

// // 77. Using Array.prototype.findIndex() with arrow function and different condition
// let indexOfFoundItemArrowDiff = numbers.findIndex((num) => num === 4);

// // 78. Using Array.prototype.filter() with arrow function and different condition
// let evenNumbersArrowDiff = numbers.filter((num) => num % 2 !== 0);

// // 79. Using Array.prototype.map() with arrow function and different operation
// let squaredNumbersArrowDiff = numbers.map((num) => num ** 2);

// // 80. Using Array.prototype.sort() with arrow function and reverse order
// let sortedNumbersArrowDiff = numbers.sort((a, b) => b - a);

// // 81. Using Array.prototype.reduce() with arrow function and different operation
// let sumArrowDiff = numbers.reduce((acc, curr) => acc * curr, 1);

// // 82. Using Array.prototype.slice() with arrow function and different range
// let slicedArrayArrowDiff = mixedArray.slice(0, 2);

// // 83. Using Array.prototype.splice() with arrow function and different operation
// let removedItemsArrowDiff = colors.splice(0, 1);

// // 84. Using Array.prototype.pop() with arrow function and different operation
// let lastColorArrowDiff = colors.pop();

// // 85. Using Array.prototype.shift() with arrow function and different operation
// let firstItemArrowDiff = colors.shift();

// // 86. Using Array.prototype.unshift() with arrow function and different operation
// colors.unshift("black");

// // 87. Using Array.prototype.reverse() with arrow function and different operation
// let reversedColorsArrowDiff = colors.reverse();

// // 88. Using Array.prototype.join() with arrow function and different separator
// let colorsStringArrowDiff = colors.join(" | ");

// // 89. Using Array.prototype.includes() with arrow function and different element
// let hasOrangeArrowDiff = colors.includes("orange");

// // 90. Using Array.prototype.indexOf() with arrow function and different element
// let indexOfYellowArrowDiff = colors.indexOf("yellow");

// // 91. Using Array.prototype.lastIndexOf() with arrow function and different element
// let lastIndexOfPurpleArrowDiff = colors.lastIndexOf("purple");

// // 92. Using Array.prototype.some() with arrow function and different condition
// let hasZeroArrowDiff = numbers.some((num) => num === 0);

// // 93. Using Array.prototype.find() with arrow function and different condition
// let foundItemArrowDiff = numbers.find((num) => num === 4);

// // 94. Using Array.prototype.map() to extract specific values with arrow function and different condition
// let extractedValuesArrowDiff = matrix.map((arr) => arr[1]);

// // 95. Using Array.prototype.reduce() to group elements with arrow function and different operation
// let groupedColorsArrowDiff = colors.reduce((groups, color) => {
//   if (!groups[color[1]]) {
//     groups[color[1]] = [];
//   }
//   groups[color[1]].push(color);
//   return groups;
// }, {});

// // 96. Using Array.prototype.flat() with arrow function and different level
// let deeplyNestedArray = [[1, [2, 3]], [4, [5, 6]], [7, [8, 9]]];
// let flatArrayArrowDiff = deeplyNestedArray.flat(2);

// // 97. Using Array.from() with a mapping function and arrow function with different operation
// let cubesArrow = Array.from(numbers, (num) => num ** 3);

// // 98. Initializing an array with a range of numbers using Array.from() and arrow function with different range
// let rangeArrayArrowDiff = [...Array(5).keys()].map((num) => num + 1);

// // 99. Using Array.from() with a generator function and arrow function with different range
// function* generateNumbersArrowDiff(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i * 10;
//   }
// }
// let generatedArrayArrowDiff = Array.from(generateNumbersArrowDiff(1, 5));

// // 100. Initializing an array with a range and mapping function using arrow function with different operation
// let tripledRangeArrayArrowDiff = [...Array(5).keys()].map((num) => num * 3);


// // ''''''''''''''''''''''''''''
// // 1.Empty Array Declaration
// let emptyArray = [];

// // 2.Array with Values
// // let colors = ['red', 'green', 'blue'];
// let colors = ["red", "green", "blue"];
// console.log("colors: " + colors);

// // 3.Array of Mixed Data Types
// let mixedArray = [1, "Hello", 'a', true, null, undefined]

// // 4.Nested Array 
// let matrix = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];

// // 5.Array Constructor
// let numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8);

// // 6.Array of Specific length
// let emptyArrayWithLength = new Array(5); // Create an array with 5 undefined elements
// console.log("emptyArrayWithLength: " + emptyArrayWithLength);
// // 7.Array from String
// let stringToArray = Array.from("Hello");
// console.log(stringToArray);

// // 8.Array from a Set
// let setToArray = Array.from(new Set([1, 2, 3, 2, 4,  4]))
// console.log("setToArray: " + setToArray);

// // 