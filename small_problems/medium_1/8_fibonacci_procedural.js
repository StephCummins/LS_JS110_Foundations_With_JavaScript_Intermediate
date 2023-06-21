// Rewrite your recursive fibonacci function so that it computes its results 
// without using recursion.

function fibonacci(number) {
  let firstNumber = 1;
  let secondNumber = 1;
  let result;
  for (let count = 2; count < number; count += 1) {
    result = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = result;
  }
  return result;
}

console.log(fibonacci(5));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

// 1, 1, 2, 3, 5, 8, 13, 21