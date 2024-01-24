function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}

// Assigning the inner function to a variable
let closureFunction = outerFunction();

// Invoking the inner function, which still has access to outerVariable
closureFunction();


/*  demonstrating the use of closures for creating private variables */
function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}
let counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3


