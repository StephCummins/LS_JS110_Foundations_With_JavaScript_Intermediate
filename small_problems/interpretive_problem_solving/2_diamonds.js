/* PROBLEM:

Write a function that displays a four-pointed diamond in an nxn grid, where n is 
an odd integer supplied as an argument to the function. You may assume that the 
argument will always be an odd integer.

INPUT: number (this represents the width of the diamond at its widest point, as
       well as the height of the diamond)
OUPUT: diamond of asterisks

EXAMPLES/TEST CASES:

diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *
 
 diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
    
DATA STRUCTURE:
- Top half of diamond is inverse pattern of bottom half of diamond
- each line is made up of spaces and asterisks:
  - each line contains an odd number of asterisks, counting up until you reach
    the number/middle (1, 3, 5, 7, 9). Once you reach the number/middle, the 
    asterisks count back down (7, 5, 3, 1)
  - the remainder is spaces = number - asterisk = total spaces 
  - layout on each line: (total spaces / 2) + asterisks + (total spaces / 2)
const ODD_INTERVAL = 2;
const HALF = 2;

ALGORITHM:
1) Invoke diamond and pass the number to the function as an argument
2) SET stars = '*'
3) SET spaces = ' '
4) SET linesPerHalf = Math.floor(number / 2)

5) Invoke the function printTopHalfOfDiamond and pass in the following as 
   arguments:
    - numbers, linesPerHalf, stars, spaces
6) SET numberOfStars = 1 (this will be the top point of the diamond)
7) Iterate linesPerHalf amount of times with a for loop. Line will increment by
   1 each time the loop runs:
    - Calculate spaces per each side of star(s): number - numberOfStars / 2
    - Console.log a row of spaces and starts:
      - spaces.repeat(spacesPerSide)
      - stars.repeat(numberOfStars)
      - spaces.repeat(spacesPerSide)
    - Add 2 to numberOfStars to get to the next odd interval
    
8) Invoke the function printMiddleRowOfDiamond and pass in the number and stars
   as arguments
9) Console.log a row of number amount of stars

10) Invoke the function printBottomHalfOfDiamond and pass in the following as 
   arguments:
    - numbers, linesPerHalf, stars, spaces
11) SET numberOfStars = number - 2 (number is the widest part of the diamond, 
    and subtracting by 2 provides the next odd interval)
12) Iterate linesPerHalf amount of times with a for loop. Line will increment by
   1 each time the loop runs:
    - Calculate spaces per each side of star(s): number - numberOfStars / 2
    - Console.log a row of spaces and starts:
      - spaces.repeat(spacesPerSide)
      - stars.repeat(numberOfStars)
      - spaces.repeat(spacesPerSide)
    - Subtract 2 from numberOfStars to get to the next odd interval

CODE:
*/
const ODD_INTERVAL = 2;
const HALF = 2;

function diamond(number) {
  let stars = "*";
  let spaces = " ";
  let linesPerHalf = Math.floor(number / HALF);
  
  printTopHalfOfDiamond(number, linesPerHalf, stars, spaces);
  printMiddleRowOfDiamond(number, stars);
  printBottomHalfOfDiamond(number, linesPerHalf, stars, spaces);
}

function printTopHalfOfDiamond(number, totalLines, stars, spaces) {
  let numberOfStars = 1;
  
  for (let line = 1; line <= totalLines; line += 1) {
    let spacesPerSide = calcSpacesPerSide(number, numberOfStars);
    logSpacesAndStars(numberOfStars, spacesPerSide, stars, spaces);
    numberOfStars += ODD_INTERVAL;
  }
}

function printMiddleRowOfDiamond(number, stars) {
  console.log(stars.repeat(number));
}

function printBottomHalfOfDiamond(number, totalLines, stars, spaces) {
  let numberOfStars = number - ODD_INTERVAL;
  
  for (let line = 1; line <= totalLines; line += 1) {
    let spacesPerSide = calcSpacesPerSide(number, numberOfStars);
    logSpacesAndStars(numberOfStars, spacesPerSide, stars, spaces);
    numberOfStars -= ODD_INTERVAL;
  }
}
function calcSpacesPerSide(number, numberOfStars) {
  return (number - numberOfStars) / HALF;
}

function logSpacesAndStars(nSt, nSp, st, sp) {
   console.log(`${sp.repeat(nSp)}${st.repeat(nSt)}${sp.repeat(nSp)}`);
}

diamond(1);
diamond(3);
diamond(9);
diamond(33);