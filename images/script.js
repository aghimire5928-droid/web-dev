console.log("hello");
const x = "kastuv";

// sum
console.log(x);
const a = 5;
const b = 6;
const totalSum = a + b;
console.log("sum:", totalSum);

// product
console.log(x);
const c = 2;
const d = 4;
const totalProduct = c * d;
console.log("product:", totalProduct);

// even or odd
const evenOddX = 7;
const evenOddY = 8;
const evenOddZ = 9;

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " is even");
  } else {
    console.log(num + " is odd");
  }
}

checkEvenOdd(evenOddX);
checkEvenOdd(evenOddY);
checkEvenOdd(evenOddZ);

// number
let num = 5;
if (num === 5) {
  console.log("number");
} else if (num == 5) {
  console.log("string");
}

// function
function displayName() {
  console.log("akrantee");
}

displayName();

// create a function for sum, product, difference
function sum(x, y) {
  console.log("the sum is :", x + y);
}
sum(2, 10);

function product(x, y) {
  console.log("the product is :", x * y);
}
product(2, 10);

function difference(x, y) {
  console.log("the difference is :", x - y);
}
difference(2, 10);


//let u = 5;
let u = prompt("enter any number to check odd or even");
let result = checkEvenOdd(u);
if (result == 0) {
   // console.log(u + " is an even number");
   alert(u + "is an even number");
} else {
  //  console.log(u + " is an odd number");
  alert(u + "is an even number");
}

//create a function to check if a number is even or odd
function checkEvenOdd(num){
    return num % 2;
}