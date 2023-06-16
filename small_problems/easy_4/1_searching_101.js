/* Write a program that solicits six numbers from the user and logs a message 
that describes whether the sixth number appears among the first five numbers.

PROBLEM:

INPUT: 6 integers from user
OUTPUT: String that states if 6th integer appears among first five numbers

EXPLICIT RULES:
- User must input 6 integers

IMPLICIT RULES:
- Error message if user inputs anything other than integers

TEST CASES/EXAMPLES:

DATA STRUCTURE:
- Input integers 
- Save integers as array:
  - Check if array[array.length - 1] is equal to indexes 0-5
- Output a boolean true/false

ALGORITHM:
1) Declare and initialize userInput [] empty array
2) Use Readline-Sync to get user input: 6 integers
  - If user does not provide an integer, provide an error message & repeat step 2
  - If user provides an integer, populate array with number
3) Iterate through array: Use .some() array method
  - Check if array[array.length - 1] === array indexes 0-5
    - If true, output positive mesage
    - If false, output negative message
*/

// CODE VERSION 1:
const RLSYNC = require("readline-sync");
const INT_AMOUNT = 6;
let userInput = [];

function getUserInput() {
  for (let questions = 1; questions <= INT_AMOUNT; questions += 1) {
    let int = parseInt(RLSYNC.question(`Enter integer ${questions}: `), 10);
    while (!Number.isInteger(int)) {
      console.log("Error. Please provide an integer.");
      int = parseInt(RLSYNC.question(), 10);
    }
    populateArray(int); 
  }
}

function populateArray(num) {
  userInput.push(num);
}

function checkIfSixOccurs(array) {
  let newArray = array.slice();
      newArray.pop();
  return newArray.includes(array[INT_AMOUNT -1]);
}

function printResults(result, string) {
  if (result) {
    console.log(`It's ${result}! The number ${userInput[INT_AMOUNT - 1]} appears in the list ${string}.`);
  } else {
    console.log(`It's ${result}! The number ${userInput[INT_AMOUNT - 1]} does not appear in the list ${string}.`);
  }
}

getUserInput();

let isItTrue = checkIfSixOccurs(userInput);

let outputString = userInput.join(" ");

printResults(isItTrue, outputString);

/* CODE EXAMPLE 2: What if the problem was looking for a number that satisfies 
some condition (e.g., a number greater than 25), instead of a specific number?

const RLSYNC = require("readline-sync");
const INT_AMOUNT = 6;
let userInput = [];

function getUserInput() {
  for (let questions = 1; questions <= INT_AMOUNT; questions += 1) {
    let int = parseInt(RLSYNC.question(`Enter integer ${questions}: `), 10);
    while (!Number.isInteger(int)) {
      console.log("Error. Please provide an integer.");
      int = parseInt(RLSYNC.question(), 10);
    }
    populateArray(int); 
  }
}

function populateArray(num) {
  userInput.push(num);
}

function checkIfNumGreaterThan25(array) {
  return array.some(element => element > 25)
}

function printResults(result, string) {
  if (result) {
    console.log(`It's ${result}! A number > 25 appears in the list ${string}.`);
  } else {
    console.log(`It's ${result}! A number > 25 does not appear in the list ${string}.`);
  }
}

getUserInput();

let isItTrue = checkIfNumGreaterThan25(userInput);

let outputString = userInput.join(" ");

printResults(isItTrue, outputString);

*/
