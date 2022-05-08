/*
The Sieve of Eratosthenes is one of the oldest-known algorithms, used for deriving prime numbers!
The sieve works by first assuming that all numbers from {2,…,n}
are prime, and then successively marking them as NOT prime.

The algorithm works as follows:

Create a list of all integers from 2 to n.
Start with the smallest number in the list (2, the smallest prime number).
Mark all multiples of that number up to n as not prime.
Move to the next non-marked number and repeat this process until the entire list has been covered.
When the steps are complete, all remaining non-marked numbers are prime.

Optimizations:
 - change end boundary of outer loop from n to the square root of n, because inner loop already covers multiples of current no
 - change starting boundary of inner loop from i to i squared because outer loop already covers individual numbers
 - pre-mark all even numbers as false (non-prime)
Time complexity: O(nlog(logn))
*/

const sieveOfEratosthenes = (limit) => {
    // Handle edge cases
    if (limit <= 1) {
      return [];
    }
    // create an array to represent all numbers up to the input limit
    // array index represents the number
    // values (true/false) represent whether the index number is prime or not
    const output = new Array(limit + 1).fill(true);
    // Mark 0 and 1 as non-prime
    output[0] = false;
    output[1] = false;
   
    // Iterate up to the square root of the limit
    for (let i = 2; i < Math.pow(limit, 0.5); i++) {
      if (output[i] === true) {
        // Mark all multiples of i as non-prime
        for (let j = Math.pow(i, 2); j <= limit; j = j + i) {
          output[j] = false;
        }
      }
    }
   
    // Remove non-prime numbers
    return output.reduce((primes, current, index) => {
      if (current) {
        primes.push(index);
      }
      return primes
    }, []);
  }