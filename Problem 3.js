// Solution to this problem: https://projecteuler.net/problem=3
var highestPrime = 0;
var counter = 0;

// Start looking for a proper divisor of 600851475143.
for(i=2; i<600851475143; i++) {
  if(highestPrime !== 0) {
    break;
  }
  if(600851475143 % i === 0) {
    var n = 600851475143/i;
    // Once the divisor is found, start checking if it's a prime number.
    for(j=1; j<=n; j++) {
      if(n % j === 0) {
        counter++;
      }
      // If proper divisors are found other than 1 and itself, it's not a prime number so we break the loop here.
      if(counter === 2 && j<n) {
        n = 0;
        counter = 0;
        break;
        // Otherwise if j === n then the only proper divisors of n are 1 and n, so it is a prime number.
      } else if(j === n) {
        var highestPrime = n;
      }
    }
  }
}
console.log(highestPrime);