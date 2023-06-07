// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// Option 1:
let total = 0;
let agesArray = Object.values(ages);
    agesArray.forEach(num => total += num);
console.log(total);

// Option 2:
let newAges = Object.values(ages);
    newAges = newAges.reduce((a, b) => a + b, 0);
console.log(newAges);