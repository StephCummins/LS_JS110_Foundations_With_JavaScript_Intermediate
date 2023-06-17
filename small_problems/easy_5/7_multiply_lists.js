/* PROBLEM:

Write a function that takes two array arguments, each containing a list of 
numbers, and returns a new array that contains the product of each pair of 
numbers from the arguments that have the same index. 

EXPLICIT RULES:
- assume that the arguments contain the same number of elements

INPUT: 2 arrays (each containing a list of numbers)
OUTPUT: New array (contains product of each pair of #s from arguments w/same idx)

EXAMPLES/TEST CASES:
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

DATA STRUCTURE:
Array

ALGORITHM:
1) Invoke the function multiplyList and pass in 2 array arguments
2) Declare arr3 and initialize to empty array
3) Iterate through each element and idx of arr1. For each element:
    - Multiply arr1[idx] * arr2[idx]
    - push result to arr3
4) Return arr3

*/

function multiplyList(arr1, arr2) {
  return arr1.map((element, idx) => arr1[idx] * arr2[idx]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]