/* PROBLEM

Building on the previous exercise, write a function that returns true or false 
based on whether or not an inventory item is available. As before, the function 
takes two arguments: an inventory item and a list of transactions. The function 
should return true only if the sum of the quantity values of the item's 
transactions is greater than zero. 

Notice that there is a movement property in each transaction object. A movement 
value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.

INPUT: Two arguments: inventory item and list of transactions
OUTPUT: Boolean t/f (only returns true if the sum of the quantity values for an
        item is > 0)

EXAMPLES/TEST CASES:

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

DATA STRUCTURE:
- transactions = array of objects

ALGORITHM:
1) Declare transactions array and initialize (array of objects)
2) Invoke isItemAvailable function and pass in two arguments:
    1) item ID
    2) list of transactions
3) Get an array of all item transactions for the ID by calling the 
   transactionsFor function from the last exercise. Set the return value to 
   variable itemTransactions
4) Declare totalInventory variable and initialize to 0
5) Iterate through itemTransaactions array. For each element (object):  
    - Check if element["movement"] is in (+) or out (-)
      - IF "in" increase totalInventory by element["quantity"]
      - ESE IF "out" decrease totalInventory by element["quantity"]
6) Check if totalInventory > 0 and return true / false

CODE:
*/
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function isItemAvailable(ID, list) {
  let itemTransactions = transactionsFor(ID, list);
 
  let totalInventory = 0;
  
  itemTransactions.forEach(element => {
    if (element["movement"] === "in") {
      totalInventory += element["quantity"];
    } else if (element["movement"] === "out") {
      totalInventory -= element["quantity"];
    }
  });
  
  return totalInventory > 0;
}

function transactionsFor(ID, list)  {
  let result = transactions.filter(element => element["id"] === ID);
  
  return result;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true