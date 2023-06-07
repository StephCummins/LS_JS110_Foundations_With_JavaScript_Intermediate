// What is the return value of the following statement? Why?

['ant', 'bear', 'caterpillar'].pop().length;

/* This code returns 11. The .pop() destructive array method removes and returns
the last element of the array, in this case, the string "caterpillar". When used
in conjunction with the length property, the return value is the length of the
string "caterpillar". */