/* PROBLEM:

Write a function that takes one argument, a positive integer, and returns the 
sum of its digits. 

EXPLICIT RULES:
- Do this without using for, while, or do...while loops - instead, use a series 
of method calls to perform the sum.

INPUT: integer
OUTPUT: integer (sum of original integer's digits)

EXAMPLES/TEST CASES:
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

DATA STRUCTURE
- Input integer => convert to string to array, with each digit a separate array
  element

ALGORITHM:
1) Invoke the function sum and pass in the input integer as an argument
2) Convert int to a string: String(int)
3) Convert the string to an array, with each digit a separate element: split("")
4) Iterate through the array, and add the value of each element to the total:
    - use reduce method
    - start the accumulator at 0
    - since each element is a string use Number(currentValue) to convert
5) Return the total

CODE:
*/

function sum(int) {
  return String(int).split("")
                    .reduce((accum, currentVal) => accum + Number(currentVal), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45