// Solution to this problem: https://projecteuler.net/problem=3
var highestPrime = 0;

// Start looking for a proper divisor of 600851475143.
for(i=2; i<600851475143; i++) {
  if(highestPrime !== 0) {
    break;
  }
  // When starting from 2, the first divisor we find that goes into our number evenly will give us the highest proper divisor(ignoring itself) with n = ournum/i, 
  // the next to go into it evenly gives us the second highest proper divisors etc..
  if(600851475143 % i === 0) {
    var n = 600851475143/i;
    // Once the divisor is found, start checking if it's a prime number. 
    for(j=2; j<n; j++) {
      if(n % j === 0) {
        break;
      }
      if(j == n-1) {
        highestPrime = n;
      }
    }
  }
}
console.log(highestPrime);