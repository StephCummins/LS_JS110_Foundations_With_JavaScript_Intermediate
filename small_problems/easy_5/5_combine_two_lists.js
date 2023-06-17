/* PROBLEM:

Write a function that combines two arrays passed as arguments, and returns a 
new array that contains all elements from both array arguments, with each 
element taken in alternation.

EXPLICIT RULES:
- You may assume that:
  - both input arrays are non-empty
  - they have the same number of elements

INPUT: 2 arrays
OUTPUT: New array that contains all elements from both array arguments

EXAMPLES/TEST CASES:
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

DATA STRUCTURE:
- Arrays

ALGORITHM:
1) Invoke the function interleave and pass in two array arguments
2) Declare arr3 and initialize to empty array []
3) Set length of arr3: let finalLength = arr1.length + arr2.length
4) Iterate finalLength number of times: for (let idx = 0; idx < length; idx++)
  - If idx is an even number, push element from arr1 to arr3
    - if (idx % 2 === 0) arr3[idx] = arr1.shift();
  - If idx is an odd number, push element from arr2 to arr3
    - else arr3[idx] = arr2.shift();
- return arr3

CODE:

*/

function interleave(arr1, arr2) {
  let arr3 = [];
  
  let finalLength = arr1.length + arr2.length;
  
  for (let idx = 0; idx < finalLength; idx += 1) {
    if (idx % 2 === 0) {
      arr3[idx] = arr1.shift();
    } else {
      arr3[idx] = arr2.shift();
    }
  }

  return arr3;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
// [1, "a", 2, "b", 3, "c"]

console.log(interleave(["hi", "name", "Steph"], ["my", "is", "Yay"]));
// ["hi", "my", "name", "is", "Steph", "Yay"]

/* SOLUTION 2: using forEach method:

function interleave(arr1, arr2) {
  let arr3 = [];
  
  arr1.forEach((element, idx) => arr3.push(arr1[idx], arr2[idx]));
  
  return arr3;
}

*/

