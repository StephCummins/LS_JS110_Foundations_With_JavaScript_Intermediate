// What is the return value of the filter method call below? Why?

[1, 2, 3].filter(num => 'hi');

/* The return value will be [1, 2, 3], a shallow copy of the original array. In
this example, filter selects any array elements for which the callback function
returns a truthy value. Since the callback function always returns "hi", and
string values (that aren't empty) always evaluate to truthy, each element from
the original array will be selected for the new array. */