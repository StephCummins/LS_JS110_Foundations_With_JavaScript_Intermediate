/* PROBLEM:

Write a program that prints the longest sentence in a string based on the number 
of words. 

EXPLICIT RULES:
- Sentences may end with periods (.), exclamation points (!), or question marks 
  (?). 
- You should treat any sequence of characters that are not spaces or sentence-
  ending characters as a word. Thus, -- should count as a word. 
- Log the longest sentence and its word count to the console. 
- Pay attention to the expected output, and be sure you preserve the punctuation 
  from the end of the sentence. Note that this problem is about manipulating and 
  processing strings. As such, every detail about the string matters (e.g., 
  case, punctuation, tabs, spaces, etc.).
  
INPUT: string

OUTPUT: string that is the longest sentence & amount of words that longest
        sentence has

EXAMPLES/TEST CASES:
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

DATA STRUCTURE:
- convert string to array, with space as separator between elements
- current array
- longest array
- const END_OF_SENTENCE = [".", "!", "?"]
  
ALGORITHM:
1) Declare const END_OF_SENTENCE and initialize to array [".", "!", "?"]
2) Invoke longestSentence and pass in the text argument
3) Declare and initialize the following variables:
    - let currentLength = 0
    - let currentSentence = []
    - let longestLength = 0
    - let longestSentence = []
4) Split text into an array, with each word a separate element (split(" "))
5) Iterate through text array. For each word:
    - Add the word to currentSentence []
    - Split the word into an array
    - Check if the last element of the array is included in the END_OF_SENTENCE
      array. If it is, you've reached the end of a sentence:
      - SET currentLength = currentSentence.length
      - IF (longestLength === 0 || currentLength > longestLength)
        - longestSentence = currentSentence.slice()
        - longestLength = currentLength;
      - reset currentLength to 0
      - reset currentSentence to empty array []
    - continue to line 86
6) Join longestSentence into a string
7) Log longestSentence and its length to the console

CODE:
*/

const END_OF_SENTENCE = [".", "!", "?"];

function longestSentence(text) {
  let currentLength = 0;
  let currentSentence = [];
  
  let longestLength = 0;
  let longestSentence = [];
  
  text.split(" ").forEach(element => {
    currentSentence.push(element);
    let currentWord = element.split("");
    
    if (END_OF_SENTENCE.includes(currentWord[currentWord.length - 1])) {
      currentLength = currentSentence.length;
      
      if (longestLength === 0 || longestLength < currentLength) {
        longestLength = currentLength;
        longestSentence = currentSentence.slice();
      } 
      currentLength = 0;
      currentSentence = [];
    }
  });
  
  longestSentence = longestSentence.join(" ");
  
  console.log(`${longestSentence}\n`);
  console.log(`The longest sentence has ${longestLength} words.\n`);
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.