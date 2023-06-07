/* Given the following data structure write some code to return an array 
containing the colors of the fruits and the sizes of the vegetables. The sizes 
should be uppercase, and the colors should be capitalized. */

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// Solution #1:
let objToArray = Object.entries(obj).map(subArray => {
 if (subArray[1]["type"] === "fruit") {
   return subArray[1]["colors"].map(element => element[0].toUpperCase() + element.slice(1));
 } else if (subArray[1]["type"] === "vegetable") {
   return subArray[1]["size"].toUpperCase();
 }
});

console.log(objToArray);

// Solution #2:
let capitalize = word => word[0].toUpperCase() + word.slice(1);

let array = Object.values(obj).map(characteristics => {
  if (characteristics["type"] === "fruit") {
    return characteristics["colors"].map(element => capitalize(element));
  } else if (characteristics["type"] === "vegetable") {
    return characteristics["size"].toUpperCase();
  }
});

console.log(array);