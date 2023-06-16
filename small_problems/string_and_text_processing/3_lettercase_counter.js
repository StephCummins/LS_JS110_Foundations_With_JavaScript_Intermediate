/* PROBLEM:

Write a function that takes a string and returns an object containing three 
properties: 

  1) one representing the number of characters in the string that are lowercase
  2) one representing the number of characters that are uppercase
  3) one representing the number of characters that are neither

INPUT: string
OUTPUT: object w/3 properties (lowercase, uppercase, neither)

IMPLICIT RULES:
- empty string input returns 0, 0, 0 for all values

EXAMPLES/TEST CASES:

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

DATA STRUCTURE:
- count object with 3 properties: {lowercase: 0, uppercase: 0, neither: 0}
- convert input string to array to iterate through each character

ALGORITHM:
1) Invoke the function letterCaseCount and pass in the input string as the arg
2) Declare count object & initialize to {lowercase: 0, uppercase: 0, neither: 0}
3) Convert input string to array, with each element a different character
4) Iterate over array. For each character:
    - IF char >= "a" && char <= "z": count["lowercase"] += 1
    - ELSE IF char >= "A" && char <= "Z": count["uppercase"] += 1
    - ELSE IF char !== "": count["neither"] += 1
5) return count {}

CODE:
*/

function letterCaseCount(string) {
  let count = {lowercase: 0, uppercase: 0, neither: 0};
  
  string.split("").forEach(char => {
    if (char >= "a" && char <= "z") count["lowercase"] += 1;
    else if (char >= "A" && char <= "Z") count["uppercase"] += 1;
    else if (char !== "") count["neither"] += 1;
  });
  
  return count;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }