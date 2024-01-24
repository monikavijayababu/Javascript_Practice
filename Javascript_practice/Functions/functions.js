/* Funtions */

// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Functions(ES6 +)
// 4. Default Parameters(ES6 +)
// 5. Rest Parameters(ES6 +)
// 6. Higher - Order Functions
// 7. Closures

/* 1. Function Declaration */

// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function invocation
let greeting = greet("John");
console.log(greeting); // Output: Hello, John!


/* 2. Function Expression */

// Function expression
let multiply = function (x, y) {
    return x * y;
};

// Function invocation
let result = multiply(5, 3);
console.log(result); // Output: 15


/* 3. Arrow Functions(ES6 +) */

// Arrow function
let add = (a, b) => a + b;

// Function invocation
let sum = add(2, 3);
console.log(sum); // Output: 5


/* 4. Default Parameters(ES6 +) */

// Function with default parameter
function greet(name = "Guest") {
    return "Hello, " + name + "!";
}

let greetings = greet(); // Uses the default parameter
console.log(greetings); // Output: Hello, Guest!


/* 5. Rest Parameters(ES6 +) */

// Function with rest parameter
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

let total = sumAll(1, 2, 3, 4, 5);
console.log(total); // Output: 15


/* 6. Higher - Order Functions */

// Higher-order function
function operate(a, b, operation) {
    return operation(a, b);
}

// Functions to pass as arguments
let adds = (x, y) => x + y;
let multiplys = (x, y) => x * y;

// Using the higher-order function
console.log(operate(3, 4, adds));      // Output: 7
console.log(operate(3, 4, multiplys)); // Output: 12


/* 7. Closures */

function outerFunction(x) {
    return function (y) {
        return x + y;
    };
}

let add5 = outerFunction(5);
console.log(add5(3)); // Output: 8
