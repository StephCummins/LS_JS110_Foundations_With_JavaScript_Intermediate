// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

/* In this code, the return value is the array [undefined, "bear"]. In the 
callback function, the if statement checks if the array element length is 
greater than 3. This evaluates as true for the second element "bear", which is 
returned from the function; however, this evaluates as false for the first 
element. Although falsy for the first element, the function still returns 
undefined, since all functions have a return value. 

If the programmer intended for the returned array to only include elements with 
a length greater than 3, the code should be updated to use the filter method 
instead of map:
*/

['ant', 'bear'].filter(elem => elem.length > 3);
