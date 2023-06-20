/* PROBLEM:

Write a function that takes an integer as an argument and returns the next 
featured number greater than the integer. 

EXPLICIT RULES:
- A featured number:
  - Is an odd number that is a multiple of 7
  - All of its digits occur exactly once 
- Issue an error message if there is no next featured number.
- The largest possible featured number is 9876543201

EXAMPLES/TEST CASES:

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

DATA STRUCTURE: 
- const LARGEST_POSSIBLE_FEATURED_NUM = 9876543201
- const BASE_SEVEN = 7;
- To check for repeat digits, the input number will be converted to a string, 
  then an array to iterate over each digit

ALGORITHM:
1) Declare/initialize 2 consts:
   - const LARGEST_POSSIBLE_FEATURED_NUM = 9876543201
   - const BASE_SEVEN = 7
2) Invoke the function featured, and pass in the number as the argument
3) Check if number is greater than or equal to LARGEST_POSSIBLE_FEATURED_NUM
   - IF it is, return error message:
     "There is no possible number that fulfills those requirements."
4) Declared variable featuredNum and initialize to the following:
   subtract number % 7 from number
5) Iterate through a while (true) loop. Each iteration:
   - Increment featuredNum by 7 (BASE_SEVEN)
   - IF featuredNum is even, CONTINUE;
     ***Use a separate function to check if featuredNum % 2 === 0
   - IF featuredNum has repeating digits, CONTINUE;
     *** Use a separate function to check for repeating digits:
      - convert number to string to array, with each digit a separate element.
      - Iterate through array to see if any digit repeat
   - ELSE BREAK;
6) return featuredNUM

CODE:
*/
const LARGEST_POSSIBLE_FEATURED_NUM = 9876543201;
const BASE_SEVEN = 7;

function featured(number) {
  if (number >= LARGEST_POSSIBLE_FEATURED_NUM) {
    return "There is no possible number that fulfills those requirements.";
  }
  
  let featuredNum = number - (number % BASE_SEVEN);
  
  while (true) {
    featuredNum += BASE_SEVEN;
    
    if (checkIfEven(featuredNum)) continue;
    
    if (checkForRepeatDigits(featuredNum)) continue;
    
    break;
  }

  return featuredNum;
}

function checkIfEven(number) {
  return number % 2 === 0;
}

function checkForRepeatDigits(number) {
  let arr = String(number).split("");
  let repeat = false;
  
  for (let x = 0; x < arr.length; x++) {
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[x] === arr[y]) {
        repeat = true;
        break;
      }
    }
  }
  return repeat;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
