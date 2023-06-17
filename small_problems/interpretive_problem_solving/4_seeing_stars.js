/* PROBLEM:

Write a function that displays an 8-pointed star in an NxN grid, where N is an 
odd integer that is supplied as an argument to the function. The smallest such 
star you need to handle is a 7x7 grid (i.e., when N is 7).

INPUT: number (number of stars on each point of larger star)
OUTPUT: star

star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

DATA STRUCTURE / ALGORITHM / NOTES:
- Middle row has number of amount of stars
- For top & bottom half, each row has:
  - 3 stars
  - spaces = number - stars
- Pattern for top and bottom half:
  - spaces | stars | spaces | stars | spaces | stars | spaces
- Top Half Of Star: 
  - FIRST ROW: | star | spacesBetweenStars | star | spacesBetweenStars | star |
    - spacesPerSide = 0
    - spacesBetweenStars = spaces / 2
    - after printing row:
      - spacesPerSide += 1
      - spacesBetweenStars -= 1
  - SECOND ROW: Print:
    - spacesPerSide | star | spacesBetweenStars | star | spacesBetweenStars | star | spacesPerSide
    - spacesPerSide += 1
    - spacesBetweenStars -= 1
  - Continue pattern...
- Bottom half of star: The reverse of top half of star
  - FIRST ROW: spacesPerSide | 3 stars | spacesPerSide
    - spacesPerSide = spaces / 2
    - spacesBetweenStars = 0
    - after printing row:
      - spacesPerSide -= 1
      - spacesBetweenStars += 1
  - SECOND ROW: Print:
    - spacesPerSide | star | spacesBetweenStars | star | spacesBetweenStars | star | spacesPerSide
    - spacesPerSide -= 1
    - spacesBetweenStars += 1
  - Continue pattern...

*/

const NUMBER_OF_STARS = 3;

function star(number) {
  let stars = "*";
  let spaces = " ";
  let numberOfSpaces = number - NUMBER_OF_STARS;
  let lines = Math.floor(number / 2);
  
  printTopHalf(number, lines, NUMBER_OF_STARS, numberOfSpaces, stars, spaces);
  printMiddleRow(number, stars);
  printBottomHalf(number, lines, NUMBER_OF_STARS, numberOfSpaces, stars, spaces);
}

function printTopHalf(number, lines, nSt, nSp, st, sp) {
  let spacesPerSide = 0;
  let spacesBetweenStars = nSp / 2;
  for (let row = 1; row <= lines; row += 1) {
    printRow(spacesPerSide, spacesBetweenStars, st, sp);
    spacesPerSide += 1;
    spacesBetweenStars -= 1;
  }
}

function printMiddleRow(numberOfStars, stars) {
  console.log(stars.repeat(numberOfStars));
}

function printBottomHalf(number, lines, nSt, nSp, st, sp) {
  let spacesPerSide = nSp / 2;
  let spacesBetweenStars = 0;
  for (let row = 1; row <= lines; row += 1) {
    printRow(spacesPerSide, spacesBetweenStars, st, sp);
    spacesPerSide -= 1;
    spacesBetweenStars += 1;
  }
}

function printRow(sps, sbs, st, sp) {
  console.log(`${sp.repeat(sps)}${st}${sp.repeat(sbs)}${st}${sp.repeat(sbs)}${st}${sp.repeat(sps)}`);
}

star(7);
star(9);

