/* PROBLEM:

Write a function that takes a string argument and returns true if all of the 
alphabetic characters inside the string are uppercase; false otherwise.

INPUT: string of characters
OUTPUT: boolean t/f

EXPLICIT RULES: 
- Ignore all characters that aren't alphabetic

IMPLICIT RULES:
- An empty string returns true

EXAMPLES/TEST CASES:

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

DATA STRUCTURE
- Input string => convert to array to iterate thorugh characters to check if
  each one is uppercase

ALGORITHM:
1) Invoke function isUpperCase() and pass in the input string as the argument
2) Split the input string into an array, with each character a separate element
3) Iterate through the array to check if all characters are uppercase. For each
   character:
    ***Note that the only lowercase characters are >= "a" and <= "z"
    - Check if char is < "a" or > "z"
      - Continue until you run into a character that doesn't meet these
        requirements
      - IF you run into a character that evaluates to false, return false
      - ELSE return true

CODE:
*/

function isUppercase(wordString) {
  return wordString.split("").every(char => char < "a" || char > "z");
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true