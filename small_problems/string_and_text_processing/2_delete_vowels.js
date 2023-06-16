/* PROBLEM:

Write a function that takes an array of strings and returns an array of the same 
string values, but with all vowels (a, e, i, o, u) removed.

INPUT: array of strings
OUTPUT: copy of array with all vowels removed

IMPLICIT RULES:
- If array element only contains vowels, empty string for element will be 
  returned

EXAMPLES/TEST CASES:
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

DATA STRUCTURE: 
- Input array
- Result array initialized to empty array; each character from input array that
  isn't a vowel will be added to this array
- A string of uppercase & lowercase vowels to check against each input array 
  element: const VOWELS = "AEIOUaeiou"

ALGORITHM:
1) Declare vowels variable and initialize to string "AEIOUaeiou"
2) Invoke function removeVowels and pass in the input array as the argument
3) Declare result variable and initialize to empty array
4) Iterate through input array. On each iteration:
    - Declare noVowels variable and initialize to empty string
    - Split the current element into an array
    - iterate through each character of the array
      - if the character is not a vowel, concat it with noVowels
      - once you've iterated through all characters of the array, return the 
        value of noVowels (add it to the result array)
5) Return result

CODE:
*/

const VOWELS = "AEIOUaeiou";

function removeVowels(wordArray) {
  return wordArray.map(word => {
    let noVowels = "";
    
    word.split("").forEach(character => {
      if (!VOWELS.includes(character)) noVowels += character;
    });

    return noVowels;
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
