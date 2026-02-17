// 1 to 50 numbers

const { useActionData } = require("react-router-dom");

for (let i = 0; i <= 50; i++) {
  console.log(i);
}

// array student names

let arr = ["ram", "shyam", "Shambhoo", "Govind", "Brahma", "vishnu", "mahesh"];
console.log(arr);

//Fibonacci sequence

// first 10 numbers
let n = 10;

let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let i = 0; i < n - 2; i++) {
  let next = first + second;
  console.log(next);

  first = second;
  second = next;
}

//multiplication table

let usersNum = 5; // you can check according to this value , simply change the value and try .

for (let i = 1; i <= 10; i++) {
  // multiplication count
  let ans = usersNum * i;

  console.log(usersNum, i, ans);
}

// ittrate through the arrays and calculate the sum

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (i = 0; i < arr1.length; i++) {
  arr1[i] += 1;
  sum += arr1[i];
}

console.log(sum);
