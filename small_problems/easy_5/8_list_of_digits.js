/* PROBLEM:

Write a function that takes one argument, a positive integer, and returns a list 
of the digits in the number.

INPUT: Positive integer
OUTPUT: Array of digits

EXAMPLES/TEST CASES:
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

DATA STRUCTURE:
- Array

ALGORITHM:
1) Invoke digitList and pass integer argument to function
2) Declare arr and initialize to empty array []
3) Use a do/while loop to run while int > 0:
    - isolate the digit in the ones place: let num = int % 10
    - unshift num to arr to add it to front index of array
    - reassign int to (int - num) / 10
4) Return arr

CODE:
*/

// SOLUTION 1:
function digitList(int) {
  let arr = [];
  do {
    let num = int % 10;
    arr.unshift(num);
    int = (int - num) / 10;
  } while (int > 0);
  return arr;
}

/* SOLUTION 2:
function digitList(int) {
  let arr1 = String(int).split("");
  let arr2 = arr1.map(element => Number(element));
  return arr2;
}
*/


console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]