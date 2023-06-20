/* PROBLEM:

EXPLICIT RULES:
- Write a function that takes a string and returns an object containing the 
following three properties:
  1) the percentage of characters in the string that are lowercase letters
  2) the percentage of characters that are uppercase letters
  3) the percentage of characters that are neither
- You may assume that the string will always contain at least one character.

IMPLICIT RULES:
- Spaces count as characters

INPUT: string of characters
OUTPUT: object (w/properties listed in rules)

EXAMPLES/TEST CASES:

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

DATA STRUCTURE:
- convert input string to array (each char a different element)
- return object with three properties (lowercase, uppercase, neither)

ALGORITHM:
1) Invoke letterPercentages and pass the input string as the argument
2) Declare result variable and initialize to empty object:
3) Split the input string to an array, with each character a different element
4) Iterate through the array. For each character:
   - IF char is uppercase: obj["uppercase"] += 1
   - ELSE IF char is lowercase: obj["lowercase"] += 1
   - ELSE obj["neither"] += 1
5) Iterate through the result object. For each property, calculate the
   percentage of its corresponding value:
   - Divide value by string.length (length of original string)
   - Multiply by 100
   - Round to 2 decimal places
   - Reassing property to new percentage value
6) Return result object

CODE:  
*/

function letterPercentages(string) {
  let result = {lowercase: 0, uppercase: 0, neither: 0};
  
  string.split("").forEach(char => {
    if (char >= "a" && char <= "z") result["lowercase"] += 1;
    else if (char >= "A" && char <= "Z") result["uppercase"] += 1;
    else result["neither"] += 1;
  });
  
  for (let type in result) {
    result[type] = calculatePercentage(result[type], string.length);
  }
  
  return result;
}

function calculatePercentage(value, total) {
  return ((value / total) * 100).toFixed(2);
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
