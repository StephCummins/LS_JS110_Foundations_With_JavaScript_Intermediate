/* PROBLEM:

Write a function that returns true if its integer argument is palindromic, or 
false otherwise.

INPUT: Integer
OUTPUT: Boolean True or False 

EXPLICIT RULES:
- Function returns true if integer argument is a palindrome; else, false
- Palindromic number reads the same forwards and backwards

IMPLICIT RULES:
- Argument must be an integer

EXAMPLES/TEST CASES:
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

DATA STRUCTURE:
- Input is an integer
- Declare reversed variable and initialize to same value as integer
- Convert reversed to string to array, then reverse it
- Convert reversed to string to integer
- Compare integer with reversed, if ===, return T, else F

ALGORITHM:
1) invoke isPalindromicNumber and pass integer as argument
2) Declare reversed variable and initialize to same value as integer
    - Convert reversed to string: String(integer)
    - Split reversed to array, with each digit a separate index: split("")
    - Join resersed to string: join("")
    - Convert reversed to integer: ParseInt()
3) Compare integer with reversed:
    - IF (integer === reversed) return true
    - ELSE return false

CODE:
*/

function isPalindromicNumber(integer) {
  let reversed = String(integer).split("").reverse().join("");
  return (parseInt(reversed, 10) === integer); 
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true