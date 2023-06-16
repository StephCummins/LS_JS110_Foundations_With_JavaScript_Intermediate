/* PROBLEM

Write a function that takes a string argument and returns a new string 
containing the words from the string argument in reverse order.

INPUT: string of words
OUTPUT: new string with words in reverse order

IMPLICIT RULES:
- empty string returns empty string

EXAMPLES/TEST CASES:
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

DATA STRUCTURE
- Input string > convert to array to reverse word order > convert to string to 
  return final value

ALGORITHM:
1) Invoke the function reverseSentence and pass in input string as argument
2) Split string into array, with each word a separate element(split(" "))
3) Reverse the order of the array elements (reverse())
4) Join the array back into a string(join(" "))
5) Return the string

CODE:
*/
function reverseSentence(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

/* BUGGY SOLUTION: The error in the buggy solution provided by the assignment
includes a typo in the reverse method. It is written as .reverse, while it
should be written as .reverse() to work properly. */