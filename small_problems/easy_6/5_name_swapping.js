/* PROBLEM:

Write a function that takes a string argument consisting of a first name, a 
space, and a last name, and returns a new string consisting of the last name, 
a comma, a space, and the first name.

INPUT: string (first name, a space, and a last name)
OUTPUT: new string (last name, a comma, a space, and the first name)

EXAMPLES/TEST CASES:
swapName('Joe Roberts');    // "Roberts, Joe"

DATA STRUCTURE:
- Input string > convert to array to iterate through words > convert array to
  output string to return value

ALGORITHM:
1) Invoked the function swapName and pass in the input str as an argument
2) Split name into an array, with each word a separate element: split(" ")
3) Reverse the array: reverse()
4) Join the array to a string: join(", ")
5) Return the string

CODE:
*/

function swapName(name) {
  return name.split(" ").reverse().join(", ");
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"


/* FURTHER EXPLORATION

What if the person has one or more middle names? Refactor the current solution 
so that it can accommodate this; the middle names should be listed after 
the first name:

*/

function swapLongName(name) {
  let nameArray = name.split(" ");
  let lastName = nameArray.pop();
  return lastName + ", " + nameArray.join(" ");
}


console.log(swapLongName('Karl Oskar Henriksson Ragvals'));    
// "Ragvals, Karl Oskar Henriksson"