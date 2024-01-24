/* 1. Arithmetic Operator */

let a = 5;
let b = 2;

console.log(a + b); // Addition: 7
console.log(a - b); // Subtraction: 3
console.log(a * b); // Multiplication: 10
console.log(a / b); // Division: 2.5
console.log(a % b); // Modulus: 1
console.log(a ** b); // Exponentiation: 25

/* 2. Arithmetic Operator */

// Initializing variables
let c = 5;
let d = 3;
let result;

console.log(`result = ${result = c + d}`); // Basic assignment : 8

result += 2; // Addition assignment : 10 (8 + 2)

result -= 4; // Subtraction assignment : 6 (10 - 4)

result *= 3; // Multiplication assignment : 18 (6 * 3)

result /= 2; // Division assignment : 9 (18 / 2)

result %= 5; // Modulus assignment : 4 (9 % 5)

result **= 2; // Exponentiation assignment 16 (4^2)

console.log(result); // Output: 16


/* 3. Comparison Operators: */
let p = 10;
let q = 5;

console.log(p > q); // Greater than: true
console.log(p < q); // Less than: false
console.log(p >= q); // Greater than or equal to: true
console.log(p <= q); // Less than or equal to: false
console.log(p === q); // Equal to: false
console.log(p !== q); // Not equal to: true


/* 4. Logical Operators */
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // Logical AND: false
console.log(isTrue || isFalse); // Logical OR: true
console.log(!isTrue); // Logical NOT: false

/* 5. Unary Operators */
let num = 5;

console.log(-num); // Unary negation: -5
console.log(++num); // Increment: 6
console.log(--num); // Decrement: 5

/* 6.Conditional (Ternary) Operator*/
let age = 20;
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult); // Output: Adult

