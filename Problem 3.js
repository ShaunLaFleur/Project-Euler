/*
Solution to Euler problem 3: https://projecteuler.net/problem=3

The solution works as followed:
We are looking for the highest prime divisor of 600851475143.

1. We first want to find all divisors and check to see if they are a prime number as we find them. As a shortcut, I start dividing from 2 and stop dividing at the square root of 600851475143. As I divide each number I check both the number we used to divide AND the result of the division. So for example if we divide 100/2, I would check 2 and the result (50). By the time we get to the square root of 600851475143, we have checked ALL proper divisors.

2. Given the above, we can assume a couple of things:
  1: If the largest prime divisor of 600851475143 is LARGER than it's square root, it will be the FIRST result(set to "n") we find to properly divide into 600851475143 and be a prime number. Thus IF we find a result(n) that is a prime divisor, we can stop the looping and set it to our highestPrime variable.

  2: If the largest prime divisor of 600851475143 is LESS than it's square root, it will be the LAST divisor(i in the first for loop) we have used and found to divide evenly while being a prime number. Thus, each time we find that i is a prime divisor, we can set highestPrime to it.

3. This is an approach that attacks both ends at once. i will start from 2 and work it's way up to the square root, and using the result(n) will attack the opposite end of the spectrum and work it's way down to the square root. Thus the first n found to fit is the largest OR the last i found to fit is the largest.

*/

var num = 600851475143;
var n;
var highestPrime = 0;
var isFound = false;

for(i=2; i<Math.sqrt(num); i++) {
  // If  previous n was found to be a prime divisor of num, it is the number we want, considering the first n to properly divide and be a prime number will also be the largest prime divisor, so we break out of the loop.
  if(isFound) {
    break;
  }
  // Find divisor
  if(num % i === 0) {
    // Set the result to a variable so we can check both
    n = num/i;
    // Check if n is a prime
    for(j=2; j<n; j++) {
      if(n % j === 0) {
        break;
      } else if(j === n-1) {
        isFound = true;
        highestPrime = n;
      }
    }
    // If n is not a prime divisor, we check i. i will always be higher than any previous i checked so there's no need to check if it is higher than highestPrime.
    if(!isFound) {
      for(j=2; j<i; j++) {
        if(i % j === 0) {
          break;
        } else if(j === i-1) {
          highestPrime = i;
        }
      }
    }
  }
}
console.log(highestPrime);