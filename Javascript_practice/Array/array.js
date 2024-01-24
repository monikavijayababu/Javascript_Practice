/* Array */

// 1. Accessing Elements
// 2. Modifying Elements
// 3. Array Length
// 4. Adding and Removing Elements
// 5. Iterating Over Arrays
// 6. Array Methods
// 7. Multi-dimensional Arrays


/* Creating Arrays: */

// Array literal
let fruits = ["apple", "orange", "banana"];

// Using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5);


/* 1. Accessing Elements */

console.log(fruits[0]); // Output: "apple"
console.log(numbers[2]); // Output: 3


/* 2. Modifying Elements */

fruits[1] = "grape";
console.log(fruits); // Output: ["apple", "grape", "banana"]


/* 3. Array Length */

console.log(fruits.length); // Output: 3



/* 4. Adding and Removing Elements */

// Adding elements
fruits.push("kiwi"); // Adds to the end
fruits.unshift("pineapple"); // Adds to the beginning

// Removing elements
let removedFruit = fruits.pop();  // Removes from the end
let shiftedFruit = fruits.shift();  // Removes from the beginning
console.log(fruits); // Output: ["pineapple", "apple", "grape", "banana"]



/* 5. Iterating Over Arrays */

// Using a for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach
fruits.forEach(function (fruit) {
    console.log(fruit);
});



/* 6. Array Methods */

// Using map to create a new array
let doubledNumbers = numbers.map(function (num) {
    return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


/* 7. Multi-dimensional Arrays */
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // Output: 6
