/* PROBLEM:

Write a function that rotates an array by moving the first element to the end of 
the array. Do not modify the original array.

EXPLICIT RULES:
- If the input is not an array, return undefined.
- If the input is an empty array, return an empty array.

INPUT: original array
OUTPUT: copy of original array with first element moved to last element

EXAMPLES/TEST CASES:

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

DATA STRUCTURE: input array and output array

ALGORITHM:
1) Invoke rotateArray function and pass in array as argument
2) Check if arr1 is undefined or not an array:
    - IF yes, return undefined
3) Check if arr1 is empty:
    - IF yes, return arr1 as-is (empty array)
4) Declare arr2 variable and initialize to value of arr1
5) Remove the first element from arr2 and save it to a new variable finalElement
6) Add finalElement to the end of arr2
7) Return arr2

CODE:
*/

function rotateArray(arr1) {
  if (arr1 === undefined || Array.isArray(arr1) !== true) return undefined;
  if (arr1.length === 0) return arr1;
  let arr2 = arr1.slice();
  let finalElement = arr2.shift();
  arr2.push(finalElement);
  return arr2;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]