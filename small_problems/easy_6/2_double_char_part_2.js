/* PROBLEM:

Write a function that takes a string, doubles every consonant character in the 
string, and returns the result as a new string. 

INPUT: string of characters
OUTPUT: new string with all consonants doubled

EXPLICIT RULES:
- The function should not double vowels ('a','e','i','o','u'), digits, 
punctuation, or whitespace.

IMPLICIT RULES:
- Empty string returns an empty string

EXAMPLES/TEST CASES:
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

DATA STRUCTURE:
- Input string: originalStr
- Declare resultStr variable and initialize to value of originalStr
- Convert resultStr to array to iterate through characters, then back to a
  string to return the value
- array with all vowels:
  const VOWELS = ["a", "e", "i", "o", "u"];

ALGORITHM:
1) Invoke the function doubleConsonants and pass in input string as argument
2) Declare new resultStr and initialize to value of input string
3) Split resultStr into an array, with each character a separate element: split
4) Iterate through array: map
    - Check if char is a vowel: VOWELS.includes(char.toLowerCase())
      - IF this evaluates to true, return the char
    - Check if char is a consonant: char.toLowerCase() > "a" && <= "z"
      - ELSE IF this evaluates to true, return double char: char.repeat(2)
    - ELSE return char (not a consonant)
5) Convert array to string: join
6) Return result string

CODE:
*/

const VOWELS = ["a", "e", "i", "o", "u"];

function doubleConsonants(originalStr) {
  return originalStr.split("").map(char => {
    if (VOWELS.includes(char.toLowerCase())) return char;
    else if (char.toLowerCase() > "a" && char.toLowerCase() <= "z") {
      return char.repeat(2);
    } else return char;
  }).join("");
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""