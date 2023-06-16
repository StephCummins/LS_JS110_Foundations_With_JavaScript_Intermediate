/* PROBLEM:
Write a function that takes an array of numbers and returns an array with the 
same number of elements, but with each element's value being the running total 
from the original array.

INPUT: Array of numbers
OUTPUT: New array of numbers

EXPLICIT RULES
- Function returns array with same number of elements
- Each element's value should be running total from original array

IMPLICIT RULES
- Empty array returns empty array

EXAMPLES/TEST CASES:
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

DATA STRUCTURE:
- function runningTotal() with parameter arr []
- return new array: totalArr []
- Use reduce array method on originalArray
- Push new elements to new return array

ALGORITHM
1) Invoke runningtotal function and pass in array as argument
2) Declare totalArr and initialize to empty array []
3) Call reduce array method on arr:
    - Callback funtion has two arguments, accumulator, currentValue
    - Initial value = 0;
    - The callback function is called on each element of arr. Each iteraation:
      - add the sum of the accumulator + currentValue to totalArr (push)
      - return accumulator + currentValue
4) Return totalArr
*/

// SOLUTION 1: reduce method

function runningTotal(arr) {
  let totalArr = [];
  
  arr.reduce((accumulator, currentValue) => {
    totalArr.push(accumulator + currentValue);
    return accumulator + currentValue;
  }, 0);
  
  return totalArr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

/* SOLUTION 2: map method

function runningTotal(arr) {
  let total = 0;
  return arr.map((element) => total += element);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

*/