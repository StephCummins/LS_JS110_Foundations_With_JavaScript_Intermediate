// Perform the same transformation of sorting the subarrays we did in the 
// previous exercise with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArray = arr.map(array => {
  if (typeof array[0] === "number") {
    return array.slice().sort((a, b) => Number(b) - Number(a));
  } else {
    return array.slice().sort((a, b) => b.charCodeAt() - a.charCodeAt());
  }
});

console.log(sortedArray);
console.log(arr);