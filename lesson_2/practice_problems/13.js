/* Given the following data structure, sort the array so that the sub-arrays 
are ordered based on the sum of the odd numbers that they contain. 
*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let OddSumA = a.filter(num => num % 2 === 1).reduce((accum, currentVal) => accum + currentVal);
  let OddSumB = b.filter(num => num % 2 === 1).reduce((accum, currentVal) => accum + currentVal);
  return OddSumA - OddSumB;
});

console.log(arr);