/* var declaration*/
var x = 10;
console.log(`var of x = ${x}`);

/* let declaration*/
let y = 20;
console.log(`let of y = ${y}`);

/* const declaration*/
const PI = 3.14;
console.log(`const of PI = ${PI}`);

/* variables :*/
// 1. Global variable 
// 2. Local varible

/* Local variables :*/
// 1. Block scope 
// 2. Function scope

/*1.Block scope*/
let a = 30;
{
    let a = 40;
    console.log(`Block scope of a = ${a}`);

}

/* 2.Function scope*/
let b = 50;
function f1() {
    let b = 60;
    console.log(`Function scope of b = ${b}`);

}

f1();
