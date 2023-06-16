/* PROBLEM:

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 
3, and so on) to the string representation of that integer.

INPUT: non-negative integer
OUTPUT: string representation of input integer

EXPLICIT RULES:
- You may not use any of the standard conversion functions available in JS, like 
  String(), Number.prototype.toString, or an expression such as '' + number. 

IMPLICIT RULES:
- Assume the input will always be a valid integer

EXAMPLES/TEST CASES:
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

DATA STRUCTURE:
- store string numbers in array:
  const NUMBER_ARRAY = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
- declare result variable and initialize to empty string (will be returned by
  function)

ALGORITHM:
1) Declare and initialize const NUMBER_ARRAY
2) Invoke integerToString function and pass integer as argument
3) Declare result variable and initialize to empty string
4) Run a Do/While loop: while (integer > 0)
    - To find the ones digit: let digit = integer % 10
    - Add NUMBER_ARRAY[digit] to result: result = NUMBER_ARRAY[digit] + result
    - Reassign the value of integer: (integer - digit) / 10
5) Return result

CODE:
 */

const NUMBER_ARRAY = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(integer) {
  let result = "";
  do {
    let digit = integer % 10;
    result = NUMBER_ARRAY[digit] + result;
    integer = (integer - digit) / 10;
  } while (integer > 0);
  return result;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"

