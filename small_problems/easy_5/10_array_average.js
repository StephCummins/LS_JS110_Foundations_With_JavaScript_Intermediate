/* PROBLEM:

Write a function that takes one argument, an array of integers, and returns the 
average of all the integers in the array, rounded down to the integer component 
of the average. 

INPUT: Array of integers
OUTPUT: Single integer (average of all integers, rounded down)

EXPLICIT RULES:
- the array will never be empty
- the numbers will always be positive integers

EXAMPLES/TEST CASES:
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

DATA STRUCTURE:
- Array

ALGORITHM:
1) Invoke average and pass in the array argument to the function
2) Declare/initialize length variable: let length = arr.length
3) Use reduce to add all integers from arr together; save final number as result
4) Divide result by length
5) Use Math.floor to round result down
6) Return result

CODE:
*/

function average(arr) {
  let length = arr.length;
  let result = arr.reduce((accum, currentVal) => accum + currentVal);
  return (Math.floor(result / length));
}

/* Solution 2: Using forEach

function average(arr) {
  let result = 0;
  arr.forEach(element => result += element);
  return (Math.floor(result / arr.length));
} */

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40