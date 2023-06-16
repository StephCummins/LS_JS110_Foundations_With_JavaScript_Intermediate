/* PROBLEM

Write a function that takes a string, doubles every character in the string, 
and returns the result as a new string.

INPUT: string of characters
OUTPUT: new string with each character doubled

IMPLICIT RULES:
- empty string returns an empty string

EXAMPLES/TEST CASES:
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

DATA STRUCTURE:
- Input string of characters: originalStr
- Declare doubledStr variable and initialize to value of originalStr
- Convert doubledStr to array to iterate through each character, then convert
  back to string to return result

ALGORITHM:
1) Invoke the function repeater and pass in the input string as the argument
2) Check to see if originalStr is empty:
    - IF TRUE, return originalStr
3) Declare new variable doubleStr and initialize to value of originalStr
4) Convert doubleStr to an array, with each character a separate element: split
5) Iterate through array: map
    - For each element, return two of element: repeat(2)
6) Convert array to string: join
7) Return string

CODE:
*/

function repeater(originalStr) {
  return originalStr.split("").map(char => char.repeat(2)).join("");
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
