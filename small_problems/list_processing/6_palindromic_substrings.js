/* PROBLEM:

Write a function that returns a list of all palindromic substrings of a string. 
That is, each substring must consist of a sequence of characters that reads the 
same forward and backward. The substrings in the returned list should be sorted 
by their order of appearance in the input string. Duplicate substrings should be 
included multiple times.

You may (and should) use the substrings function you wrote in the previous 
exercise.

For the purpose of this exercise, you should consider all characters and pay
attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' 
are not. In addition, assume that single characters are not palindromes.

INPUT: string
OUTPUT: array of all substrings from input string that are palindromes

EXAMPLES/TEST CASES:

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

DATA STRUCTURE: Arrays

ALGORITHM:
1) Invoke palindromes function and pass the input string as an argument
2) Declare arrayOfSubstrings variable and initialize to the return value of
   calling the substrings function from the previous exercise. Pass the string
   as an argument: substrings(string)
3) Return the following value:
    - Iterate through arrayOfSubstrings. For each element:
      - Declare reversedElement variable and initialize it to the element 
        reversed: element.split("").reverse().join("")
      - compare if element === reversedElement && element.length > 1
        - IF both evaluate to true, add the element to the array that will be
          returned
        - ELSE if both evaluate to false, continue (do not add element to array
          that will be returned)

CODE:
*/

function palindromes(string) {
  let arrayOfSubstrings = substrings(string);
  
  return arrayOfSubstrings.filter(element => {
    let reversedElement = element.split("").reverse().join("");
    return (element === reversedElement && element.length > 1);
  });
  
}

function substrings(string) {
  let substrings = [];
  let newString = string;
  for (let count = 0; count < string.length; count++) {
    substrings.push(leadingSubstrings(newString));
    newString = newString.split("");
    newString.shift();
    newString = newString.join("");
  }
  return substrings.flat();
}

function leadingSubstrings(string) {
  let substring = "";
  
  return string.split("").map(char => substring += char);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]