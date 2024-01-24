/* Destructuring */

// 1. Array Destructuring
// 2. Object Destructuring
// 3. Function Parameter Destructuring

/* 1. Array Destructuring */


/* 1.1 Basic Syntax */

let numbers = [1, 2, 3];
// Destructuring assignment
let [a, b, c] = numbers;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3


/* 1.2 Skipping Elements */

let [first, , third] = numbers;

console.log(first); // Output: 1
console.log(third); // Output: 3


/* 1.3 Default Values */

let [x = 0, y = 0] = [1];

console.log(x); // Output: 1
console.log(y); // Output: 0



/* 2. Object Destructuring */

/* 2.1 Basic Syntax */
let person = { name1: 'John', age1: 30 };
// Destructuring assignment
let { name1, age1 } = person;
console.log(name1); // Output: John
console.log(age1);  // Output: 30


/* 2.2 Variable Renaming */
let { name1: personName, age1: personAge } = person;

console.log(personName); // Output: John
console.log(personAge);  // Output: 30


/* 2.3 Default Values */


let { name2 = 'DefaultName', age2 = 25 } = {};

console.log(name2); // Output: DefaultName
console.log(age2);  // Output: 25


/* 3. Function Parameter Destructuring */

// Destructuring in function parameters
function printPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

let person1 = { name: 'Alice', age: 25 };
printPerson(person1);
// Output: Name: Alice, Age: 25






