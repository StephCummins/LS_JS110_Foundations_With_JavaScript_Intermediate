/* PROBLEM:
Modify the wordSizes function from the previous exercise to exclude non-letters 
when determining word size. For instance, the word size of "it's" is 3, not 4.

INPUT: String of zero or more space separated words
OUTPUT: Object that shows the number of words of different sizes

EXPLICIT RULES
- Words consist of any sequence of non-space characters
- Exclude any non-letters when determining word size

EXAMPLES/TEST CASES:
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
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

5) Invoke the countLetters function and pass in wordArray as the argument
6) Iterate through wordArray: For each word/element:
    - Declare length variable and initialize to 0
    - iterate through each character of the word to check if it's a letter:
      - Convert the character to a lowercase letter
      - Check if character is >= "a" && <= "z"
        - IF TRUE, increment length by 1
    - Reassign the word/element to the value of length;
7) Return wordArray
   
5) Iterate through wordArray and reassign each element to element.length
6) Iterate through wordArray again. For each element:
    - Check if result[element] already exists
      - IF FALSE, initialize result[element] to 0
    - Increment the value of result[element] by 1
7) return result

8) Iterate through each element of wordArray:
    - Check if result[element] already exists
      - IF FALSE initialize result[element] to 0
    - Increment the value of result[element] by 1
9) Return result

CODE:
*/

function wordSizes(wordString) {
  let result = {};
  if (wordString.length === 0) return result;
  let wordSize = countLetters(wordString.split(" "));
  result = populateObj(wordSize);
  return result;
}

function countLetters(wordSize) {
  return wordSize.map(word => {
    let length = 0;
    for (let idx = 0; idx < word.length; idx += 1) {
      if (word[idx].toLowerCase() >= "a" && word[idx].toLowerCase <= "z") {
        length += 1;
      }
    }
    return length;
  });
}

function populateObj(wordSize) {
  let result = {};
  wordSize.forEach(wordLength => {
    if (!result[wordLength]) result[wordLength] = 0;
    result[wordLength] += 1;
  });
  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
