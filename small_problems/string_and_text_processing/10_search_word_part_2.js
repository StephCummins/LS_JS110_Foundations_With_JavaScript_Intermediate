/* PROBLEM:

The function from the previous exercise returns the number of occurrences of 
a word in some text. Although this is useful, there are also situations in which 
we just want to find the word in the context of the text.

For this exercise, write a function that takes a word and some text as arguments, 
and returns the text with every instance of the word highlighted. 

INPUT: word and a string of text
OUTPUT: string of text with the word highlighted

EXPLICIT RULES:
- To highlight a word, enclose the word with two asterisks ('**') on each side 
and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**'). 

EXAMPLES/TEST CASES:
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo 
enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore 
magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate 
velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis 
nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
commodi consequatur blasedbla?';

searchWord('sed', text);
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"

DATA STRUCTURE:
- Input stringOfText => convert to array, with each word a separate element to 
  iterate over while searching for word
  
ALGORITHM:
1) Declare and initialize text constant (with string provided)
2) Invoke the searchWord function and pass in two arguments:
    1) word: the word you are searching for in the text
    2) stringOfText: the text that contains the word
3) Convert the stringOfText into an array, with each word a different element
4) Iterate over the array. For each iteration:
    - Check if the current element.toLowerCase() === word
      - IF it does, return the element in uppercase and highlighted:
          "**" + element.toUpperCase() + "**"
      - ELSE return the element
6) Join the array into a string
7) Return the string;

CODE:
*/

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

function searchWord(word, stringOfText) {
  return stringOfText.split(" ").map(element => {
      if (element.toLowerCase() === word) {
          return "**" + element.toUpperCase() + "**";
      } else {
          return element;
      }
  }).join(" ");
}

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"