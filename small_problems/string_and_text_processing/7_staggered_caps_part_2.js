/* Modify the function from the previous exercise so it ignores non-alphabetic 
characters when determining whether it should uppercase or lowercase each 
letter. The non-alphabetic characters should still be included in the return 
value; they just don't count when toggling the desired case. */

function staggeredCase(wordString) {
  let uppercase = 0;
  
  return wordString.split("").map(char => {
    if (char >= "A" && char <= "Z" || char >="a" && char <= "z") {
      if (uppercase === 0) {
        uppercase += 1;
        return char.toUpperCase();
      } else if (uppercase === 1) {
        uppercase -= 1;
        return char.toLowerCase();
      }
    } else return char;
  }).join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

/* FURTHER EXPLORATION:

Modify this function so the caller can determine whether non-alphabetic 
characters should be counted when determining the upper/lowercase state. That
is, you want a function that can perform the same actions that this function 
does, or that operates like the previous version. */

function staggeredCase2(wordString, includeAllChars = "yes") {
  if (!includeAllChars) return staggeredCase1(wordString);
  
  let uppercase = 0;
  
  return wordString.split("").map(char => {
    if (char >= "A" && char <= "Z" || char >="a" && char <= "z") {
      if (uppercase === 0) {
        uppercase += 1;
        return char.toUpperCase();
      } else if (uppercase === 1) {
        uppercase -= 1;
        return char.toLowerCase();
      }
    } else return char;
  }).join("");
}

function staggeredCase1(wordString) {
  return wordString.split("").map((char, idx) => {
    if (idx % 2 === 0) return char.toUpperCase();
    else if (idx % 2 === 1) return char.toLowerCase();
  }).join("");
}

console.log(staggeredCase2("I Love Launch School!", 'yes') === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase2("ALL CAPS", 'yes') === "AlL cApS");
console.log(
  staggeredCase2("ignore 77 the 444 numbers", 'yes') === "IgNoRe 77 ThE 444 nUmBeRs"
);

console.log(staggeredCase2('I Love Launch School!', 'no'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase2('ALL_CAPS', 'no'));                     // "AlL_CaPs"
console.log(staggeredCase2('ignore 77 the 4444 numbers', 'no'));