/* PROBLEM:

Write a function that takes a grocery list in a two-dimensional array and 
returns a one-dimensional array. Each element in the grocery list contains a 
fruit name and a number that represents the desired quantity of that fruit. The 
output array is such that each fruit name appears the number of times equal to 
its desired quantity.

INPUT: Nested array: each inner nest: [item, quantity]
OUTPUT: New array with each fruit name the quantity from first array

EXAMPLE/TEST CASE:

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

DATA STRUCTURE: 
- Input is nested array
- Return flat array (with no nests)

ALGORITHM:
1) Invoke the function buyFruit and pass in the input array argument
2) Declare result and initialize as empty array []
3) Iterated through nestedFruitArray. For each element:
    - Declare count variable and initialize to element[1] (the quantity)
    - WHILE count > 0:
      - push element[0] to result
      - count -= 1
4) Return result

CODE:
*/

function buyFruit(nestedFruitArray) {
  let result = [];
  
  nestedFruitArray.forEach(element => {
    let count = element[1];
    while (count > 0) {
      result.push(element[0]);
      count -= 1;
    }
  });
    
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]