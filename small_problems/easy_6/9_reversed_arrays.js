/* PROBLEM

Write a function that takes an Array as an argument and reverses its elements in
place. That is, mutate the Array passed into this method. The return value 
should be the same Array object.

INPUT: array
OUTPUT: same array, with elements reversed in place

EXPLICIT RULES
- You may not use Array.prototype.reverse()

IMPLICIT RULES
- an empty array returns an empty array
- an array with a single element remains unchanged

EXAMPLES/TEST CASES:

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

DATA STRUCTURE: 
- Input array (same array will be output)
- Use a for loop to iterate through the array indexes

ALGORITHM:
1) Invoke the reverse function and pass in the array as an argument
2) Iterate through the array indexes using a for loop:
    - To iterate up to array.length amount of times
    - Start count at index 0 and increment by 1 on each iteration
    - Each iteration:
      - Use splice to add the number at the last index to the current index
      - Remove the element at the last index
3) Return the updated array

CODE:
*/

function reverse(list) {
  for (let index = 0; index < list.length; index += 1) {
    list.splice(index, 0, list[list.length - 1]);
    list.pop();
  }
  return list;
}

console.log(reverse([1, 2, 3, 4]));
console.log(reverse(["a", "b", "c", "d", "e"]));
console.log(reverse(["abc"]));
console.log(reverse([]));