/* Control Flow */
// 1. if...else Statements
// 2. Switch Statement
// 3. for Loop
// 4. while Loop
// 5. do...while Loop
// 6. for...in Loop
// 7. for...of Loop
// 8. Break and Continue

/* 1. if...else Statements */
let x = 10;

if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is not greater than 5");
}


/* 2. Switch Statement */
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Friday":
        console.log("It's almost the weekend");
        break;
    default:
        console.log("It's an ordinary day");
}


/* 3. for Loop */
for (let i = 0; i < 5; i++) {
    console.log(i);
}


/* 4. while Loop */

let count = 0;

while (count < 3) {
    console.log("Count: " + count);
    count++;
}


/* 5. do...while Loop */

let i = 0;

do {
    console.log(i);
    i++;
} while (i < 3);


/* 6. for...in Loop */

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}


/* 7. for...of Loop */
let fruits = ["apple", "orange", "banana"];

for (let fruit of fruits) {
    console.log(fruit);
}


/* 8. Break and Continue */
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Exit the loop when i is 3
    }
    console.log(i);
}

for (let j = 0; j < 5; j++) {
    if (j === 3) {
        continue; // Exit the loop when i is 3
    }
    console.log(j);
}

