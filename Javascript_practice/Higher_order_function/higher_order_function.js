/* Higher_Order_Function */

// 1. Functions as Arguments
// 2. Functions as Return Values
// 3. Array Higher-Order Functions
// 4. Filter and Reduce

/* 1. Functions as Arguments */

function greet(name) {
    return 'Hello, ' + name + '!';
}

function welcomeUser(greetingFunction, userName) {
    return greetingFunction(userName);
}

const result = welcomeUser(greet, 'John');
console.log(result); // Output: Hello, John!



/* 2. Functions as Return Values */

// Returning a function from another function
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const multiplyByTwo = multiplier(2);
console.log(multiplyByTwo(5)); // Output: 10



/* 3. Array Higher-Order Functions */

// Array map() function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function (number) {
    return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


/* 4. Filter and Reduce */

//Array filter() function
const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

//Array reduce() function
const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15


