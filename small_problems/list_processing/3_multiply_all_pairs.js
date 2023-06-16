/* PROBLEM:

Write a function that takes two array arguments, each containing a list of 
numbers, and returns a new array containing the products of all combinations of 
number pairs that exist between the two arrays. The returned array should be 
sorted in ascending numerical order.

EXPLICIT RULES:
- You may assume that neither argument will be an empty array.

INPUT: two arrays, each with a list of numbers
OUTPUT: new array with products of all combinations of number pairs

EXAMPLES/TEST CASES:
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

DATA STRUCTURE: 
- Two input arrays
- Output array (the result with all products, which will be returned)
- Use a nested loop to multiple each element from arr1 with arr2

ALGORITHM:
1) Invoke multiplyAllPairs function and pass in the two arrays as arguments
2) Declare result variable and initialize to empty array []
3) Iterate through arr1 using a loop. For each element1:
    - Iterate through arr2 using loop. For each element2:
      - multiply element1 * element2
      - add the product to the result array
4) Sort the result array elements in ascending order
5) Return result

CODE:
*/

// SOLUTION 1: Using nested forEach
function multiplyAllPairs(arr1, arr2) {
  let result = [];
  
  arr1.forEach(element1 => {
    arr2.forEach(element2 => result.push(element1 * element2));
  });
  
  return result.sort((a, b) => a - b);
}

/* SOLUTION 2: Using nested for loop
function multiplyAllPairs(arr1, arr2) {
  let result = [];
  
  for (let idx1 = 0; idx1 < arr1.length; idx1++) {
    for (let idx2 = 0; idx2 < arr2.length; idx2++) {
      result.push(arr1[idx1] * arr2[idx2]);
    }
  }
  
  return result.sort((a, b) => a - b);
}*/

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
