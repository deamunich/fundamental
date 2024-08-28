const message = "Hello, Purwadhika Students!";
const messageUppercase = message.toUpperCase(); // toUpperCase is to convert the variable to upper case letters
const messageLowercase = message.toLowerCase(); // toLowerCase is to convert the variable to lower case letters
const newMessage = message.replace("i", "a"); // replace is to replace string `i` with `a` in the message variable

console.log(messageUppercase);
console.log(messageLowercase);
console.log(newMessage);

console.log("Red Apple".replace("A", "I").toLowerCase()); // More concise code example
console.log("Red Apple".replaceAll("e", "i")); // replace all `e` with `i` in the message variable
console.log(message.charAt(12)); // chartAt is to obtain the 3rd character from the value of message variable
console.log("This is a message: ".concat(message)); // concat is to merge `This is a message` with the message variable

// Practice the backtick
let chat = `Hello,
World!`;
let name = `This is a message:  ${chat}`;
console.log(name);