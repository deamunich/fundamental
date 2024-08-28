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
