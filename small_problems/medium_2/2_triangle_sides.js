/* PROBLEM:

Write a function that takes the lengths of the three sides of a triangle as 
arguments and returns one of the following four strings representing the 
triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

EXPLICIT RULES:

- To be a valid triangle:
    - The sum of the lengths of the two shortest sides must be greater than the 
      length of the longest side, and every side must have a length greater 
      than 0. If either of these conditions is not satisfied, the triangle is
      invalid.
- A triangle is classified as follows:
    - Equilateral: All three sides are of equal length.
    - Isosceles: Two sides are of equal length, while the third is different.
    - Scalene: All three sides are of different lengths.

INPUT: 3 numbers, each representing a side of a triangle
OUTPUT: string representing type of triangle (or invalid)

EXAMPLES / TEST CASES: 

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

DATA STRUCTURE: array with each side a different element

ALGORITHM:
1) Invoke triangle and pass in each side as an argument
2) Declare tri and initialize as array with each side a separate element
3) Sort tri arary from smallest side to largest side
4) Check if tri[0] (the smallest side) === 0
    - IF it evaluates to true, return "invalid"
5) Check if the sum of the two smallest sides (tri[0] and tri[1]) is less than
   the third side (tri[2])
    - IF it evaluates to true, return "invalid"
6) Check if all sides are equal
    - IF it evlauates to true, return "invalid"
7) Check if two triangle sides are equal
    - IF it evaluates to true, return isoceles
8) ELSE, return "scalene"

CODE:
*/

function triangle(sideA, sideB, sideC) {
  let tri = [sideA, sideB, sideC].sort((a, b) => a - b);
  
  if (tri[0] === 0) return "invalid";
  else if (tri[0] + tri[1] < tri[2]) return "invalid";
  else if (tri[0] === tri[1] && tri[1] === tri[2]) return "equilateral";
  else if (tri[0] === tri[1] || tri[1] === tri[2] || tri[2] === tri[0]) return "isoceles";
  else return "scalene";
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"