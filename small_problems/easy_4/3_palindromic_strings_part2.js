/* Write a function that returns true if the string passed as an argument is a 
palindrome, or false otherwise. This time, however, your function should be 
case-insensitive, and should ignore all non-alphanumeric characters.

PROBLEM:
INPUT: string
OUTPUT: boolean true/false (if string is palindrome or not)

EXPLICIT RULES:
- Return true/false if string argument passed to function is a palindrome
- A palindrome:
  - Reads the same forwards and backwards
  - Case-insensitive
  - Ignore any characters that aren't alphaneumeric
  
IMPLICIT RULES:
- String can have multiple words

EXAMPLES/TEST CASES:

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

DATA STRUCTURE:
- Input is a string
- Create new string with only alphabetical and numeric characters
- Convert string to array to reverse the string characters
- Convert reversed array to string to compare
- Compare reversed string w/alphanumeric string
- Return boolean true/false

ALGORITHM:
- Define isRealPalindrome() function with a single string parameter
- Within body of isPalindrome(), invoke function createAlphanumericString()
  - pass input string as argument
  - create empty returnString " "
  - convert string to all lower case: toLowerCase();
  - iterate through each index of the lowercase string
    - IF character is alphaneumeric, add it to returnString:
      - ABC: char.charCode() >= 97 && char.charCodeAt() <= 122
      - 123: char.charCodeAt() >= 48 && char.charCodeAt() <= 57
  - return returnString
- Convert returnString to array, with each character at a separate index: split("")
- Reverse the array: reverse()
- Join the array back into a new string: join("")
- Compare the original string with the new string
  - IF equal, return true
  - ELSE, return false

CODE:
*/

function isRealPalindrome(string) {
  let abc123String = createAlphanumericString(string);
  let reversedString = abc123String.split("").reverse().join("");
  return (reversedString === abc123String);
}

function createAlphanumericString(string) {
  let returnString = "";
  string = string.toLowerCase();
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      returnString += char;
    } else if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
      returnString += char;
    }
  }
  return returnString;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false