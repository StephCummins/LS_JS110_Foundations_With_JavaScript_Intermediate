/* PROBLEM:

Write a function that takes a string argument containing one or more words and 
returns a new string containing the words from the string argument. All 
five-or-more letter words should have their letters in reverse order.

INPUT: String
OUTPUT: String with all 5 or more letter words in reverse order

EXPLICIT RULES:
- The string argument will consist of only letters and spaces. 
- Words will be separated by a single space.

EXAMPLES/TEST CASES:

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

DATA STRUCTURE:
- Input string > convert to array to iterate through words (each word a separate
  element)
- For any words with 5 or more characters, convert these words into an array to
  reverse the order of the characters (each character a separate element)
- Join arrays into string to return value

ALGORITHM:
1) Invoke the reverseWords function and pass in the input string as the argument
2) Split the input string into an array, with each word a separate element
3) Iterate through each word of the array:
    - IF the word.length is >= 5:
      - split the word into an array, with each character a separate element
      - reverse the order of the array
      - join the array into a string
      - return the string
    - ELSE return the word
4) Join the array into a string
5) Return the string

CODE:
*/

function reverseWords(wordString) {
  return wordString.split(" ").map(word => {
    if (word.length >= 5) return word.split("").reverse().join("");
    else return word;
  }).join(" ");
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"