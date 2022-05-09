/*
Problem: the built-in .sort() method does the following
[10, 43, 5, 0, 4, 3, 2, 1, 11].sort() returns 
[ 0, 1, 10, 11, 2, 3, 4, 43, 5 ]
['f', 'e', 'd', 'a', 'h', 'b', 'actual', 'aardvark'].sort() returns 
[ 'a', 'aardvark', 'actual', 'b', 'd', 'e', 'f', 'h' ];

Solution: We can pass a custom comparator function to the .sort() method in order to sort an array 
in any way we desire.

The comparator function will compare two elements in the array and return a value that .sort() will 
use to determine the sorting order. The function should take two arguments, usually named a and b.
There are three possible categories of return values:
  1. A value less than zero, which means a will be sorted at a lower index than b
  2. A value greater than zero, which means b will be sorted at a lower index than a
  3. The value zero, which means the two elements were equal and won’t be moved
*/

//sort an array of numbers from lowest to highest
const ascendingOrder = (a, b) => {
    return a - b;
}

//sort an array of numbers from highest to lowest
const descendingOrder = (a, b) => {
    return b - a;
}

//sort array from shortest element (string) to longest
const sortByLength = (a, b) => {
    if(a.length === b.length){
      return ascendingOrder(a, b);
    } else {
      return a.length - b.length;
    }
}

//explicit ordering
//Given an input array, sort the array given to an explicit order 
//If elements aren’t in the given explicit order, put them at the back in the same order they appeared in.
const explicitSortWithComparator = (inputArray, order) => {
  
    const explicitComparator = (a, b) => {
      let indexA = order.length;
      let indexB = order.length;
      if (order.includes(a)) {
        indexA = order.indexOf(a);
      }
      if (order.includes(b)) {
        indexB = order.indexOf(b);
      }
      return indexA - indexB;
    }
    return inputArray.sort(explicitComparator).slice();
}
  
// Use this array to test your code:
const inputArray = ['a', 'b', 'c', 'd', 'e', 'f', 'n', 'y', 'g']
const order = ['a', 'n', 'd', 'y']
console.log(explicitSortWithComparator(inputArray, order));

const testArray1 = [10, 43, 5, 0, -2, -20, 4, 3, 2, 1, 11];
testArray1.sort(ascendingOrder);
console.log(testArray1);

const testArray2 = ['car', 'train', 'plane', 'bike', 'skateboard', 'jet'];
testArray2.sort(sortByLength);
console.log(testArray2);
