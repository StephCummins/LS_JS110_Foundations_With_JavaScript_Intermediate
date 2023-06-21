/* PROBLEM

INPUT: Array of strings
OUTPUT: New array of strings sorted by highest number of adjacent consonants

EXPLICIT RULES:
- If 2 strings have same # of adjacent consonants, they should retain their position
- Consonants are considered adjacent if:
  - They are next to each other in the same word
  - If there is a space between them

IMPLICIT RULES:
- Strings can be multi-word

EXAMPLES / TEST CASES:

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); 
// ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); 
// ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); 
// ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); 
// ['month', 'day', 'week', 'year']

DATA STRUCTURE:
- Arrays

ALGORITHM:
1) Start with an array of strings as input
2) Count how many adjacent consonants each element has:
    - SET highestCount variable to 0
    - SET count variable to 0
    - iterate through string indexes string.length amount of times:
      - Each iteration, check if the current string index is a consonant:
        - IF it is, increment count by 1
          - Check if count > highestCount
            - IF it is, SET highestCount = count;
        - ELSE if it is a vowel, SET count = 0
      - Once you've iterated through the entire word, check if highestCount is
        equal to 1; if it is, set it to 0
      - Return highest count
3) Order array by amount of adjacent consonants
4) Return the array

*/

function sortStringsByConsonants(array) {
  let adjacentConsonants = array.map(element => countAdjacentConsonants(element));
  let returnArray = array.map((element, idx) => [element, adjacentConsonants[idx]]);
  returnArray.sort((a, b) => b[1] - a[1]);
  returnArray = returnArray.map(element => element[0]);
  return returnArray;
}

function countAdjacentConsonants(string) {
  let highestCount = 0;
  let count = 0;
  
  for (let i = 0; i < string.length; i++) {
    if ("bcdfghjklmnpqrstvwxyz".includes(string[i])) {
      count += 1;
      if (count > highestCount) {
        highestCount = count;
      }
    } else if ("aeiou".includes(string[i])) {
      count = 0;
    }
  }
  
  if (highestCount === 1) highestCount = 0;
  
  return highestCount;
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); 
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); 
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); 
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year']));

/*function sortStringsByConsonants(array) {
  let adjacentConsonants = countAdjacentConsonants(array);
  console.log(adjacentConsonants);
  return adjacentConsonants;
}

function countAdjacentConsonants(array) {
  let count = [];
  array.forEach(element => {
    let number = 0;
    for (let i = 0; i < element.length; i++) {
      let letter = element[i];
      let newNumber = 0;
      if ("bcdfghjklmnpqrstvwxyz".includes(letter)) {
        newNumber += 1;
      } else if ("aeiou".includes(letter)) {
        if (newNumber > number) {
          number = newNumber;
        }
      }
    }
    count.push(number);
  });
  
  return count;
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); 
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); 
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); 
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); */