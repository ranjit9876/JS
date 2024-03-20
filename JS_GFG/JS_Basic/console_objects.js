/*A web console is a tool that is mainly used to log information associated with a web page like, network requests, JavaScript, security errors, warnings, CSS, etc. It enables us to interact with a web page by executing JavaScript expressions in the contents of the page.

Console object: In JavaScript, a console is an object which provides access to the browser debugging console.*/

// // '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// // Logging messages
// console.log("This is a log message.");

// // Logging errors
// console.error("This is an error message.");

// // Logging warnings
// console.warn("This is a warning message.");

// // Logging objects
// const myObj = { name: "John", age: 30 };
// console.log("My object:", myObj);

// // Logging formatted messages
// const num1 = 10;
// const num2 = 20;
// console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}.`);

// // Grouping messages
// console.group("Grouped Messages");
// console.log("Message 1");
// console.log("Message 2");
// console.groupEnd();

// // Clearing the console
// console.clear();

// ''''''''''''''''''''''''''''''''''''
// The console.error() method in HTML is used to display an error message on the console. 
// The console.error() method is used for testing purposes. The error message is sent as a parameter to the console.error() method. 

// Parameters: This method accepts a single parameter message which is mandatory and used to hold the error message. 
/*<!DOCTYPE html>
<html>

<head>
	<title>DOM console.error() Method</title>
	<style>
		h1 {
			color: green;
		}
	</style>
</head>

<body>
	<h1>GeeksforGeeks</h1>
	<h2>DOM console.error() Method</h2>

	<p>
		To view the message in the console
		press the F12 key on your keyboard.
	</p>
	<p>
		To check for errors, double click
		the button below:
	</p><br>
	<button ondblclick="error_console()">
		Check Errors
	</button>
	<script>
		function error_console() {
			console.error("A mistake has been encountered.");
		}
	</script>
</body>

</html>
 */

// '''''''''''''''''''''''''console.warn()''''''''''''''''''''''''''''''''''''''''''''''
/*<!DOCTYPE html>
<html>

<head>
	<title>console.warn() Method</title>
	<style>
		h1 {
			color: green;
		}
		
		body {
			text-align: center;
		}
	</style>
</head>

<body>
	<h1>GeeksforGeeks</h1>
	<h2>HTML console.warn() Method</h2>
	<p>Press F12 to view the message</p>
	<script>
		console.warn
			("This is a warning message for geeksforgeeks!");
	</script>
</body>

</html>
 */

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
/* 1.console.assert(expression, message): The console.assert() static method writes an error message to the console if the assertion is false. 
If the assertion is true, nothing happens.*/
/*assert(assertion)

assert(assertion, obj1)
assert(assertion, obj1, obj2)
assert(assertion, obj1, obj2, /* …,  objN) 

assert(assertion, msg)
assert(assertion, msg, subst1)
assert(assertion, msg, subst1, /* …,  substN)
*/
console.assert(2 + 2 === 5, "Error: 2 + 2 is not equal to 5");

// 2.console.clear(): Clears the console.
// console.clear()

// 3.console.count(label): Logs the number of times count() has been called, optionally labeled with label.
for (let i = 0; i < 5; i++) {
	console.count();
	console.count("iteration");
  }
  
// // 4.console.countReset(label): Resets the counter for the given label.
// console.countReset("Iteration");

// 5.console.dir(obj [, options]): Displays an interactive list of the properties of the specified JavaScript object.
const myObject = { name: "John", age: 30 };
console.dir(myObject);
console.dir(myObject.name);

// 6.console.debug(obj1 [, obj2, ..., objN]): Outputs a message to the console with the log level "debug".
console.debug("Debugging message");

// // 7.console.dirxml(node): Prints an XML representation of a DOM node.
// const element = document.getElementById("myElement");
// console.dirxml(element);

// 8.console.error(obj1 [, obj2, ..., objN]): Outputs an error message.
const errorMessage = "This is an error message.";
console.error("Error:", errorMessage);

// 9.console.groupCollapsed(label): Creates a new inline group in the console, collapsed by default.
console.groupCollapsed("Collapsed Group:");
console.log("Message inside collapsed group");
console.groupEnd();

// 10.console.groupEnd(): Exits the current inline group in the console.
console.groupEnd();

// 11.console.info(obj1 [, obj2, ..., objN]): Informative logging of information. Equivalent to log().
console.info("Information message");

// 12.console.log(obj1 [, obj2, ..., objN]): Outputs a message to the console.
console.log("Hello, world!");

// 13.console.profile([label]): Starts recording a performance profile.
console.profile("MyProfile");
// Code to profile
console.profileEnd();

// 14.console.profileEnd(): Stops recording a performance profile.
console.profileEnd();

// 15.console.table(tabularData [, properties]): Displays tabular data as a table.
const myArray = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
console.table(myArray);

// 16.console.time(label): Starts a timer with a specified label.
console.time("MyTimer");
// Code to measure

// 17.console.timeEnd(label): Stops the specified timer and logs the elapsed time in 
console.timeEnd("MyTimer");

// 18.console.timeLog(label [, ...data]): Logs the value of the specified timer to the console, along with optional data.
console.timeLog("MyTimer", "Additional information");

// 19.console.trace(): Outputs a stack trace to the console.
function myFunction() {
	console.trace();
  }
  myFunction();

// 20.console.warn(obj1 [, obj2, ..., objN]): Outputs a warning message.
const warningMessage = "This is a warning!";
console.warn("Warning:", warningMessage);
