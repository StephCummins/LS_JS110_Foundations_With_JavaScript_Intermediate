/* PROBLEM:

Write a function that takes a string of digits and returns the appropriate 
number as an integer. 

INPUT: string of digits
OUT: string as an integer

EXPLICIT RULES:
- The string may have a leading + or - sign:
  - if the first character is a +, your function should return a positive number
  - if it is a -, your function should return a negative number. 
  - If there is no sign, return a positive number. 

EXAMPLES/TEST CASES:
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

DATA STRUCTURE: Input string / output integer

ALGORITH:
1) Invoke the stringToSignedInteger function and pass numberString as an arg
2) Return +numberString (the unary + operator converts a string to a number)

CODE:  
*/

function stringToSignedInteger(numberString) {
  return +numberString;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true