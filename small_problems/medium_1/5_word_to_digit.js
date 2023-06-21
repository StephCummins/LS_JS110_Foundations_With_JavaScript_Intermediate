/* PROBLEM:

Write a function that takes a sentence string as an argument and returns that 
string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 
'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding 
digit character.

INPUT: string
OUTPUT: new string with any number words converted to numbers

EXAMPLE/TEST CASE:

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

DATA STRUCTURE:
- string to array (each word a separate element) to new string
- const NUMBERS = ['zero', 'one', 'two', 'three', 
'four', 'five', 'six', 'seven', 'eight', 'nine'];

ALGORITHM:
- delcare and initialize const NUMBERS array 
- function wordToDigit(string):
  - convert string to array, with each word a separate element (split(" "))
  - declare and initialize empty result array []
  - iterate through array:
    - IF element is a word string, add it to the result array
    - ELSE IF element is a number string:
      - Find the index of the const NUMBERS that aligns with element
      - add the index to the result array
  - join result array into a new string
  - return new string
*/

const NUMBERS = ['zero', 'one', 'two', 'three', 
'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(string) {
  return string.split(" ").map(element => {
    if (NUMBERS.includes(element)) return NUMBERS.indexOf(element);
    else if (NUMBERS.includes(element.slice(0, element.length - 1))) {
      return NUMBERS.indexOf(element.slice(0, element.length - 1)) + 
             element.slice(element.length - 1);
    } else return element;
  }).join(" ");
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."