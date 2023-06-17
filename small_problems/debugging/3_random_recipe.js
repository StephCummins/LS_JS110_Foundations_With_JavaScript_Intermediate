/* PROBLEM: 

One bored and hungry evening we decided to randomly generate recipes. We can't 
wait to see the first suggestions, but JavaScript raises a TypeError, telling us 
that dishName.join is not a function. What is wrong?

// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

let ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

let spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

let dishName = random(adjective) + random(firstNoun) + random(secondNoun);
let dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(', '));

The issue is on lines 47 and 58. The code proposes concatenating multiple
arrays with the + operator, which automatically turns the arrays into strings:

dishname = "adjectivefirstNounsecondNoun" (note that all three words are
concatenated into a single string, without any spaces between them)

On lines 50 and 51, the join method is actually being called on two strings 
instead of arrays. This doesn't work, so JavaScript throws an error.

Instead of concatenating the arrays with the + operator, use the array.concat()
method. See fixed code below...

*/

// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

let ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

let spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

let dishName = random(adjective).concat(random(firstNoun), random(secondNoun));
let dish = random(ingredients, 3).concat(random(spices, 2), random(extras, 1));

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(', '));