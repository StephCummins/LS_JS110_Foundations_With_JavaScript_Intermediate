/* PROBLEM:

Given an unordered array and the information that exactly one value in the 
array occurs twice (every other value occurs exactly once), determine which 
value occurs twice. Write a function that will find and return the duplicate 
value that is in the array.

INPUT: array
OUTPUT: single value that occurs twice

EXAMPLES/TEST CASES:

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73
          
DATA STRUCTURE:
- Array

ALGORITHM:
1) Invoke the function findDup and pass in the array argument
2) Declare arr2 and initialize to empty array []
3) Declare duplicate variable (this will eventually store the duplicate value)
4) Iterate through arr. For each number:
    - check if arr2 already includes the number:
      - IF it doesn't, add the number to arr2
      - ELSE IF it does, this number is the duplicate
        - reassign duplicate to the number
5) Return duplicate

CODE:

*/
function findDup(arr) {
  let arr2 = [];
  let duplicate;
  arr.map(element => {
    if (!arr2.includes(element)) {
      return arr2.push(element);
    } else {
      return duplicate = element;
    }
  });
  return duplicate;
}

console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
            38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
            14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
            78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
            89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
            41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
            55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
            85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
            40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
            7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73