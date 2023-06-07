// Given the following data structure, return a new array with the same 
// structure, but with the values in each subarray ordered -- alphabetically or 
// numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArray = arr.map (array => {
  if (typeof (arr[0]) === "number") {
    return array.slice().sort((a, b) => Number(a) - Number(b));
  } else {
    return array.slice().sort();
  }
});

console.log(arr); 
// [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']]

console.log(sortedArray); 
// [ [ 'a', 'b', 'c' ], [ -3, 11, 2 ], [ 'black', 'blue', 'green' ] ]