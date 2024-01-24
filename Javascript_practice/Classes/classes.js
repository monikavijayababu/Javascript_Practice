/* Classes */
// 1. Class Declaration
// 2. Class Expression
// 3. Inheritance

/* 1. Class Declaration */
// Class declaration
class Animal {
    // Constructor method for initializing object properties
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    // Method within the class
    makeSound() {
        console.log('Generic animal sound');
    }
}
// Creating an instance of the class
let myAnimal = new Animal('Lion', 'Mammal');
// Accessing properties and invoking methods
console.log(myAnimal.name);  // Output: Lion
console.log(myAnimal.species);  // Output: Mammal
myAnimal.makeSound();  // Output: Generic animal sound



/* 2. Class Expression */

// Class expression
let Plant = class {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    grow() {
        console.log('The plant is growing');
    }
};
let myPlant = new Plant('Sunflower', 'Annual');
console.log(myPlant.name);  // Output: Sunflower
console.log(myPlant.type);  // Output: Annual
myPlant.grow();  // Output: The plant is growing



/* 3. Inheritance */

// Inheritance with extends keyword
class Dog extends Animal {
    constructor(name, breed) {
        // Calling the parent class constructor using super
        super(name, 'Dog');
        this.breed = breed;
    }

    // Overriding the makeSound method
    makeSound() {
        console.log('Woof! Woof!');
    }
    // Additional method in the derived class
    fetch() {
        console.log(`${this.name} is fetching.`);
    }
}
let myDog = new Dog('Buddy', 'Golden Retriever');
console.log(myDog.name);  // Output: Buddy
console.log(myDog.species);  // Output: Dog
console.log(myDog.breed);  // Output: Golden Retriever
myDog.makeSound();  // Output: Woof! Woof!
myDog.fetch();  // Output: Buddy is fetching.
