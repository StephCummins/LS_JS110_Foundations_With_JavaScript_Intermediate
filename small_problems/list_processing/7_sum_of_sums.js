/* PROBLEM:

Write a function that takes an array of numbers and returns the sum of the sums 
of each leading subsequence in that array. Examine the examples to see what we 
mean. You may assume that the array always contains at least one number.

INPUT: Array of numbers
OUTPUT: Sum of the sums of each leading subsequence

EXAMPLES/TEST CASES:
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

DATA STRUCTURE: 
- array
- use nested loops to iterate through array

ALGORITHM:
1) Invoke function sumOfSums and pass in the array argument
2) Declare sum variable and initialize to 0
3) Use a for loop to iterate through the array, array.length amount of times. 
   Declare the index variable and initialize it to 0. The index will be
   incremented by 1, each time the loop runs. For each iteration:
    - Run a nested loop using forEach
    - Callback function will have two arguments, the element and idx
    - Check if idx (from forEach) is <= index (from the for loop)
      - IF it evaluates to true, sum += element
4) Return sum

CODE:
*/

function sumOfSums(array) {
  let sum = 0;
  
  for (let index = 0; index < array.length; index += 1) {
    array.forEach((element, idx) => {
      if (idx <= index) sum += element;
    });
  }
  
  return sum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35