/* PROBLEM:

Write a function that takes a string as an argument and returns true if all 
parentheses in the string are properly balanced, false otherwise. 

INPUT: string
OUTPUT: boolean t/f

EXPLICIT RULES:
To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

EXAMPLES/TEST CASES:
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

DATA STRUCTURE:
- Input string
- Iterate through string indexes using a for loop
- Return t/f

ALGORITHM:
1) Invoke the function isBalanced and pass in the input string as the argument
2) Declare parentheses variable and initialize to 0:
    - To be balanced, this should always end up equaling 0
    - If this is reassigned a negative value, return FALSE
3) Use a for loop to iterate through the string indexes
    - Loop should iterate string.length amount of times
    - Counter should start at index 0 and increment by 1 each iteration
    - Each iteration, check a series of IF/ELSE statements:
      - IF the current index === "(", add 1 to parentheses
      - ELSE IF the current index === ")", subtract 1 from parentheses
      - IF the value of parentheses is < 0; return FALSE
4) IF parentheses === 0 return TRUE; ELSE return FALSE

CODE:
*/

function isBalanced(string) {
  let parentheses = 0;
  
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      parentheses += 1;
    } else if (string[idx] === ")") {
      parentheses -= 1;
    }
    if (parentheses < 0) return false;
  }
  
  return (parentheses === 0);
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);