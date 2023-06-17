/* PROBLEM:

Write a function that counts the number of occurrences of each element in a 
given array. Once counted, log each element alongside the number of occurrences. 

INPUT: Array
OUTPUT: console.log() a list of how many times each array element occurs

EXPLICIT RULES:
- Consider the words case sensitive e.g. ("suv" !== "SUV").

EXAMPLE/TEST CASES:

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

DATA STRUCTURE:
- Array of vehicles (provided by assignment)
  let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];
- Store occurrence of each element in an object: {vehicleType: #}

ALGORITHM:
1) Invoke countOccurrences and pass the array argument to the function
2) Declare obj and initialize to empty object {}
3) Iterate through arr (forEach). On each iteration:
    - check if obj[element] exists:
      - IF it does, add it and initialize it to 0 (obj[element] = 0)
      - ELSE go to next step
    - obj[element] += 1
4) Convert obj to an array (Object.entries())
5) Iterate through array of objects. On each iteration:
    - console.log(`${element[0]}: ${element[1}`)
*/

function countOccurrences(arr1) {
  let obj = {};
  
  arr1.forEach(element => {
    if (!obj[element]) obj[element] = 0;
    obj[element] += 1;
  });
  
  Object.entries(obj).forEach(ele => console.log(`${ele[0]}: ${ele[1]}`));
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);