/* ES6 Modules */
// 1. Exporting from a Module
// 2. Importing into a Module
// 3. Default Exports
// 4. Combining Named and Default Exports
// 5. Dynamic Imports

/* 1. Exporting from a Module */

// // Exporting individual features
// export const myVariable = 'Hello, World!';
// export function myFunction() {
//     console.log('This is a function.');
// }
// // Exporting a class
// export class MyClass {
//     constructor() {
//         console.log('An instance of MyClass is created.');
//     }
// }



/* 2. Importing into a Module */

// Importing individual features
import { myVariable, myFunction } from './main.js';
// Importing a class
import { MyClass } from './main.js';
console.log(myVariable); // Output: Hello, World!
myFunction(); // Output: This is a function.
const myInstance = new MyClass(); // Output: An instance of MyClass is created.



/* 3. Default Exports */

// Exporting a default value
const myDefaultExport = 'I am the default export.';
export default myDefaultExport;



/* 4. Combining Named and Default Exports */

// // Exporting a default value
// const myDefaultExport1 = 'I am the default export.';
// export default myDefaultExport1;
// // Exporting other features
// export const namedExport = 'I am a named export.';

/* 5. Dynamic Imports */