// String variables
let greeting = "Hello";
let name = "John";
let message = greeting + ", " + name + "! Welcome to JavaScript.";

// Number variables
let age = 25;
let pi = 3.14;

// Boolean variables
let isStudent = true;
let isLoggedIn = false;

// Array variables
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];

// Object variables
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStudent: true
};

// Function variables
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Null and undefined variables
let nullVariable = null;
let undefinedVariable;

// Template literals
let welcomeMessage = `${greeting}, ${name}! You are ${age} years old.`;

// Conditional statements
if (isStudent) {
  console.log("You are a student.");
} else {
  console.log("You are not a student.");
}

// Loops
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Switch statement
let dayOfWeek = "Monday";
switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend.");
    break;
  default:
    console.log("It's a regular day.");
}

// DOM manipulation
let element = document.getElementById("myElement");
element.innerHTML = "Hello, DOM!";

// Event handling
element.addEventListener("click", function() {
  console.log("Element clicked!");
});

// AJAX request
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));

// Timeout function
setTimeout(function() {
  console.log("Delayed message after 2 seconds.");
}, 2000);
