/* PROBLEM

Write a function that takes an array of integers between 0 and 19 and returns an
array of those integers sorted based on the English word for each number:

INPUT: array of integers
OUTPUT: new array sorted alphabetically by English word for each integer

EXAMPLES/DATA STRUCTURE:
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

DATA STRUCTURE:
- array of english names for numbers:
    const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                      'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                      'twelve', 'thirteen', 'fourteen', 'fifteen',
                      'sixteen', 'seventeen', 'eighteen', 'nineteen'];
- input/output arrays

ALGORITHM:
1) Declare const NUMBER_WORDS and initialize to array 
2) Invoke function alphabeticNumberSort and pass in the input array as the
   argument
3) Declare sortedArray variable and initialize to empty array
4) Reassign sortedArray to the following value:
    - Iterate through each element of numArray
    - For each element, add NUMBER_WORDS[element] to sortedArray
5) Sort sortedArray in alphabetical order
6) Iterate through sortedArray using map. For each word:
    - let index = NUMBER_WORDS.indexOf(word):
    - return index
6) Return sortedArray

CODE:

*/

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                      'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                      'twelve', 'thirteen', 'fourteen', 'fifteen',
                      'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function alphabeticNumberSort(numArray) {
  let sortedArray = numArray.map(number => NUMBER_WORDS[number]).sort();
  
  return sortedArray.map(wordNumber => {
    return NUMBER_WORDS.indexOf(wordNumber);
  });
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
   