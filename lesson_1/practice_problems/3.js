// The following code differs slightly from the code in the previous example. 
// What is the return value of map in this case? Why?

[1, 2, 3].map(num => num * num);

// This example uses proper arrow function syntax. Because the entire return
// value is a single expression on a single line, the return statement can be
// omitted. This is the equivalent of returning num * num for each
// element of the original array. The code returns [1, 4, 9]

