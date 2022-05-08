/*
The Fibonacci series is a classic mathematical series in which the next number is calculated as the sum of the previous two numbers.

Finding the nth Fibonacci number can be calculated iteratively by summing the two previous numbers, or it can be calculated recursively.
However, as n grows, the number of function calls increases quickly.

We can use a technique called memoization to cut down greatly on the number of function calls necessary to calculate the correct number.
Memoization is a specialized form of caching used to store the result of a function call. The next time that function is called, instead 
of running the function itself, the result is used directly. Memoization can result in much faster overall execution times (although it 
can increase memory requirements as function results are stored in memory).

Memoization is a great technique to use alongside recursion. The memo can even be saved between function calls if it’s being used for 
common calculations in a program.

It takes 177 function calls to calculate the 10th number recursively. With memoization, it will only be 19.
*/

const memo = {};

const fibonacci = num => {
  let returnValue;
  
  if (memo[num]) {
    returnValue = memo[num];
  } else if (num === 0 || num === 1) {
    returnValue = num;
  } else {
    returnValue = fibonacci(num - 1) + fibonacci(num - 2);
    memo[num] = returnValue;
  }
  return returnValue;
}

// Test your code with calls here:
console.log(fibonacci(20));
console.log(fibonacci(200));