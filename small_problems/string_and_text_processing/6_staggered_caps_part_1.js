/* PROBLEM:

Write a function that takes a string as an argument and returns that string with 
a staggered capitalization scheme. 

INPUT: string
OUTPUT: string w/staggered capitalization scheme

EXPLICIT RULES:
- Every other character, starting from the first, should be capitalized and 
  should be followed by a lowercase or non-alphabetic character. 
- Non-alphabetic characters should not be changed, but should be counted as 
  characters for determining when to switch between upper and lower case.

EXAMPLES/TEST CASES:

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

DATA STRUCTURE: 
- Input string => convert to array to iterate through characters
- Convert array to result string to return value

ALGORITHM:
1) Invoke function staggeredCaps and pass in the input string as the argument
2) Declare result and initialize to empty array
3) Split input string into array, with each char a separate element (.split(""))
4) Iterate through array (map). For each element:
    - IF index is even: if (idx % 2 === 0)
      - capitalize char and add it to result array: char.toUpperCase()
    - ELSE IF index is odd: else if (idx % 2 === 1)
      - lowercase char and push to result: char.toLowerCase()
5) Convert array to string: join("")
6) Return string

Code:
*/

function staggeredCase(wordString) {
  return wordString.split("").map((char, idx) => {
    if (idx % 2 === 0) return char.toUpperCase();
    else if (idx % 2 === 1) return char.toLowerCase();
  }).join("");
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"