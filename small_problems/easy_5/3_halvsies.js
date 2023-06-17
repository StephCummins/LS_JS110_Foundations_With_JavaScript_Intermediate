/* PROBLEM:

Write a function that takes an array as an argument and returns an array that 
contains two elements, each of which is an array.

INPUT: 1 array
OUTPUT: New array with 2 elements (2 nested arrays)

EXPLICIT RULES:
- Push first half of original array to first element
- Push second half of original array to second element
- If original array contains odd number of elements, place middle element in 
first half of array

EXAMPLES/TEST CASES:

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

DATA STRUCTURE: arrays

ALGORITHM:
1) Invoke the function halvsies and pass in the array argument
2) Declare arr2 variable and initialize empty array []
3) Add the first half of arr to arr2:
    - Use splice to isolate the first half of the array, starting at index 0. 
      The delete count will be arr.length / 2 (round this amount up, to account
      for odd lengths)
    - Push first half of arr to arr2
4) The arr variable now holds the second half of the array. Push this to arr2
5) Return arr2
    
CODE:

*/

function halvsies(arr) {
  let arr2 = [];
  arr2.push(arr.splice(0, Math.ceil(arr.length/2)));
  arr2.push(arr);
  return arr2;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]