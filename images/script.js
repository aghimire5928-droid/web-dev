console.log("External script loaded successfully!");
const x = "Arjun";
console.log(x);

const a = 5;
const b = 10;
const sum = a + b;
console.log("sum:", sum);

const multiply = a * b;
console.log("Product:", multiply);

const remainder = a % b;
console.log("Remainder:", remainder);

// if p=7, q=8, r=9. Find if they are even or odd
const p = 7;
const q = 8;
const r = 9;

if (p % 2 == 0) {
    console.log(p + " is an even number");
} else {
    console.log(p + " is an odd number");
}

if (q % 2 == 0) {
    console.log(q + " is an even number");
} else {
    console.log(q + " is an odd number");
}

if (r % 2 == 0) {
    console.log(r + " is an even number");
} else {
    console.log(r + " is an odd number");
}

let num = 5;
if (num === 5) {
    console.log("number");
} else if (num == 5) {
    console.log("string");
}

function displayname(name) {
    console.log("My name is", name);
}
displayname("Shivnarayan");

function sum2(a, b) {
    console.log("The sum is:", a + b);
}
sum2(4, 10);

function product(a, b) {
    console.log("The product is:", a * b);
}
product(4, 10);

function remainderFn(a, b) {
    console.log("The remainder is:", a % b);
}
remainderFn(4, 10);

function checkEvenOdd(num) {
    return num % 2;
}

let x2 = 5;
let result = checkEvenOdd(x2);
if (result == 0) {
    console.log(x2 + " is an even number");
} else {
    console.log(x2 + " is an odd number");
}

// Check even/odd using prompt/alert (only works in browser, not Node.js)
let userInput = prompt("Enter any number to check odd or even");
let result2 = checkEvenOdd(userInput);
if (result2 == 0) {
    alert(userInput + " is an even number");
} else {
    alert(userInput + " is an odd number");
}

// for loop with break
let i;
for (i = 0; i < 10; i++) {
    if (i == 3) break;
    console.log(`The value of i is ${i}`);
}
console.log(`The value of i is ${i}`);

// for loop with continue
for (i = 1; i <= 10; i++) {
    if (i == 3) continue;
    console.log(`2 × ${i} = ${2 * i}`);
}

// while loop - multiplication table of 2
let j = 1;
while (j <= 10) {
    console.log(`2 × ${j} = ${2 * j}`);
    j++;
}

// while loop - multiplication table of user input number
// NOTE: type an actual number (e.g. 5) in the prompt box, or this will show 0 × n = 0
let tableNum = Number(prompt("Enter a number:"));
let k = 1;
while (k <= 10) {
    console.log(`${tableNum} × ${k} = ${tableNum * k}`);
    k++;
}

// Arrays - basic access
let fruitsBasic = ["Apple", "Mango", "Banana"];
console.log(fruitsBasic[0]);
console.log(fruitsBasic[1]);
console.log(fruitsBasic[2]);

// Arrays - push and pop (fixed logic)
let fruits = ["Apple", "Mango", "Banana", "Orange"];
fruits.push("Guava");

// Step 1: print all fruits first
console.log("All fruits:");
for (let m = 0; m < fruits.length; m++) {
    console.log(fruits[m]);
}
console.log("Total fruits:", fruits.length);

// Step 2: now remove them one by one
console.log("Removing fruits one by one:");
while (fruits.length > 0) {
    console.log("Removed:", fruits.pop());
}

console.log("Fruits array after popping all:", fruits);