// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// Solution #1
let total = 0;

for (let person in munsters) {
  if (munsters[person]["gender"] === "male") {
    total += munsters[person]["age"];
  }
}

console.log(total);

// Solution #2:
let total2 = 0;

let array = Object.values(munsters);

array.forEach(element => {
  if (element["gender"] === "male") {
    total2 += element["age"];
  }
});

console.log(total2);