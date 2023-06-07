// Write a program that uses this array to create an object where the names are 
// the keys and the values are the positions in the array:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function arrayToObject(arr) {
  let obj = {};
  arr.forEach((element, index) => obj[element] = index);
  return obj;
}

console.log(arrayToObject(flintstones));