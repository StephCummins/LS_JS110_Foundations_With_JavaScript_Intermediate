/* PROBLEM: 

Write a bubble-sort algorithm

EXAMPLES/TEST CASES:

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

DATA STRUCTURE: arrays

ALGORITHM:
1) Invoke bubbleSort and pass in the array argument
2) Declare swaps variable and initialize to 0
3) Use a do/while loop to run while swaps > 0. Each iteration
   - Set swaps = 0
   - Run a for loop array.length - 1 amount of times. Start at idx = 0 and 
     increment by 1 each iteration. 
     - Check if array[idx] > array[idx + 1]
       - IF it is, then swap the values at array[idx] and array[idx + 1]
       - Swaps += 1
4) Return the array

CODE:
*/

function bubbleSort(arr) {
  let swaps = 0;
  do {
    swaps = 0;
    for (let idx = 0; idx < arr.length - 1; idx ++) {
      if (arr[idx] > arr[idx + 1]) {
        let temp = arr[idx];
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = temp;
        swaps += 1;
      }
    }
  } while (swaps > 0);
  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]