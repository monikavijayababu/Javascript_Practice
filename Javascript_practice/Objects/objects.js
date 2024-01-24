/* Objects */

// 1. Object Literal
// 2. Accessing Properties
// 3. Adding and Modifying Properties
// 4. Methods
// 5. Object Constructor
// 6. Object Methods and Prototypes
// 7. JSON (JavaScript Object Notation)



/* 1. Object Literal */

let person = {
    name: 'John',
    age: 30,
    isStudent: false
};


/* 2. Accessing Properties */

console.log(person.name); // John
console.log(person['age']); // 30


/* 3. Adding and Modifying Properties */

person.gender = 'Male'; // Adding a new property
person.age = 31; // Modifying an existing property


/* 4. Methods */

let car = {
    brand: 'Toyota',
    model: 'Camry',
    start: function () {
        console.log('Engine started.');
    }
};
car.start();// Engine started.


/* 5. Object Constructor */

function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person1 = new Person('Alice', 25);


/* 6. Object Methods and Prototypes */

Person.prototype.sayHello = function () {
    console.log('Hello, my name is ' + this.name);
};
person1.sayHello();   // Hello, my name is Alice


/* 7. JSON (JavaScript Object Notation) */

let jsonString = '{"name": "Bob", "age": 28}';
let parsedObject = JSON.parse(jsonString);