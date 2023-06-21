/* PROBLEM:

Take the number 735291 and rotate it by one digit to the left, getting 352917. 
Next, keep the first digit fixed in place and rotate the remaining digits to get 
329175. Keep the first two digits fixed in place and rotate again to get 321759. 
Keep the first three digits fixed in place and rotate again to get 321597. 
Finally, keep the first four digits fixed in place and rotate the final two 
digits to get 321579. The resulting number is called the maximum rotation of the 
original number.

Write a function that takes an integer as an argument and returns the maximum 
rotation of that integer. You can (and probably should) use the 
rotateRightmostDigits function from the previous exercise.

*/

function maxRotation(number) {
  for (let count = 0; count < String(number).length; count += 1) {
    let place = String(number).length - count;
    number = rotateRightmostDigits(number, place);
  }
  return number;
}

function rotateRightmostDigits(number, place) {
  let finalNumber = String(number).split("");
  place = finalNumber.splice(-place, 1);
  finalNumber.push(place[0]);
  finalNumber = finalNumber.join("");
  return Number(finalNumber);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845