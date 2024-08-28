console.log("Hello, World!");

// This is how you can write your own comments in your code
/* This is how you can write your own comments in your code in multiple lines */

let message;
message = "This is to test my first variable using Let";
console.log(message);

let words = "This is words variable"; // This is the original `words` variable

var globalVariable = "Hello, World! This is to test my first variable using Var";
console.log(globalVariable);

const constant = "This is constant variable";
console.log(constant);

words = "This is words variable, but revised";
console.log(words); // This is the `words` variable that will be printed in the Terminal

let a = 10;
var b = 20;

{
    let a = 30;
    var b = 100;
}

console.log(a, b);
