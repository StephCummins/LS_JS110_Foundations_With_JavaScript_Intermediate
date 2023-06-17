/* PROBLEM:

A collection of spelling blocks has two letters per block, as shown in this 
list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do 
not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true if the 
word can be spelled using the set of blocks, false otherwise. You can consider 
the letters to be case-insensitive when you apply the rules.

INPUT: string (a single word)
OUPUT: boolean (true if you can spell the word with blocks, otherwise false)

EXAMPLES/TEST CASES:

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

DATA STRUCTURE:
Array of blocks, with each element containing the two letters for each block
let blocks = ["BO", "XK", "DQ", "CP", "NA", "GT", "RE", "FS", "JW", "HU", "VI",
              "LY", "ZM"];

ALGORITHM
1) Invoke isBlockWord and pass in the word string to the function as an argument
2) Declare/initialize blocks array
3) Declare spell variable and initialize to boolean true
3) Convert word to all uppercase letters (to match the blocks array)
4) Split word into an array, with each letter a separate element
5) Iterate through the word array with a for loop: Run array.length amount of
   times. Start the index at 0 and increment it by 1 each time the loop runs:
   - Check if the blocks array includes array[idx] by using findIndex:
   - findIndex returns - 1 if there is no match. If this occurs:
      - reassign spell to boolean false
      - break
   - else remove the block at idx from the array: blocks.splice(idx, 1)
6) Return spell
*/

function isBlockWord(word) {
  let blocks = ["BO", "XK", "DQ", "CP", "NA", "GT", "RE", "FS", "JW", "HU", "VI",
              "LY", "ZM"];
              
  let arrayOfChars = word.toUpperCase().split("");
  
  let spell = true;
  
  for (let wordIdx = 0; wordIdx < arrayOfChars.length; wordIdx += 1) {
    let idx = blocks.findIndex(block => block.includes(arrayOfChars[wordIdx]));
    if (idx === -1) {
      spell = false;
      break;
    } else blocks.splice(idx, 1);
  }
  return spell;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
