// Exporting individual features
export const myVariable = 'Hello, World!';
export function myFunction() {
    console.log('This is a function.');
}
// Exporting a class
export class MyClass {
    constructor() {
        console.log('An instance of MyClass is created.');
    }
}

/* 3. Default Exports */

// Importing the default export
import DE from './myModule';
console.log(DE); // Output: I am the default export.


/* 4. Combining Named and Default Exports */
// Importing the default and named exports
import DE1, { namedExport } from './myModule';
console.log(DE1); // Output: I am the default export.
console.log(namedExport); // Output: I am a named export.



/* 5. Dynamic Imports */
// Dynamic import syntax
import('./myModule')
    .then(module => {
        console.log(module.myVariable);
    })
    .catch(error => {
        console.error('Error loading module:', error);
    });
