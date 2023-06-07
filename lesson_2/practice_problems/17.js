/* UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters 
a-f) represented as a string. The value is typically broken into 5 sections in 
an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains 
a UUID.

PROBLEM:
INPUT: Nothing
OUTPUT: a 32-digit string, consisting of letters and numbers

EXPLICIT RULES:
- Must contain 32 characters
- Can only contain digits 0-9 and letters a-f in random order
- UUID is broken down into 5 sections in 8-4-4-4-12 pattern


DATA STRUCTURE/ALGORITHM
- Declare and initialize empty string UUID
- Loop through a process 32 times; each time:
  - Decide if digit will be a number or letter
  - If letter, generate a random letter a-f
  - If number, generate a random number 0-9
  - Concat character with UUID string
- Loop through a process to break down string into 8-4-4-4-12 pattern:
  - char[0-7] + "-" + char[8 - ]


*/

let sections = [8, 4, 4, 4, 12];
let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function createUUID() {
  let UUID = "";
  sections.forEach((element, idx) => {
    let string = generateStr(element);
    UUID += string;
    if (idx < sections.length - 1) { 
      UUID += "-";
    }
  });
  return UUID;
}

function generateStr(length) {
  let str = "";
  for (let count = 0; count < length; count += 1) {
    let char = Math.floor(Math.random() * 16);
    str += characters[char];
  }
  return str;
}

console.log(createUUID());
console.log(createUUID());
console.log(createUUID());
console.log(createUUID());