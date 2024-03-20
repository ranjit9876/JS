// // '''''''''''''''''''''''''''''''''''''''''''''''''1.Named Function Expression'''''''''''''''''''''''''''''''''''''''''''''''''''
// /**A Named Function Expression (NFE) in JavaScript is a type of function expression where the function being defined has a name. */
// // Named Function Expression
// var square = function square_fun(num) {
//     return num * num;
// }

// // Usage
// // console.log(square_fun(10)); // error: square_fun is not defined
// console.log(square_fun(10)); //

// // Named Function Expression for factorial calculation
// var factorial = function factorial_fun(num) {
//     if (num <= 1) {
//         return 1;
//       } else {
//         return num * factorial(num - 1);
//     }

// } 
// // Usage
// console.log("Factorial of 5 is " + factorial(5));

// // ''''''''''''''''''''''''''''''''''''''''''''''''''''
// var fibonacci = function fib(n) {
//     if (n <= 1) {
//       return n;
//     } else {
//       // Check if the result for n is already cached
//       if (!fib.cache) {
//         fib.cache = {};
//       }
//       if (fib.cache[n] !== undefined) {
//         return fib.cache[n];
//       }

//       // Calculate and cache the result for n
//       fib.cache[n] = fib(n - 1) + fib(n - 2);
//       return fib.cache[n];
//     }
//   };

//   console.log(fibonacci(10)); // Outputs: 55

// // '''''''''''''''''''''''''''''''''''Anonymous Function Expression'''''''''''''''''''''''''''''''''''''''''''''''
// /**An Anonymous Function Expression in JavaScript is a function that is defined without a name. */
// var add = function(x, y) {
//     return x + y;
// }

// console.log(add(10, 15));

// // ''''''''''''''''''''''''''
// var numbers = [1, 2, 3, 4, 5];
// var squaredNumbers = numbers.map(function(num) {
//   return num * num;
// });
// console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]

// // ''''''''''''''''''''''''''''
// // 1: Basic Anonymous Function Expression
// // Anonymous function expression
// var add = function(x, y) {
//     return x + y;
//   };

//   // Usage
//   console.log(add(3, 5)); // Outputs: 8

// // '''''''''''''''''''''''''
// // 2.Anonymous Function as a callbacks
// // Array of numbers
// var numbers = [1, 2, 3, 4, 5];

// // Using map with an anonymous function expression as a callback
// var squaredNumbers = numbers.map(function(num) {
//   return num * num;
// });

// // Usage
// console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]

// // '''''''''''''''''''
// // 3: Immediately Invoked Function Expression (IIFE)
// // IIFE using anonymous function expression
// (function(){
//     var message = "Hello, World!";
//     console.log(message); 
// })();

// // Usage
// // Output: Hello, World!

// // '''''''''''''''''''''''''''''''''''''''
// // 4: Passing Anonymous Function as Argument
// // Higher-Order Function that takes an anonymous functions as an argument
// function doSomething(callback) {
//     console.log("Do Something...........");
//     callback()
// }

// // Calling of doSomething function with argument as a function 
// doSomething(function(){
//     console.log("Callback function called");
// })

// /**Output: 
//  * Do Something...........
//  * Callback function called
//  */

// // '''''''''''''''''''''''''''''''''''''''''''''
// // 5: Event Handling with Anonymous Function
// // Event handling with anonymous function expression
// document.getElementById('myButton').addEventListener('click', function() {
//     console.log('Button clicked!');
//   });

//   // Usage
//   // When 'myButton' is clicked, the message will be logged to the console.

// // '''''''''''''''''''''''''
// // 6: Anonymous Function Expression as a Parameter
// function perform_operation(Operation, a, b) {
//     return Operation(a, b);
// }

// // Calling perform_operation function with anonymous function expression as a parameter
// var result = perform_operation(function(a, b) {
//     return a + b;
// }, 10, 15);

// console.log(result);

// // '''''''''''''''''''''''''''''
// // 7: Anonymous Function Expressions in Array Method
// var numbers = [1, 2, 3, 4, 5]
// var even_numbers = numbers.filter(function(num) {
//     return num % 2 == 0;
// })
// console.log(even_numbers);

// '''''''''''''''''''''''''Immediately Invoked Function Expression (IIFE)''''''''''''''''''''''''''''''''''''''
/**An Immediately Invoked Function Expression (IIFE) is a JavaScript design pattern that allows you to execute a function immediately after it's defined. 
 * It's wrapped in parentheses ( ) to ensure it's treated as an expression, and then followed by another pair of parentheses ( ) to invoke it immediately. */

/**
 * // Syntax of IIFE
(function(){
    // Your Code Here...
})(); 
*/

// // '''''''''''''''''Basic IIFE''''''''''''''''
// (function(){
//     console.log("Hello, World!");
// })();

// // ''''''''''''''IIFE with arguments''''''''''''''''''''
// (function(name) {
//     console.log("Hello, " + name);
// })("John")

// // ''''''''''''''''''''''''''IIFE Returning a value'''''''''''''''''''''
// var result = (function (x, y){
//     return x + y;
// })(10, 15);
// console.log(result);

// // '''''''''''''''''IIFE with a local variable'''''''''''''''''''''''''''
// (function() {
//     var message = "Hello, World!";
//     console.log(message);
// })();

// // console.log(message); // ReferenceError: message is not defined

// // '''''''''''''''''''''''''''''IIFE with a closure value''''''''''''''''''''''''''''''
// var counter = (function() {
//     var count = 0;
//     return {
//       increment: function() {
//         return count++;
//       },
//       decrement: function() {
//         return count--;
//       },
//       value: function() {
//         return count;
//       }
//     };
// })();

// console.log(counter.increment()); // 0
// console.log(counter.increment()); // 1
// console.log(counter.decrement()); // 2
// console.log(counter.value()); // 1

// // ''''''''''''''''''''''Using IIFE to create a module''''''''''''''''''''''''''''''''
// var myModule = (function () {
//     var private_var = "I'm private varaible";

//     function private_fun() {
//         console.log("I'm private function");
//     }

//     return {
//         public_fun: function () {
//             console.log("I'm public function");
//         },

//         get_private_var: function () {
//             return private_var;
//         }
//     };

// })();

// myModule.public_fun(); // I'm public function
// console.log(myModule.get_private_var); // [Function: get_private_var]
// console.log(myModule.get_private_var()); // I'm private varaible

// // ''''''''''''''''''''''''''''''''''''''''''''''''IIFE with Arrow Function'''''''''''''''''''''''''''''''''
// (() => {
//     console.log("This is an IIFE with Arrow Function");
// })();

// // ''''''''''''''''''''''''''''''IIFE with async/with''''''''''''''''''''''''''
// (async function() {
//     const result = await fetch('https://api.example.com/data');
//     const data = result.json();
//     console.log(data);
// })

// // ''''''''''''''''''''''''''''''IIFE with block-scoped variables''''''''''''''''''''''''''''''
// (function() {
//     if (true) {
//         var message = "Hello, World!";
//     }
//     console.log(message); // Hello, World!


// })();

// // '''''''''''''''''''''''''''''IIFE for Avoiding Global Scope Pollution'''''''''''''''''''''''''''''
// var global_var = "I'm global variable";
// (function() {
//     var local_var = "I'm local variable";
//     console.log(global_var); // I'm global variable
//     console.log(local_var); // I'm local variable
// })();

// console.log(global_var); // I'm global variable
// console.log(local_var); // ReferenceError: local_var is not defined

// // ''''''''''''''''''''''''''''''''''Preventing Variable Collision''''''''''''''''''''''''''
// var name = "John";

// (function() {
//   // Create a new variable with the same name but different value
//   var name = "Doe";

//   console.log(name); // Outputs: Doe
// })();

// console.log(name); // Outputs: John

// // ''''''''''''''''''''''''''''''Using Parameters in IIFE  for privacy''''''''''''''''''''''''''''''''''''''''
// var secret_message = (function(secret) {
//     console.log("Secret Message: " + secret);
//     return (function() {
//         console.log("secret message: " + secret);
//     })
// })("I'm a secret message");

// secret_message();

// // ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// // ''''''''''''''''''''''''''''''''''''''''''''''''''''''''Arrow Function Expression'''''''''''''''''''''''''''''''''''''''''''''''''''
// // ''''''''''''''''''''''''Arrow Function Expression with Single Parameters
// let double = num => num * 2
// console.log(double(25)); // output: 6

// // '''''''''''''''''''''''''''Arrow Function with Multiple Parameters
// let sum = (a, b) => a + b;
// console.log(sum(10, 20));

// // '''''''''''''''''''''''''''Arrow Function with No Parameters
// let say_hello = () => console.log("Hello, World!");
// say_hello();

// // '''''''''''''''''''''''''''Arrow Function with Function Body
// let greet = name => {
//     console.log("Hello, " + name + "!");
//     console.log("How are you?");
//   };

// greet("John");

// // '''''''''''''''''''''''''Arrow Function with Object Literals
// let create_person = (name, age) => (
//     {name: name, age: age}
// );

// console.log(create_person("Alice", 25)); // output: { name: 'Alice', age: 25 }

// // '''''''''''''''''''''''''Arrow Function with Implict Return
// let multiply = (a, b) => a * b;
// console.log(multiply(5, 10)); // 50

// // '''''''''''''''''''''''''Arrow Function with Arrow Iteration
// let numbers = [1, 2, 3, 4, 5]
// let double_numbers = numbers.map(num => num * 2);
// console.log(double_numbers); // Output: [2, 4, 6, 8, 10]

// // ''''''''''''Arrow function with multiple statements
// const printNumbers = () => {
//     for (let i = 1; i <= 5; i++) {
//       console.log(i);
//     }
//   };

// // ''''''''''''Arrow Function with an implicit return
// const full_name = (first_name, last_name) => `${first_name} ${last_name}`
// console.log(full_name("John", "cena"));

// // // '''''''''''''''Arrow function with rest parameters
// // const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
// // console.log(sum(10, 20, 30, 40, 50));

// // ''''''''''''Arrow Function Expression with  Lexical this Binding
// function Person() {
//     this.name = 'John';

//     // Regular function Expression
//     this.say_hello = function() {
//         console.log("Hello " + this.name + "!");
//     };

//     // Arrow function expressions
//     this.say_hii = () => {
//         console.log("Hi " + this.name + "!");
//     }
// }

// let Person_1 = new Person();

// // Call the Regular function
// Person_1.say_hello(); // Output: Hello John

// // Call the arrow function
// Person_1.say_hii() // Output: Hii John

// // // Arrow Function Expression with  Lexical this Binding in Nested Functions
// var obj = {
//     name: 'John',
//     greet: function() {
//         setTimeout(function() {
//             console.log("Hello, My name is " + this.name);
//         }, 1000);

//         setTimeout(() => {
//             console.log("Hello, My name is " + this.name);
//         }, 2000)
//     }
// };

// obj.greet()

// // ''''''''''''''''''''''''Arrow Function Expression with Arrow Functions and super
// class Parent {
//     constructor() {
//       this.name = "Parent";
//     }

//     sayHello() {
//       console.log("Hello from Parent");
//     }
//   }

//   class Child extends Parent {
//     constructor() {
//       super();
//       this.name = "Child";
//     }

//     // Regular function expression
//     regularMethod() {
//       console.log("Regular method in Child");
//       super.sayHello(); // Accessing parent's method using super
//     }

//     // Arrow function expression
//     arrowMethod = () => {
//       console.log("Arrow method in Child");
//       super.sayHello(); // Error: 'super' keyword unexpected here
//     };
//   }

//   const child = new Child();

//   child.regularMethod(); // Outputs: Regular method in Child \n Hello from Parent
//   child.arrowMethod(); // Throws a SyntaxError

// // ''''''''''''''''''''''''Arrow Function with Rest Parameters
// const sum_2 = (...args) => {
//   return args.reduce((acc, val) => acc + val, 0)
// }

// console.log(sum_2(10, 20, 30, 40, 50));

// // ''''''''''''''''Arrow Function in a Higher Order Function
// const double_fun = x => x * 2;
// const numbers = [1, 2, 3, 4, 5]
// const double_numbers = numbers.map(double_fun)
// console.log(double_numbers);

// // ''''''''''''''''Arrow Function in class property
// class Calculater {
//   add = (a, b) => a + b;
// }
// let calc = new Calculater();
// console.log(calc.add(10, 20));

// // ''''''''''''''''''Arrow Function with Default Parameters
// const greet = (name = "Alice") => {
//   // console.log("Hello " + name + "!");
//   console.log(`Hello ${name}!`);
// }

// greet() // Output: Hello Alice
// greet("John") // Output: Hello John

// // ''''''''''''''''''Arrow Function with setTimeout
// setTimeout(() => {
//   console.log("Time out completed");
// }, 2000); // After 2 seconds, Output: Time out completed

