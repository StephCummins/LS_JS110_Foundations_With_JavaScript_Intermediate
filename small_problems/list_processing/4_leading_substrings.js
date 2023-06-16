/* PROBLEM

Write a function that takes a string argument and returns a list of substrings 
of that string. Each substring should begin with the first letter of the word, 
and the list should be ordered from shortest to longest.

Input: string 
Output: array with substrings of original string

EXAMPLES/TEST CASES:
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

DATA STRUCTURE:
- Input string => convert to array with each char from original string a 
  different element
- result array with all substrings

ALGORITHM:
1) Invoke the leadingSubstrings function and pass in the input string argument
2) Declare variable substring and initialize as empty string
3) Declare variable result and initialize as empty array
4) Convert string to array (.split("")), with each char a different element
5) Iterate through array (map). For each character:
    - concatenate substring with the character: substring += char
    - add the new value of substring to the result array
6) Return result

// SOLUTION 1: forEach
function leadingSubstrings(string) {
  let result = [];
  let substring = "";
  
  string.split("").forEach(char => result.push(substring += char));
  
  return result;
}
*/

// SOLUTION 2: map
function leadingSubstrings(string) {
  let substring = "";
  
  return string.split("").map(char => substring += char);
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]