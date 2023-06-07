// How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

/* The fill prototype array method is destructive, so it mutates the caller.
You can find this out by logging the current value of arr, after invoking the
fill method, or checking the MDN documentation. The fill method has multiple
parameters (value to fill array, start index, end index). In this example, the 
value 1 is to replace all elements starting at index 1 and ending at index 5.

The return value of this code is [1, 1, 1, 1, 1].
*/