/*
Imagine that you’re a thief breaking into a house. There are so many valuables to steal - diamonds, 
gold, jewelry, and more! But remember, you’re just one person who can only carry so much. Each item 
has a weight and value, and your goal is to maximize the total value of items while remaining within 
the weight limit of your knapsack.

The brute force solution to this problem is to look at every subset of the items that has a total 
weight less than the weight capacity of your knapsack. Then you simply take the maximum of those 
subsets, giving you the optimized subset with the highest value possible.

While the recursive (brute-force) solution works, it has a big O runtime of O(2^n). In the worst case, 
each step would require us to evaluate two subproblems, sometimes repeatedly, as there’s overlap 
between subproblems. We can drastically improve on this runtime by using dynamic programming.

The knapsack problem is suited for dynamic programming because memoization will allow us to store 
information instead of making duplicate calls. We will store this information in a two-dimensional 
array that has a row for every item and weightCap + 1 number of columns where each element in the 
2D array (matrix) represents a subproblem. The element at the bottom right will be the optimal solution.

The rows in the matrix represent the items we have seen. So if we are at row 4, then we have only seen 
the first 4 items, meaning the others aren’t being considered yet. The columns represent how much 
weight the knapsack can hold. If we are at column 7, then we are looking at a subset of the larger 
problem where our knapsack has a weight capacity of 7. The number stored inside matrix is the maximum 
value we can take given the weight capacity and number of items we have seen for that subproblem. By 
the time we get to the bottom right space in matrix, we have considered every possible subproblem and 
taken the maximum possible value.

There are some elements in the matrix that will be easy to fill. Every element in the zeroeth row 
represents a subproblem with 0 items to consider, so there is no value. Likewise, every element in 
the zeroeth column represents a subproblem where our knapsack has a capacity of 0, giving us no value 
to take. Because of this, we start by filling the zeroeth row and column with 0.
Pseudocode for the dynamic programming algorithm:

matrix = array with length equal to number of items
for every number of items you can carry (index):
  fill matrix[index] with an array of length weightCap + 1
  for every weight < weightCap (weight):
    if index or weight == 0:
      set element at [index][weight] to 0  
    else if the weight of element at index - 1 <= weight:
      find possible values of including and excluding the item
      set element at [index][weight] to max of those values
    else:
      set element at [index][weight] to element one above
return element at bottom right of matrix

*/

const recursiveKnapsack = function(weightCap, weights, values, i) {
    if (weightCap === 0 || i === 0) {
      return 0;
    } else if (weights[i - 1] > weightCap) {
      return recursiveKnapsack(weightCap, weights, values, i - 1);
    } else {
      const includeItem = values[i - 1] + recursiveKnapsack(weightCap - weights[i - 1], weights, values, i - 1);
      const excludeItem = recursiveKnapsack(weightCap, weights, values, i - 1);
      return Math.max(includeItem, excludeItem);
    }
  };
  
  const dynamicKnapsack = function(weightCap, weights, values) {
    const numItem = weights.length;
    const matrix = new Array(numItem);
    
    for (let index = 0; index <= numItem; index++) {
      matrix[index] = new Array(weightCap + 1);
      for (let weight = 0; weight <= weightCap; weight++) {
        if (index === 0 || weight === 0) {
              matrix[index][weight] = 0;
          } else if (weights[index - 1] <= weight) {
              const includeItem = values[index - 1] + matrix[index - 1][weight - weights[index - 1]];
              const excludeItem = matrix[index - 1][weight];
              matrix[index][weight] = Math.max(includeItem, excludeItem);
          } else {
              matrix[index][weight] = matrix[index - 1][weight];
          }
      }
    }
    return matrix[numItem][weightCap]; 
  };
  
  // Use this to test your function:
  const weightCap = 50;
  const weights = [31, 10, 20, 19, 4, 3, 6];
  const values = [70, 20, 39, 37, 7, 5, 10];
  console.log(dynamicKnapsack(weightCap, weights, values));