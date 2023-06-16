/* PROBLEM:

Write a function that returns a list of all substrings of a string. Order the 
returned list by where in the string the substring begins. This means that all 
substrings that start at index position 0 should come first, then all substrings 
that start at index position 1, and so on. Since multiple substrings will occur 
at each position, return the substrings at a given index from shortest to longest.

INPUT: string
OUTPUT: array of all substrings

EXAMPLES/TEST CASES:
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
  
DATA STRUCTURE:
- input string => convert to array with each char from original string a 
  different element
- result array with all substrings

ALGORITHM:
1) Invoke the function substrings and pass in the input string argument
2) Declare substrings variable and initialize to empty array
3) Declare newString variable and initialize to string
4) Use a for loop to iterate string.length amount of times. Each iteration:
    - call the leading substrings function with newString as the argument
      - declare variable substring and initialize as empty string
      - declare and initialize empty result array
      - convert string to array (.split(""))
      - iterate through array: (map)
        - each iteration, return substring + current element 
      - return the result array
    - push the return value of the function to substrings array
    - split newString into an array, with each char a separate element
    - use shift to remove the first element
    - join newString back into a string (first element will be removed)
5) Return substrings
  
CODE:
*/

function substrings(string) {
  // let wordArray = string.split("");
  let substrings = [];
  let newString = string;
  for (let count = 0; count < string.length; count++) {
    substrings.push(leadingSubstrings(newString));
    newString = newString.split("");
    newString.shift();
    newString = newString.join("");
  }
  return substrings.flat();
}

function leadingSubstrings(string) {
  let substring = "";
  
  return string.split("").map(char => substring += char);
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]