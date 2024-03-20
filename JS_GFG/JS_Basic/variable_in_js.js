// const accountId = 123456;
// let accountEmail = "abc@gmail.com";
// // let accountEmail = "abcd@gmail.com"; // Cannot redeclare block-scoped variable 'accountEmail'

// var accountPassword = "12345"
// var accountPassword = "12345"
// accountCity = "Madhubani"

// // accountId = 20000;// TypeError: Assignment to constant variable.
// accountEmail = "abcd@gmail.com";
// accountEmail = 1234
// accountPassword = 6534
// accountPassword = "6534"
// accountCity = "Darbhanaga"

// console.log(accountId);
// /*
// Prefer not to use var
// because of issue in block scope and functional scope */

// // '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// /*
// JavaScript let is a keyword used to declare variables that are block-scoped. 
// Variables defined with the let keyword cannot be redeclared and must be declared before use.
// */
// let a = 10;
// {
//     let a = 15;
//     // let a = 20;
//     let str = "Hello"

//     console.log(a); // calling the function inside block output: 15
// }
// // let a = 25; // error: Identifier 'a' has already been declared
// console.log(a);
// // console.log(str); // str is not defined

// function fun() {
//     console.log(a);
// }

// fun()

// // x = 12;
// // console.log(x);
// // let x;

// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''