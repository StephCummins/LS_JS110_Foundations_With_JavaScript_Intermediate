/* PROBLEM:

Write a function that takes an integer argument and returns an array 
containing all integers between 1 and the argument (inclusive), in ascending 
order.

INPUT: integer
OUTPUT: array containing all integers between 1 and input (inclusive)

EXPLICIT RULES:
- array should be in ascending order
- You may assume that the argument will always be a positive integer.

EXAMPLES/TEST CASES:
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

DATA STRUCTURE:
- Input integer
- Output array
- Use a for loop to count from 1 to input integer, and populate array with each
  integer

ALGORITHM:
1) Invoke the function sequence and pass in the input integer as an argument
2) Declare result and initialize to empty array []
3) Iterate int numbers of times using a for loop. Start the counter at 1. On 
   each iteration:
    - add the counter value to the result array
4) return result

CODE:  
*/

function sequence(int) {
  let result = [];
  
  for (let currentInt = 1; currentInt <= int; currentInt += 1) {
    result.push(currentInt);
  }
  
  return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]