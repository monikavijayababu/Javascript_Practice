/* Error_Handling */
// 1. Try...Catch Statement
// 2. Throw Statement
// 3. Error Object
// 4. Promise Error Handling
// 5. Async/Await Error Handling


/* 1. Try...Catch Statement */

try {
    // Code that might throw an exception
    // let a = 10
    let result = a + 10;
    console.log("This line will be executed if there is no exception.");
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    // executed whether an exception occurs or not
    console.log("This line will always be executed.");
}



/* 2. Throw Statement */

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    return a / b;
}

try {
    // Attempting to divide 10 by 0 will throw an exception
    let result = divide(10, 0);
    console.log("Result:", result);  // This line will not be executed
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("This line will always be executed.");
}


/* 3. Error Object */

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

try {
    throw new CustomError('This is a custom error');
} catch (error) {
    if (error instanceof CustomError) {
        console.error('Caught a custom error:', error.message);
    } else {
        console.error('Caught an error:', error.message);
    }
}



/* 4. Promise Error Handling */

fetch('http://example.com/movies.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));


/* 5. Async/Await Error Handling */

async function fetchData() {
    try {
        const response = await fetch('http://example.com/movies.json');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchData();

