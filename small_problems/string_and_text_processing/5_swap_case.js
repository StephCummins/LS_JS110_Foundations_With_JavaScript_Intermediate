/* PROBLEM:

Write a function that takes a string as an argument and returns that string with 
every lowercase letter changed to uppercase and every uppercase letter changed 
to lowercase.

INPUT: string
OUTPUT: new string with all lowercase and uppercase letters swapped

EXPLICIT RULES:
- Leave all other characters unchanged

EXAMPLES/TEST CASES:
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

DATA STRUCTURE: 
- Input string => convert to array to iterate through characters
- Convert array to string to return result

ALGORITHM:
1) Invoke the function swapCase and pass in the input string as an argument
2) Split the input string into an array, with each character a different element
3) Iterate through the array. For each character:
    - IF char is lowercase, return the char as uppercase:
        - if (char === char.toLowerCase()) return toUpperCase();
    - ELSE IF char is uppercase, return the char as lowercase:
        - else if (char === char.toUpperCase()) return toLowerCase()
    - ELSE return character
4) Join the array into a string
5) Return the result string

CODE:
*/

function swapCase(wordString) {
  return wordString.split("").map(char => {
    if (char === char.toLowerCase()) return char.toUpperCase();
    else if (char === char.toUpperCase()) return char.toLowerCase();
    else return char;
  }).join("");
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"