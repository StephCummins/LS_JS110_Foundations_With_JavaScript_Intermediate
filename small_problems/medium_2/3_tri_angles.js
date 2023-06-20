/* PROBLEM:

Write a function that takes the three angles of a triangle as arguments and 
returns one of the following four strings representing the triangle's 
classification: 'right', 'acute', 'obtuse', or 'invalid'.

EXPLICIT RULES:
- A triangle is classified as follows:
    - Right: One angle is a right angle (exactly 90 degrees).
    - Acute: All three angles are less than 90 degrees.
    - Obtuse: One angle is greater than 90 degrees.
- To be a valid triangle, the sum of the angles must be exactly 180 degrees, 
  and every angle must be greater than 0. If either of these conditions is not 
  satisfied, the triangle is invalid.
- You may assume that all angles have integer values, so you do not have to 
  worry about floating point errors. You may also assume that the arguments are 
  in degrees.
  
EXAMPLES/TEST CASES:

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

DATA STRUCTURE: array with each element a different triangle angle

ALGORITHM:
1) Invoke triangle and pass in the three angles as arguments
2) Declare tri variable and initialize to array with each angle an element
3) Sort the array, from smallest angle to largest angle
4) Check a range of IF/ELSE statements to determine triangle type:
    - IF the smallest angle is <= 0, return "invalid"
    - ELSE IF all three angles added up !== 180, return "invalid"
    - ELSE IF the array includes 90, return "right"
    - ELSE IF the largest angle is < 90, return "acute"
    - ELSE return "obtuse"
*/

function triangle(angleA, angleB, angleC) {
  let tri = [angleA, angleB, angleC].sort((a, b) => a - b);
  
  if (tri[0] <= 0) return "invalid";
  else if (tri.reduce((a, b) => a + b) !== 180) return "invalid";
  else if (tri.includes(90)) return "right";
  else if (tri[2] < 90) return "acute";
  else return "obtuse";
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
