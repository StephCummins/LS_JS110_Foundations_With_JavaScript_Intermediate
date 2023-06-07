// What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

/* The following code will return [undefined, undefined, undefined] because the 
return statement is omitted. To return [1, 4, 9], the arrow function needs to
either include a return statement on line 4 or the full return statement must be
on one line, in this case, line 3. The following updates to the code would 
return the intended result:
*/

[1, 2, 3].map(num => num * num);

[1, 2, 3].map(num => {
  return num * num;
})