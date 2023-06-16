/* PROBLEM:

Given a string of words separated by spaces, write a function that swaps the 
first and last letters of every word.

INPUT: String of words, separated by spaces

OUTPUT: New string of words, with first and last letters of every word swapped

EXPLICIT RULES:
- Every word contains at least one letter
- String will always contain at least one word
- Each string only contains words and spaces
- No leading, trailing or repeated spaces

EXAMPLES/TEST CASES:
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

DATA STRUCTURE:
- 2 Strings:
  - Input string
  - Ouput string: initialize to value of input string
- Convert output string to array to iterate through words, then convert back
  to string
  
ALGORITHM:
1) Invoke the swap function and pass in wordString as an argument
2) Declare swappedString variable and initialize to wordString.split(" "). Each
   word is a separate element
3) Iterate through swappedString array. For each word:
    - First, check if word.length === 1:
      - IF TRUE, return word
    - Split the word into an array w/ each char a separate element (split(""))
    - Swap char[0] and char[word.length - 1]
    - Join the character array into a string
    - Return the string
4) Join the swappedString array into a string (join(" "))
5) Return the string

CODE:
*/

function swap(wordString) {
  return wordString.split(" ").map(word => {
    if (word.length === 1) return word;
    else return swapFirstAndLastLetters(word);
  }).join(" ");
}

function swapFirstAndLastLetters(word) {
  let characters = word.split("");
  let firstLetter = characters[0];
  characters[0] = characters[characters.length - 1];
  characters[characters.length - 1] = firstLetter;
  return characters.join("");
}
  
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
