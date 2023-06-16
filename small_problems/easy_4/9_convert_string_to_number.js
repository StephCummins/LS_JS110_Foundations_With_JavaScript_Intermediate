/* PROBLEM:
The parseInt() method converts a string of numeric characters (including an 
optional plus or minus sign) to an integer. The method takes 2 arguments where 
the first argument is the string we want to convert and the second argument 
should always be 10 for our purposes. parseInt() and the Number() method behave 
similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number 
as an integer. 

INPUT: string of digits
OUTPUT: string as an integer

EXPLICIT RULES:
- You may not use any of the methods mentioned above
- Don't worry about leading + or - signs, or invalid characters
- Assume all characters are numeric
- You may not use any of the standard conversion methods available in JavaScript, 
  such as String() and Number().

EXAMPLES/TEST CASES:
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

DATA STRUCTURE:
- Store numbers as an object, with keys string numbers and values number values:
  const NUMBERS = {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8,
                    9: 9
                  };
- Convert input string to array to iterate over each digit

ALGORITHM:
1) Declare/initialize const NUMBERS object

2) Invoke stringToInteger function and pass numberString as argument
3) Declare arrayOfNumbers varaible and initialize to the following:
    - split numberString to an array with each digit a separate index
    - iterate over array, for each digit return NUMBERS[digit]
4) Declare number variable and initialize to 0
5) arrayOfNumbers contains numbers, but using join will convert them to strings.
   To circumvent this:
    - iterate over arrayOfNumbers:
      - for each digit, reassign the value of number to number * 10 + digit
6) Return number

CODE:

*/
const NUMBERS = {
                  0: 0,
                  1: 1,
                  2: 2,
                  3: 3,
                  4: 4,
                  5: 5,
                  6: 6,
                  7: 7,
                  8: 8,
                  9: 9
                };

function stringToInteger(numberString) {
  let arrayOfNumbers = numberString.split("").map(digit => NUMBERS[digit]);
  let number = 0;
  arrayOfNumbers.forEach(digit => (number = number * 10 + digit));
  return number;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true