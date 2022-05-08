/*
The capturing rainwater problem asks you to calculate how much rainwater would be trapped 
in the empty spaces in a histogram (a chart which consists of a series of bars).
A histogram can be represented in JavaScript as an array filled with the values, ex [4, 2, 1, 3, 0, 1, 2]. 
Imagine that rainwater has fallen over the histogram and collected between the bars.
The amount of water that can be captured at any given space cannot be higher than the bounds around it. 
To solve the problem, we need to write a function that will take in an array of integers and calculate 
the total water captured. 
Our function would return 6 for the histogram above. The amount of water at index 4 is 2. This is because 
its highest left bound is 3 (element at index 3), and its highest right bound is 2 (element at index 6). 
The lower of these two values is 2, and when we subtract the index’s height of 0, we get our answer of 2.

The naive solution to the problem is to:
1. Traverse every element in the array
2. Find the highest left bound for that index
3. Find the highest right bound for that index
4. Take the lower of those two values
5. Subtract the height of that index from that minimum
6. Add the difference to the total amount of water

While this is a functional solution, it requires nested for loops, which means it has a big O runtime of O(n^2).

Instead, it’s possible to solve this problem in O(n) time by using two pointers. The pointers will start at each 
end of the array and move towards each other. The two-pointer approach is a common approach for problems that 
require working with arrays, as it allows you to go through the array in a single loop and without needing to create copy arrays.
*/

function efficientSolution(heights) {
    let totalWater = 0;
    let leftPointer = 0;
    let rightPointer = heights.length - 1;
    let leftBound = 0;
    let rightBound = 0;
    
    while (leftPointer < rightPointer) {
      if (heights[leftPointer] <= heights[rightPointer]) {
        leftBound = Math.max(heights[leftPointer], leftBound);
        totalWater += leftBound - heights[leftPointer];
        leftPointer++;
      } else {
        rightBound = Math.max(heights[rightPointer], rightBound);
        totalWater += rightBound - heights[rightPointer];
        rightPointer--;
      }
    }
    return totalWater;
  }
  
  const testArray = [4, 2, 1, 3, 0, 1, 2];
  console.log(efficientSolution(testArray));