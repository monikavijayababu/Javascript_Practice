/* Web Storage */
// 1. localStorage
// 2. sessionStorage

/* 1. localStorage */


localStorage.setItem('name', 'moni');// Storing data in localStorage

const storedValue = localStorage.getItem('name');// Retrieving data from localStorage
console.log(storedValue);  // Output: value

localStorage.removeItem('name');// Removing data from localStorage

localStorage.clear();// Clearing all data in localStorage



/* 2. sessionStorage */

// Storing data in sessionStorage
sessionStorage.setItem('name', 'moni');

// Retrieving data from sessionStorage
const storedValue1 = sessionStorage.getItem('name');
console.log(storedValue1);  // Output: value

// Removing data from sessionStorage
sessionStorage.removeItem('name');

// Clearing all data in sessionStorage
sessionStorage.clear();


/* Using JSON for Complex Data */

const user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieving and parsing the object from localStorage
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser);  // Output: { name: 'John', age: 30 }



/* Storage Event */

// Listen for the storage event
window.addEventListener('storage', function (event) {
    console.log(`Storage event: key ${event.key} changed from ${event.oldValue} to ${event.newValue}`);
});
localStorage.setItem('name', 'Moni');

localStorage.setItem('name', 'Moni Updated');

