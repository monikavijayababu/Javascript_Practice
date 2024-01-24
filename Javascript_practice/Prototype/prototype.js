/* Prototype */
// 1. Object Prototypes
// 2. Prototype Chain
// 3. Constructor Functions
// 4. Prototype Property
// 5. Object.create Method
// 6. ES6 Classes

/* 1. Object Prototypes */
/* 2. Prototype Chain */
/* 3. Constructor Functions */

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating instances
let person1 = new Person('Alice', 25);
let person2 = new Person('Bob', 30);
console.log(person1.name);  // Output: Alice
console.log(person2.age);   // Output: 30



/* 4. Prototype Property */

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
};

person1.sayHello();  // Output: Hello, my name is Alice


/* 5. Object.create Method */

let animal = {
    makeSound: function () {
        console.log('Some generic sound');
    }
};
let dog = Object.create(animal);
dog.makeSound();  // Output: Some generic sound



/* 6. ES6 Classes */

class Animal {
    constructor(sound) {
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}
class Dog extends Animal {
    constructor() {
        super('Woof! Woof!');
    }
}
let myDog = new Dog();
myDog.makeSound();  // Output: Woof! Woof!
