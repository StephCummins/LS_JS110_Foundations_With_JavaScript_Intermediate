/* PROBLEM

Write a function that takes an array of integers as input, multiplies all of the 
integers together, divides the result by the number of entries in the array, and 
returns the result as a string with the value rounded to three decimal places.

INPUT: Array of integers
OUTPUT: String (float rounded to three decimal places)

EXAMPLES/TEST CASES:
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

DATA STRUCTURE: 
- Array / String

ALGORITHM:
1) Invoke the function multiplicativeAverage and pass in array argument
2) Declare length variable and initialize to arr.length
3) Multiply all array elements together (use reduce) and save as result var
4) Divide the result by length
5) Use .toFixed(3) method on result to round to 3 decimal places
6) Convert result to string: String(result)
7) Return result

CODE:
*/

function multiplicativeAverage(arr) {
  let length = arr.length;
  
  let result = arr.reduce((result, element) => result * element);
  
  return String((result / length).toFixed(3));
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"