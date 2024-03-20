// // 1.Functioal Declaration 
// function functionName_1(parameters) {
//     // Function Body
// }

// // 2.Function Expression
// const functionName_2 = function(parameters) {
//     // Function Body
// }

// // 3.Arrow Function Expression
// const functionName_3 = (parameters) => {
//     // Function Body
// }

// // 4.Named Function Expression
// const functionName_4 = function namedFunction(parameters) {
//     // Function Body
// }

// // // 5. Immediately Invoke Function Expression(IIFE)
// // (function(parameters) {
// //     // Function Body
// // })();

// // 6.Generator Function Declaration 
// function* generatorFunctionName(Parameters) {
//     // Function Body
// }

// // 7.Async Function Declaration
// async function asyncFunctionName_1(Parameters) {
//     // Function Body
// }

// // 8.Async Arrow Function Expression
// const asyncFunctionName_2 = async (parameters) => {
//     // Function Body
// } 

// // 9.Methods Declaration (in Objects or classes)
// const object = {
//     functionName_9(parameters) {
//         // Function Body
//     }
// };

// // 10.Getter and Setter Methods (in classes or objects)
// const object_2 = {
//     get propertyName() {
//         // Function Body
//     },

//     set propertyName(value) {
//         // Function Body
//     }
// }

// 11.Block- Level Function Declaration
// 1.Without strict mode
/*Without strict mode, block-level function declarations are generally not supported, and their behavior can be unpredictable. 
The function might be hoisted to the enclosing function or global scope, depending on the JavaScript engine. 
*/

// // if (true) {
// //     fun_11();
// //     function fun_11() {
// //         console.log("Hi, I'm inside fun_11().");
// //     }
// // }
// // fun_11() // Possible in some cases, not in other cases

// if (true) {
//     function fun_11() {
//         console.log("Hi, I'm inside fun_11().");
//     }
// }
// fun_11() // Possible in some cases, not in other cases

// '''''''''''''''''''''''
// 2.With Strict Mode
/**
 * In strict mode, block-level function declarations are explicitly disallowed. 
 * Attempting to use them will result in a syntax error.
 */

// "use strict";
// if (true) {
//     console.log("call the fun_11 method: "+ fun_11());
//     function fun_11() {
//         console.log("Hi, I'm inside fun_11().");
//     }
//     fun_11()
// }

// // fun_11(); // ReferenceError: fun_11 is not defined
// /**
//  * If you want to define a function within a block and have it scoped to that block, you can use function expressions instead:
//  */

// if (true) {
//     // console.log("Call the function blockLevelFunction() : " + blockLevelFunction()); // ReferenceError: Cannot access 'blockLevelFunction' before initialization
//     // blockLevelFunction(); // ReferenceError: Cannot access 'blockLevelFunction' before initialization
//     const blockLevelFunction = function () {
//         console.log("Hi,I'm inside blockLevelFunction().");
//     }
//     blockLevelFunction(); // Accessing within the block
// }
// // blockLevelFunction(); // Refernce Error: blockLevelFunction is not defined

// // ''''''''''''''''''''''
// console.log(
//     `'foo' name ${"foo" in globalThis ? "is" : "is not"
//     } globalThis.typeof foo is ${ typeof foo }; `
// );
// if (false) {
//     function foo() {
//         return -1;
//     }
// }

// // ''''''''''''''
// var num = 10;
// function fun_11() {
//     let num_2 = 10;
//     console.log("num" in globalThis);
// }
// fun_11()

// // '''''''''''''''''''''''
// "use strict";

// {
//   foo(); // Logs "foo"
//   function foo() {
//     console.log("foo");
//   }
// }

// console.log(
//   `'foo' name ${
//     "foo" in globalThis ? "is" : "is not"
//   } global. typeof foo is ${typeof foo}`,
// );
// // 'foo' name is not global. typeof foo is undefined

// // '''''''''''''''''''''''''''''''Function Hosting'''''''''''''''''''''''''''''''''
// // 1.Function Declaration Hosting
// /**Function declarations are completely hoisted to the top of their containing scope. You can call a function before it's declared: */
// fun_1(); // Output: Hello World
// function fun_1() {
//     console.log("Hello World");
// }

// 2.Function Expression Hosting
/**Function expressions are not hoisted in the same way as function declarations. 
 * Only the variable declaration is hoisted, not the function assignment: 
 * */

// // fun_2(); //ReferenceError: Cannot access 'fun_2' before initialization
// // In this case, only the variable sayHello is hoisted, but its assignment to a function is not. 
// var fun_2;
// fun_2 = function() {
//     console.log("Hello World!");
// }

// fun_2();

// // ''''''''''''''''
// // 3.Function Declarations Hoisting Over Variable Declarations:
// /**Function declarations are hoisted over variable declarations. 
//  * If a function and a variable share the same name in the same scope, the function declaration takes precedence: */
// var message = "Hello, World!";
// function message() {
//     console.log("This is message function. Hello World!");
// }
// console.log(typeof message); // output: String
// console.log(message); // Hello, World!
// // console.log(message()); // TypeError: message is not a function

// // ''''''''''''''''''''
// // 4.Anonymous function declarations hoisting
// fun_4();
// let fun_4 = function() {
//     console.log("Hello, World!");
// }

// '''''''''''''''''''''''''''''''''''''Function Redeclarations''''''''''''''''''''''''''''''''''''
// // 1.Function Declarations Redeclarations
// function fun() {
//     console.log("Inside First Function");
// }
// fun() // Output: Inside First Function

// function fun() {
//     console.log("Inside Second Function");
// }
// fun(); // Inside Second Function

// // 2.Function Expression Redeclarations
// var fun = function () {
//     console.log("First Function");
// }

// fun(); // output: First Functions
// var fun = function () {
//     console.log("Second Function");
// }

// fun(); // output: Second Functions

// // ''''''''''''''''''Function Redeclaration with let''''''''''''''''''''''''
// let greet = function() {
//     console.log("Hello, world!");
// };

// greet(); // Output: "Hello, world!"

// greet = function() {            // output: Hola, mundo!
//     console.log("Hola, mundo!");
// };

// // let greet = function() {            // SyntaxError: Identifier 'greet' has already been declared
// //     console.log("Hola, mundo!");
// // };

// greet(); // Output: "Hola, mundo!"

// // '''''''''''''''''''''''''''''Function Redeclaration with const'''''''''''''''''''''''''''''''''''
// const greet = function() {
//     console.log("Hello, world!");
// };

// greet(); // Output: "Hello, world!"

// const greet = function() {  // SyntaxError: Identifier 'greet' has already been declared
//     console.log("Hola, mundo!");
// };

// greet(); // Output: "Hola, mundo!"

// // ''''''''''''''''''''''''''''''''''''Redeclaration in defferent scope''''''''''''''''''''''''''''''
// function fun() {
//     console.log("Hello, World!, 1st function");
// }

// fun(); // Output: Hello, World!, 1st function
// if (true) {
//     function fun() {
//         console.log("Hello, Earth!, 2nd function");
//     }
// }

// fun(); // Output: Hello, World!, 2nd function

// // ''''''''''''''''''''''''''''''''''''''Redeclaration with different types''''''''''''''''''''''''''''''''''
// function fun() {
//     console.log("Hello, World!, 1st function");
// }

// var fun = function() {
//     console.log("Hello, Earth!, 2nd function");
// }

// fun();

// // ''''''''''''''''''Anonymous function declarations with redeclaration'''''''''''''''''''''''
// var fun = function() {
//     console.log("First");
// }

// var fun = function() {
//     console.log("Second");
// }

// fun();

// // ''''''''''''''''''''''''''
// function fun(b, c) {

// }
// function fun(b, c, d) {

// }
// console.log(fun.length);
// // let fun = 10; // SyntaxError: Identifier 'fun' has already been declared
// var fun = 10;

// // ''''''''''''''''''''''''''''''
// var a = 10;
// function a(){}
// console.log(a);

// // '''''''''''''''''''''''''''''''''
// /**At the top level of a function's body, function also behaves like var and can be redeclared or have the same name as a parameter. */
// function foo(a) {
//     function a(){}
//     console.log(typeof a);
// }
// foo(5);

// // ''''''''''''''''''''''''''''''''''
// // Assuming current source is a module
// function foo() {}
// function foo() {} // SyntaxError: Identifier 'foo' has already been declared
// // ''''''''''''''''''''''''''''''''''
// "use strict"
// {
//     function f1(){}
//     // function f1(){} // SyntaxError: Identifier 'f1' has already been declared
// }
// ''''''''''''''''''''''''''''