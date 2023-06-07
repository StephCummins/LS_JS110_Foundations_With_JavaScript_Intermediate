// Create an object that expresses the frequency with which each letter occurs 
// in this string:

let statement = "The Flintstones Rock";

let flintstones = {};

let array = statement.split("").filter(char => char !== " ");

array.forEach(element => {
  flintstones[element] = flintstones[element] || 0;
  flintstones[element] += 1;
});

console.log(flintstones);