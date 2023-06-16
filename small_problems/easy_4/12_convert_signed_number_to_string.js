/* PROBLEM:

In the previous two exercises, you developed functions that convert simple 
numeric strings to signed integers. In this exercise and the next, you're going 
to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, 
and so on) to the string representation of that integer.

INPUT: non-negative integer
OUTPUT: string representation of input integer

EXPLICIT RULES:
- You may not use any of the standard conversion functions available in JS, such 
as String(), Number.prototype.toString, or an expression such as '' + number. 

EXAMPLES/TEST CASES:
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

DATA STRUCTURE:
- store string numbers in array:
  const NUMBER_ARRAY = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
- resuse integerToString function from problem 11
- use a switch statement to account for signed integers:
  - case - 
  - case +
  - case default
  
ALGORITHM:
1) Declare/initialize const NUMBER_ARRAY array
2) Invoke the signedIntegerToString function and pass integer as argument
3) Use a switch statement with three different cases:
    1) Integer has a - sign
        return `-${integerToString(-integer)}`
    2) Integer has a + sign
        return `+${integerToString(+integer)}`
    3) Default (integer has no sign)
        return integerToString(integer)
4) Within each of the cases, the integerToString() function from the previous
   exercise was invoked. This will do the rest of the work.
    
CODE:
*/

const NUMBER_ARRAY = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function signedIntegerToString(integer) {
  switch (Math.sign(integer)) {
    case -1:
      return `-${integerToString(-integer)}`;
    case +1:
      return `+${integerToString(integer)}`;
    default:
      return integerToString(integer);
  }
}

function integerToString(integer) {
  let result = "";
  do {
    let digit = integer % 10;
    result = NUMBER_ARRAY[digit] + result;
    integer = (integer - digit) / 10;
  } while (integer > 0);
  return result;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
