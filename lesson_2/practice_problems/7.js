/* Given the following code, what will the final values of a and b be? Try to 
answer without running the code. */

let a = 2;
let b = [5, 8];
let arr = [a, b]; // [2, [5, 8]]

arr[0] += 2; // [4, [5, 8]]
arr[1][0] -= a; // [4, [3, 8]]


/* 
a equals 2: Primitive values are atomic and immutable, and a was never
reassigned a new value.

b equals [3, 8]. The variable b points to the same array as the array at the 1
index of arr. When arr[1][0] is reassigned a new value, this mutates the array.
Since b and arr point to the same array, both reflect the change

*/


