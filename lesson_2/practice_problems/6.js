/* Given this previously seen family object, print the name, age, and gender 
of each family member. Each output line should follow this pattern:

(Name) is a (age)-year-old (male or female). */

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// Solution 1:
for (let person in munsters) {
  let name = person[0].toUpperCase() + person.slice(1);
  console.log(`${name} is a ${munsters[person]["age"]}-year-old ${munsters[person]["gender"]}.`);
}

// Solution 2:
Object.entries(munsters).forEach(entry => {
  let name = entry[0][0].toUpperCase() + entry[0].slice(1);
  console.log(`${name} is a ${entry[1]["age"]}-year-old ${entry[1]["gender"]}.`);
});

