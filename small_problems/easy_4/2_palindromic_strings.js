/* PROBLEM:

Write a function that returns true if the string passed as an argument is a 
palindrome, or false otherwise. A palindrome reads the same forwards and 
backwards. For this problem, the case matters and all characters matter.

INPUT: string
OUTPUT: boolean true/false (if string is palindrome or not)

EXPLICIT RULES:
- Return true/false if string argument passed to function is a palindrome
- A palindrome:
  - Reads the same forwards and backwards
  - Case and all characters matter
  
IMPLICIT RULES:
- String can have multiple words

EXAMPLES/TEST CASES:

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

DATA STRUCTURE:
- Input is a string
- Convert input to array to reverse the string characters
- Convert reversed array to string to compare
- Compare original string w/reversed string
- Return boolean true/false

ALGORITHM:
- Define isPalindrome() function with a single string parameter
- Invoke isPalindrome() and pass in string as argument
  - Convert string to array, with each character at a separate index: split("")
  - Reverse the array: reverse()
  - Join the array back into a new string: join("")
  - Compare the original string with the new string:
    - IF orginal = reverse, return TRUE
    - ELSE, return FALSE

CODE:
*/

function isPalindrome(string) {
  let reversedString = string.split("").reverse().join("");
  return (reversedString === string);
}

console.log(isPalindrome('madam'));           // true
console.log(isPalindrome('Madam'));           // false (case matters)
console.log(isPalindrome("madam i'm adam"));  // false (all characters matter)
console.log(isPalindrome('356653'));          // true
