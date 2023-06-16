/* PROBLEM:

Write a function that takes two arguments, a word and a string of text, and 
returns an integer representing the number of times the word appears in the text.

INPUT: word and a string of text
OUTPUT: integer representing the amount of times the word appears in the text

EXPLICIT RULES:
- You may assume that the word and text inputs will always be provided, and that 
all word breaks are spaces. Thus, some words will include punctuation such as 
periods and commas. 
- Also assume that the search is case-insensitive. 

EXAMPLES/TEST CASES:
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo 
enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla 
pariatur?';

searchWord('sed', text);      // 3

DATA STRUCTURE:
- Input stringOfText => convert to array, with each word a different element to 
  iterate over
  
ALGORITHM:
1) Declare and initialize text constant (with string provided)
2) Invoke the searchWord function and pass in two arguments:
    1) word: the word you are searching for in the text
    2) stringOfText: the text that contains the word
3) Declare the count variable and initialize to 0
4) Convert the stringOfText into an array, with each word a different element
5) Iterate over the array. For each iteration:
    - Check if the current element.toLowerCase() === word
      - IF it does, increment the count by 1
6) Return count;

CODE:
*/

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

function searchWord(word, stringOfText) {
  let count = 0;
  
  stringOfText.split(" ").forEach(element => {
    if (element.toLowerCase() === word) count += 1;
  });
  
  return count;
}

console.log(searchWord('sed', text));      // 3