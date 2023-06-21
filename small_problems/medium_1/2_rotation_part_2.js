/* PROBLEM:

Write a function that rotates the last count digits of a number. To perform the 
rotation, move the first of the digits that you want to rotate to the end and 
shift the remaining digits to the left.

INPUT: Number and digit place to be rotated to the end of the number
OUTPUT: New number w/digit rotated

EXAMPLES/TEST CASES:

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

DATA STRUCTURE: 
- Input number => convert to string => convert to array to manipulate digits
- Join array to string => convert to number to return value

ALGORITHM:
1) Invoke rotateRightmostDigits and pass two arguments to the function:
    1) number (to be manipulated)
    2) place (digit place to be rotated to the end of the number
2) Convert number to string to array, with each digit a separate element
3) Starting at the last array idx, count from right to left place amount of idx
4) Remove place index and add it to the end of the array
5) Join the array to a string, and convert the string to a number
6) Return number

CODE:
*/

function rotateRightmostDigits(number, place) {
  let finalNumber = String(number).split("");
  place = finalNumber.splice(-place, 1);
  finalNumber.push(place[0]);
  return Number(finalNumber.join(""));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917