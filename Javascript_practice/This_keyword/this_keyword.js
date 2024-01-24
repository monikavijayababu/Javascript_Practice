/* 'This keyword' */
// 1. Global Context
// 2. Function Context
// 3. Method Context
// 4. Constructor Context
// 5. Event Handlers
// 6. Explicit Binding

/* 1. Global Context */

console.log(this === window); // Output: true (in a browser environment)


/* 2. Function Context */

function exampleFunction() {
    console.log(this);
}

exampleFunction(); // Output: window (in a browser environment)


/* 3. Method Context */

const myObject = {
    myMethod: function () {
        console.log(this);
    }
};

myObject.myMethod(); // Output: myObject


/* 4. Constructor Context */

function MyClass() {
    this.myProperty = 'Hello';
}

const myInstance = new MyClass();
console.log(myInstance.myProperty); // Output: Hello

/* 5. Event Handlers */

{/* <button onclick="console.log(this)">Click me</button> */ }


/* 6. Explicit Binding */

function greet() {
    console.log('Hello, ' + this.name);
}

const person = { name: 'John' };

greet.call(person); // Output: Hello, John

