/* What is the callback's return value in the following code? Also, what is the 
return value of every in this code? */

[1, 2, 3].every(num => {
  return num = num * 2;
});

/* The return value of every is true. The .every() array prototype method is 
non-destructive and returns boolean true or false, pending if every element in
the array meets a specific criteria (in this case, the return value of the 
callback function). The callback function returns the value of num, which is
reassigned to num * 2 for each element: 2, 4, 6. Each of these values evaluates
to true, so every returns true. */

