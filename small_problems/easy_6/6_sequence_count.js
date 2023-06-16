/* PROBLEM:

Create a function that takes two integers as arguments. The first argument is a 
count, and the second is the starting number of a sequence that your function 
will create. The function should return an array containing the same number of 
elements as the count argument. The value of each element should be a multiple 
of the starting number.

INPUT: two integers
1) count
2) starting number of a sequence

OUTPUT: array with count amount of elements; each element will be a multiple of
the starting number

EXPLICIT RULES:
- You may assume that the count argument will always be an integer greater than 
  or equal to 0. 
- The starting number can be any integer. 
- If the count is 0, the function should return an empty array.

EXAMPLES/TEST CASES:
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

DATA STRUCTURE:
- result array [] for all integers to be added to
- use a for loop to iterate through count amount of integers

ALGORITHM:
1) Invoke the function sequence and pass in two arguments: count, startingNumber
2) Declare result variable and initialize to empty array []
3) Use a for loop that iterates count amount of times:
    - Declare multiplier and initialize to 1; this will increment by 1 each time
      the for loop runs
    - On each loop iteration: startingNumber * multipler, then add the value to
      the result array
4) Return result

CODE:
*/

function sequence(count, startingNumber) {
  let result = [];
  
  for (let multiplier = 1; multiplier <= count; multiplier += 1) {
    result.push(startingNumber * multiplier);
  }
  
  return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
