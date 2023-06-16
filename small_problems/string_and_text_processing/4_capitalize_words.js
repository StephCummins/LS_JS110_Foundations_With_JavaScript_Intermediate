/* PROBLEM:

Write a function that takes a string as an argument and returns that string with 
the first character of every word capitalized and all subsequent characters in 
lowercase.

INPUT: string of words
OUTPUT: string w/first char of each word capitalized / all subsequent letters
        lowercase

EXPLICIT RULES:
- You may assume that a word is any sequence of non-whitespace characters

EXAMPLES/TEST CASES:
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

DATA STRUCTURE:
- Input string => convert to array with each word a different element
- Iterate through array => each iteration, convert word to string, with each
  character a different element
- Reeturn result string

ALGORITHM:
1) Invoke function wordCap and pass in the input string as the argument
2) Convert input string to array, with each word a different element: split(" ")
3) Iterate through array elements: map()
    - Convert the word to all lowercase characters: word.toLowerCase()
    - Split the word into an array, with each character a different element
    - Capitalize char[0]
    - Join char[0] with the remainder of the array to convert to string
    - Return updated string
4) Join the array into a string
5) Return string

CODE:

// SOlUTION 1:
function wordCap(string) {
 return string.split(" ").map(word => {
   let arrayOfChars = word.toLowerCase().split("");
   let firstChar = arrayOfChars[0].toUpperCase();
   arrayOfChars.splice(0, 1, firstChar);
   return arrayOfChars.join("");
 }).join(" ");
} */

// SOLUTION 2:
function wordCap(string) {
  return string
    .split(" ")
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(" "); 
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'