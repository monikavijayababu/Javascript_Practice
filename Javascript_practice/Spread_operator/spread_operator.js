/* Spread operator */
// 1. Spread with Arrays
// 2. Spread with Objects
// 3. Spread in Function Arguments
// 4. Spread for Cloning and Immutability

/* 1. Spread with Arrays */

/* 1.1 Copying Arrays */
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]


/* 1.2 Concatenating Arrays */

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]

/* 1.3 Adding Elements to an Array */

const originalArray1 = [1, 2, 3];
const newArray = [...originalArray1, 4, 5];
console.log(newArray); // [1, 2, 3, 4, 5]


/* 2. Spread with Objects */

/* 2.1 Copying Objects */


const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // { a: 1, b: 2 }



/* 2.2 Merging Objects */

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // { a: 1, b: 3, c: 4 }



/* 3. Spread in Function Arguments */

const numbers = [1, 2, 3];

// Math.max function expects individual arguments, not an array
const maxNumber = Math.max(...numbers);
console.log(maxNumber); // 3



/* 4. Spread for Cloning and Immutability */

const originalArray2 = [1, 2, 3];
const newArray2 = [...originalArray2]; // Copying array

const originalObject3 = { a: 1, b: 2 };
const newObject = { ...originalObject3 }; // Copying object
