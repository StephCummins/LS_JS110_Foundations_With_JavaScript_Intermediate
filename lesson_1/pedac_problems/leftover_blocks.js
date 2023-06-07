/* PROBLEM:
INPUT: Integer (number of cubes)
OUTPUT: Integer (number of cubes leftover after building tallest valid structure)

EXPLICIT RULES:
- Structure is built in layers and each layer is made up of 3D cube building blocks
- Top layer is a single block
- Top layer must be supported by 4 blocks in a lower layer
- Lower layer blocks can support more than 1 block in upper layer
- Cannot leave gaps between blocks

IMPLICIT RULES:
- Number of Blocks in Layer = Layer * Layer
1 = 1 x 1 (1)
2 = 2 x 2 (4)
3 = 3 x 3 (9)
4 = 4 x 4 (16)
5 = 5 x 5 (25)

EXAMPLES & TEST CASES:

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

DATA STRUCTURE:
- Pyramid of blocks
- Each layer will contain layer squared amount of blocks

ALGORITHM:
1) Check if input === 0:
    - If YES: Return 0
    - Else: Continue
2) Declare and initiaize totalBlocks to input
3) Declare and initialize blocksUsed to 0
4) Declare and initialize layer to 1
5) Check if blocks used is <= totalBlocks
    - If YES: add layer squared to totalBlocks and increment layer by 1
    - If NO: break;

*/

function calculateLeftoverBlocks(input) {
  let blocksRemaining = input; //2
  let layer = 0;
  let blocksUsed = (layer + 1)**2;
  
  while (blocksRemaining >= blocksUsed) {
   blocksRemaining -= blocksUsed;
   layer += 1;
   blocksUsed = (layer + 1)**2;
  }
  return blocksRemaining;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

console.log(calculateLeftoverBlocks(0));
console.log(calculateLeftoverBlocks(1));
console.log(calculateLeftoverBlocks(2));
console.log(calculateLeftoverBlocks(4));
console.log(calculateLeftoverBlocks(5));
console.log(calculateLeftoverBlocks(6));
console.log(calculateLeftoverBlocks(14));