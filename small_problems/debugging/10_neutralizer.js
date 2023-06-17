/* We wrote a neutralize function that removes negative words from sentences. 
However, it fails to remove all of them. What does happen? How would you fix 
this problem?

function neutralize(sentence) {
  let words = sentence.split(" ");

  words.forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);

*/

function neutralize(sentence) {
  let words = sentence.split(" ");
  
  return words.map(word => {
    if (!isNegative(word)) return word;
  }).join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);

/* Never mutate an array during an iteration. This will shift the index of 
elements, so that elements may be skipped while iterating over arrays. This is
the error that occurred in the original code. A fix is above...

*/