// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// Option 1:
let ageArray = Object.values(ages);
ageArray.sort((a, b) => a - b);
console.log(`The youngest age is ${ageArray[0]}.`);

// Option 2:
console.log(`The youngest age is ${Math.min(...ageArray)}.`);