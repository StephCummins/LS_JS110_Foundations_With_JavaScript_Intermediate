/* PROBLEM:

Write a function that takes a string as an argument and returns an array that 
contains every word from the string, with each word followed by a space and the 
word's length. 

INPUT: string of characters or words
OUTPUT: array that includes each word and word length as an element

EXPLICIT RULES:
- If the argument is an empty string or if no argument is passed, the function 
should return an empty array.
- You may assume that every pair of words in the string will be separated by a 
single space.

EXAMPLES/TEST CASES:
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

DATA STRUCTURE:
- Input string => convert to array to iterate over each word
- Add result to array to be returned

ALGORITHM:
1) Invoke the wordLengths function and pass the input string in as an argument
2) Declare wordArray and initialize to empty array []
3) Check if wordString is an empty string or undefined:
    - IF it evalautes to true, return wordArray
4) Split wordString into an array, w/ each word a separate element (split(" "))
5) Iterate through array. For each word:
    - concatenate word + " " + word.length, and push this value to wordArray
6) Return wordArray

CODE:
*/

function wordLengths(wordString) {
  let wordArray = [];
  
  if (wordString === undefined || wordString.length === 0) return wordArray;
  
  wordArray = wordString.split(" ").map(word => word + " " + word.length);
  
  return wordArray;
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []

console.log(wordLengths());        // [] */