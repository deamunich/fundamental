console.log(2 + 10);
console.log(10 - 2);
console.log(10 * 10);
console.log(2 ** 10);
console.log(10 / 2);
console.log(10 % 2);
console.log(10 % 6);
console.log(3 % 10);
console.log(5 % 10);

// Using + to concatenate
console.log("Hello, " + "World!");
console.log("30" + "20");
console.log(1 + 1 + "1");

// However, it will follow mathematical rule for * and -
console.log("30" * "20");
console.log("20" - "40");

//HOWEVER, JS reads from the left and thinks that it will be a string data, so JS will concatenate the value
console.log("1" + 1 + 1);

console.log(null + 0);

//Modify in place
let n = 10;
n = n * 2;
n *= 2; // This is the short version to multiply `n` by 2
n += 15; // This is the short version to add `n` by 2
console.log("Modify in place: " + n);

// Increment and decrement operators - only applicable for addition & subtraction
let count = 1;
count += 1;
count++ // increment
console.log("Increment: " + count);
count-- // decrement
console.log("Decrement: " + count);

// postFix & preFix operators
let preCounter = 1;
console.log("preCounter: " + ++preCounter); // can immediately get the final result

let postCounter = 1;
console.log("postCounter: " + postCounter++); // cannot get the final result, print the previous value but it actually runs the code
console.log(postCounter);

// Comparison operators
console.log(5 == "5");
console.log(5 === "5");
