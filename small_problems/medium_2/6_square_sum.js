/* PROBLEM:

Write a function that computes the difference between the square of the sum of 
the first count positive integers and the sum of the squares of the first count 
positive integers.

INPUT: integer
OUTPUT: integer

EXAMPLES/TEST CASES:

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

DATA STRUCTURE: Use loops to iterate from 1 to number amount of times
- Use three different functions, each one to calculate a different aspect of 
  the problem:
  1) sumSquareDifference: sumSquare(number) - squareSum(Number)
  2) sumSquare(number)
  3) squareSum(number)

ALGORITHM:
1) Invoke sumSquareDifference and pass in the input number as the argument
2) Return the following value: sumSquare(number) - squareSum(number):
3) sumSquare(number):
   - Declare total variable and initialize to 0
   - Use a for loop to iterate number amount of times. Start the count at 1 and
     increment by 1 each iteration. 
     - total += count each iteration
   - Square the total
   - Return the total
4) squareSum(number):
   - Declare total variable and initialize to 0
   - Use a for loop to iterate total amount of times. Start the count at 1 and 
     increment by 1 each iteration:
     - total += count squared each iteration
   - Return the total

CODE:
*/

let sumSquareDifference = number => sumSquare(number) - squareSum(number);

function sumSquare(number) {
  let total = 0;
  for (let count = 1; count <= number; count++) {
    total += count;
  }
  return total**2;
}

function squareSum(number) {
  let total = 0;
  for (let count = 1; count <= number; count++) {
    total += (count**2);
  }
  return total;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150