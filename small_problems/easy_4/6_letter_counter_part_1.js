/* PROBLEM:
Write a function that takes a string consisting of zero or more space separated 
words and returns an object that shows the number of words of different sizes.

INPUT: String of zero or more space separated words
OUTPUT: Object that shows the number of words of different sizes

EXPLICIT RULES
- Words consist of any sequence of non-space characters

IMPLICIT RULES
- An input string can be empty; if this case, return an empty {}

EXAMPLES/TEST CASES:
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

DATA STRUCTURE:
- input wordString passed as argument to wordSizes function
- result object {} to store count of words of different sizes
- convert wordString to wordArray to iterate through each word

ALGORITHM
1) Invoke the wordSizes function and pass in wordString as the argument
2) Declare and initialize empty result object {}
3) Before continuing, check if the wordString is an empty string:
  - IF TRUE, return the empty result object {}
4) Declare wordArray variable and initialize to wordString.split(" "). Each word
   is a separate element.
5) Iterate through wordArray and reassign each element to element.length
6) Iterate through wordArray again. For each element:
    - Check if result[element] already exists
      - IF FALSE, initialize result[element] to 0
    - Increment the value of result[element] by 1
7) return result

CODE:
*/

function wordSizes(wordString) {
  let result = {};
  if (wordString.length === 0) return result;
  
  let wordSize = wordString.split(" ").map(word => word.length);
  
  wordSize.forEach(wordLength => {
    if (!result[wordLength]) result[wordLength] = 0;
    result[wordLength] += 1;
  });
  
  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
