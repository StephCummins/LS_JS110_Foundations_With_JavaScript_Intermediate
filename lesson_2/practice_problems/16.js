/* Given the following data structure, write some code that defines an object 
where the key is the first item in each subarray, and the value is the second. */

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let obj = {};


// Solution 1:
arr.forEach(subArray => {
  let key = subArray[0];
  let value = subArray[1];
  return obj[key] = value;
});

console.log(obj);

// Solution 2:
let obj2 = Object.fromEntries(arr);
console.log(obj2);

