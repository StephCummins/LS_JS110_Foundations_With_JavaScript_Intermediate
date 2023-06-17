/* PROBLEM: 

Write a function that takes two arrays as arguments and returns an array 
containing the union of the values from the two.

INPUT: Two arrays
OUTPUT: New array that contains all values of the input arrays (no duplicates)

EXPLICIT RULES:
- No duplicates of values in the returned array
- Assume that both arguments will always be arrays

EXAMPLE/TEST CASE:
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

DATA STRUCTURE:
- 2 input arrays; one output array

ALGORITHM:
1) Invoke the function union and pass in two array arguments
2) Declare result variable and initialize it to empty array []
3) Iterate over all elements of arr1. For each iteration:
    - Check if result already includes the element:
      - IF it doesn't, add the element to result
      - ELSE continue
4) Iterate over all of the elements of arr2. For each iteration:
    - Check if result already includes the element:
      - IF it doesn't, add the element to result
      - ELSE continue
5) Return result

*/

function union(arr1, arr2) {
  let result = [];
  
  arr1.forEach(element => {
    if (!result.includes(element)) result.push(element);
  });
  
  arr2.forEach(element => {
    if (!result.includes(element)) result.push(element);
  });

  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]