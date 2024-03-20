// // Single quotes
// let singleQuotesString = 'This is a string using single quotes';

// // Double quotes
// let doubleQuotesString = "This is a string using double quotes.";

// // Backticks (Template literals) for multiline strings and interpolation
// let firstName = 'John';
// let lastName = 'Doe';
// let backticksString = `
//   This is a string using backticks.
//   My name is ${firstName} ${lastName}.
// `;

// // Escaping characters within a string
// let escapedString = 'I\'m a programmer.';

// // String concatenation
// let greeting = 'Hello, ';
// let target = 'world';
// let concatenatedString = greeting + target + '!';

// // Multiline strings using backticks
// let multilineString = `
//   This is a multiline
//   string in JavaScript.
//   It can span multiple lines.
// `;

// // Creating a string with a line break
// let lineBreakString = 'This is a string\nwith a line break.';

// // Unicode characters in a string
// let unicodeString = 'Unicode characters: \u03A9 \u2713 \u2764';

// // Empty string
// let emptyString = '';

// // String length
// let text = 'This is a sample text.';
// let lengthOfString = text.length;

// // String interpolation with backticks
// let age = 30;
// let interpolatedString = `I am ${age} years old.`;

// // String concatenation with variables
// let fruit1 = 'apple';
// let fruit2 = 'banana';
// let fruitsConcatenation = fruit1 + ' and ' + fruit2;

// // String declaration in ES6 (ECMAScript 2015)
// let es6String = `This is an ES6 string.`;

// // String encoding/decoding
// let originalText = 'Hello, World!';
// let encodedText = btoa(originalText);
// let decodedText = atob(encodedText);

// // Internationalization (i18n) for formatting strings
// let price = 12345.67;
// let formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

// // Displaying the results
// console.log("singleQuotesString: " + singleQuotesString);
// console.log("doubleQuotesString: " + doubleQuotesString);
// console.log("backticksString; " + backticksString);
// console.log('escapedString: ' + escapedString);
// console.log("concatenatedString: " + concatenatedString);
// console.log("multilineString: " + multilineString);
// console.log("lineBreakString: " + lineBreakString);
// console.log("unicodeString; ");
// console.log("emptyString: " + emptyString);
// console.log('Length of string:', lengthOfString);
// console.log("interpolatedString; " + interpolatedString);
// console.log("fruitsConcatenation: " + fruitsConcatenation);
// console.log("es6String: " + es6String);
// console.log('Encoded text:', encodedText);
// console.log('Decoded text:', decodedText);
// console.log('Formatted price:', formattedPrice);

// ''''''''''''''''''''''''''''''''''''''''''''''String Properties and Meethods'''''''''''''''''''''''''''''''''''''''''
let str = "JavaScript is a versatile-scripting language used for web development"

// string length 
let length = str.length;
console.log(`Length: ${length}`); // output: Length: 69

// Accessing the characters
let firstChar = str.charAt(0)
let lastChar = str.charAt(str.length - 1)
console.log(`firstChar: ${firstChar}`); // output: firstChar: J
console.log(`lastChar: ${lastChar}`); // output: lastChar: t

// Unicode value of a Character
let unicodeValue = str.charCodeAt(0)
console.log(`Unicode value of first character: ${unicodeValue}`); // output: unicodeValue: Unicode value of first character: 74

// Concatenation
let firstName = 'Ranjit';
let lastName = 'Gupta';

console.log(`Full Name: ${firstName + ' Kumar ' + lastName}`); // output: Full Name: Ranjit Kumar Gupta

// indexOf
let indexOfScripting = str.indexOf('scripting')
console.log(`Index of scripting: ${indexOfScripting}`); // output: Index of scripting: 26

// lastIndexOf
let lastIndexOfScripting = str.lastIndexOf('scripting');
console.log(`Last Index of scripting: ${lastIndexOfScripting}`); // output: Last Index of scripting: 26

// substring
let substring = str.substring(16, 25);
console.log(`Substring: ${substring}`); // output: versatile

// Slice
let slicedString = str.slice(0, 10);
console.log(`Slice String: ${slicedString}`); // output: JavaScript

// tOUpperCase and toLowerCase
let upperCaseStr = str.toUpperCase();
let lowerCaseStr = str.toLowerCase();

console.log(`upperCase String: ${upperCaseStr}`); // output: JAVASCRIPT IS A VERSATILE SCRIPTING LANGUAGE USED FOR WEB DEVELOPMENT
console.log(`lowerCase String: ${lowerCaseStr}`); // output: javascript is a versatile scripting language used for web development

// Trimming 
let trimmedStr = '       Trim Me!        '.trim();
console.log(`trimmed String: ${trimmedStr}`); // output: Trim Me!

// Splitting
let words = "JavaScript is a versatile-scripting language used for web-development"
let wordArray = words.split('-');
console.log(`word Array: ${wordArray[0]}`); // output: JavaScript is a versatile

// Replace 
let replacedString = str.replace("web development", "Front-end development");
console.log(`Replaced string: ${replacedString}`); // output: JavaScript is a versatile-scripting language used for Front-end development

// Checking for Substring
let includesScripting = str.includes("scripting");
console.log(`Includes scripting: ${includesScripting}`); // Includes scripting: true

// Checking if String starts/ends with a substring
let startWithJS = str.startsWith("JavaScript");
let endWithDevelopment = str.endsWith("development");

console.log(`Start with 'JavaScript': ${startWithJS}`); // Start with 'JavaScript': true
console.log(`end with 'development' : ${endWithDevelopment}`); // end with 'development' : true

// Repeat a string
let repeatedString = "abc".repeat(3);
console.log(`repeat string: ${repeatedString}`); // repeat string: abcabcabc

// string comparison
let compareString = "apple" === "Apple";
console.log(`compare string: ${compareString}`); // compare string: false

// String Padding
let paddedString = '5'.padStart(4, '0');
console.log(`padded string: ${paddedString}`); // padded string: 0005

// String Template
let adjective = 'versatile';
let templateString = `Javascript is a(n) ${adjective} scripting language`;
console.log(`Template String: ${templateString}`); // Template String: Javascript is a(n) versatile scripting language

// String from Code Units
let unitCodes = [72, 101, 108, 108, 111]; // 'Hello' in ASCII
let fromCodeUnits = String.fromCharCode(...unitCodes);
console.log(`String from Code units: ${fromCodeUnits}`); // String from Code units: Hello

// String Alignment
let alignedString = 'Centered Text'.padStart(20, '-').padEnd(50, '-');
console.log(`alignedString: ${alignedString}`); // alignedString: -------Centered Text------------------------------

// String reversal
let reversedString = str.split('').reverse().join('');
console.log(`reversedString: ${reversedString}`); // reversedString: 

// String Searching with Regular Expression
let regax = /development/g
let match = str.match(regax);
console.log(`Match with regular expression: ${match}`); // output: Match with regular expression: development

// String Comparison
let str1 = 'apple';
let str2 = 'banana';
let comparisonResult = str1.localeCompare(str2);
console.log(`String Comparison Result: ${comparisonResult}`); // String Comparison Result: -1 (str1 is less than str2)

// // String Iteration
// for (let char of str) {
//     console.log(char);
// }

// String Reversal using a for loop
let reversed = '';
for (let i = str.length -1 ; i >= 0; i--) {
    reversed += str[i];
}

console.log(`Reversed String Using Loop: ${reversed}`); // Reversed String Using Loop: tnempoleved bew rof desu egaugnal gnitpircs-elitasrev a si tpircSavaJ

// String to Array
let toArray = Array.from(str);
console.log(`String to Array: ${toArray}`); // String to Array:J,a,v,a,S,c,r,i,p,t, ,i,s, ,a, ,v,e,r,s,a,t,i,l,e,-,s,c,r,i,p,t,i,n,g, ,l,a,n,g,u,a,g,e, ,u,s,e,d, ,f,o,r, ,w,e,b, ,d,e,v,e,l,o,p,m,e,n,t

// Counting Occurrences of a Substring
let countOccurrences = (str, substring) => str.split(substring).length  - 1;
let countDevelopment = countOccurrences(str, 'development');
console.log(`Count of 'development': ${countDevelopment}`);

// Escaping Special Characters
let specialCharacters = 'This is single quote \', and this is backslash \\';
console.log(`special characters: ${specialCharacters}`); // special characters: This is single quote ', and this is backslash \\

// Checking for Empty String
let isEmpty = str.length == 0
console.log(`Is the String empty: ${isEmpty}`); // Is the String empty: false

// Checking for Alphanumeric
let isAlphanumeric = /^[a-zA-Z0-9]+$/.test(str);
console.log(`Is the String alphanumeric: ${isAlphanumeric}`); // Is the String alphanumeric: false

// Checking for Numeric
let isNumeric = /^[0-9]+$/.test(str);
console.log(`Is the String numeric: ${isNumeric}`); // Is the String numeric: false

// Checking for Palindrome
let isPalindrome = (str) => str === str.split('').reverse().join('');
console.log(`Is the String is a Palindrome: ${isPalindrome(str)}`); // Is the String is a Palindrome: false

// String Sorting
let sortingExample = 'banana, apple, cherry';
let sortedWords = sortingExample.split(', ').sort();
console.log(`Sorted words: ${sortedWords}`); //Sorted words: apple, banana, cherry

// Checking if a String Contains Only Spaces
let containsOnlySpaces = str.trim() === '';
console.log(`Contains Only Spaces: ${containsOnlySpaces}`); // Contains Only Spaces: false

// String to Number Conversion
let numericString = "12345";
let numericValue = parseInt(numericString);
console.log(`Numeric Value: ${numericValue}`); // Number Value: 12345

// Counting The Words
let wordcount = str.split(' ').filter(word => word !== '').length;
console.log(`Word Count: ${wordcount}`); // Word Count: 9

// Converting to Title Case
let toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
let titleCase = toTitleCase(str);
console.log(`Title Case: ${titleCase}`); // Title Case: Javascript Is A Versatile-scripting Language Used For Web Development

// Generating a Random String
let randomString = Math.random().toString(36).substring(7);
console.log(`Random String: ${randomString}`); // Random String: 

// Removing Non-Alphanumeric Characters
let alphanumericString = str.replace(/[^a-zA-Z0-9]/g, '');
console.log(`Alphanumeric String: ${alphanumericString}`); // Alphanumeric String: JavaScriptisaversatilescriptinglanguageusedforwebdevelopment

// String Compression (Basic)
let compressedString = str.replace(/(.)\1+/g, (match, char) => char + match.length);
console.log(`Compressed String: ${compressedString}`); // Compressed String: JavaScript is a versatile-scripting language used for web development

// String Compression (Run-Length Encoding)
let runLengthEncoding = (str) => {
    let result = '';
    let count = 1;
    for (let i = 1; i < str.length ; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += str[i - 1] + count;
            count = 1;
        }
    }
    result += str[str.length - 1] + count;
    return result;
}

let compressedRunLength = runLengthEncoding(str);
// console.log(`Run-Length Encoded: ${runLengthEncoding}`);// Run-Length Encoded:
console.log(`Run-Length Encoded: ${runLengthEncoding(str)}`);// Run-Length Encoded: J1a1v1a1S1c1r1i1p1t1 1i1s1 1a1 1v1e1r1s1a1t1i1l1e1-1s1c1r1i1p1t1i1n1g1 1l1a1n1g1u1a1g1e1 1u1s1e1d1 1f1o1r1 1w1e1b1 1d1e1v1e1l1o1p1m1e1n1t1   

// String Searching with Regular Expressions (Global Match)
let str3 = "Hello, world!, Hello, world!. Ranjit Ranjit"
let regaxGlobal = /world!/g
let matchGlobal = str3.match(regaxGlobal);
console.log(`Matches with Global Regax: ${matchGlobal}`); // Matches with Global Regax: world!,world!

// String Reversal using Reduce
let reducedReversal = str.split('').reduce((reversed, char) => char + reversed, '');
console.log(`Reversed String using Reduce: ${reducedReversal}`); // Reversed String using Reduce: tnempoleved bew rof desu egaugnal gnitpircs-elitasrev a si tpircSavaJ

