/* PROBLEM:

Write a function that takes a positive integer as an argument and returns 
that number with its digits reversed.

INPUT: Positive integer
OUTPUT: Integer with its digits reversed

IMPLICIT RULES:
- Any leading zeros in result get dropped

EXAMPLES/TEST CASES:
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21
reverseNumber(1);        // 1

DATA STRUCTURE:
- Input integer: int
- Declare reversedInt and initialize to value of int
- Convert reversedInt to string, then to array to iterate over digits
- Convert array to string to int to return value

ALGORITHM:
1) Invoke the function reverseNumber and pass in input integer as argument
2) Declare reversedInt variable and initialize to the value of int
3) Convert reversedInt to a string, then convert to array 
4) Reverse the array
5) Iterate through array to find first element that isn't a zero
    - Save element as nonZeroIdx
6) Check if nonZeroIdx is the 0 index:
    - IF it is, then continue to step 7
    - ELSE, remove all elements up to nonZeroIdx: splice(0, nonZeroIdx)
7) Join the array to a string, then convert the string to an integer
8) Return the result integer

CODE:
*/

function reverseNumber(int) {
  let reversedInt = String(int).split("").reverse();
  let nonZeroIdx = reversedInt.findIndex(element => element > 0);
  if (nonZeroIdx !== 0) {
    reversedInt.splice(0, nonZeroIdx);
  }
  return Number(reversedInt.join(""));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21
console.log(reverseNumber(1));        // 1
