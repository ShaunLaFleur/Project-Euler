// Solution to this problem(Using the sieve of Eratosthenes approach for optimization) https://projecteuler.net/problem=7
var n = 105000; // Number assumed to be higher than the number we're searching for.
var primeList = [false, false]; // 0 and 1 are false because we know they aren't primes.
var limit = Math.sqrt(n);
var counter = 0;

// Populate the primeList positions 2 to n to true.
for(i=2; i<=n; i++) {
	primeList[i] = true;
}

// Start changing all multiples of 2, 3, 5, ... up to square root of n to false for their respective positions(so number 4 would have position 4 set to false).
for(i=2; i<=limit; i++) {
	// Check that i currently isn't false(striked out) before we set it's multiples to false.
	if(primeList[i]) {
		for(j=i*i; j<n; j+=i) {
			primeList[j] = false;
		}
	}
}

// Count how many positions are true in the array, and stop at the 10001st true position. The position number should mirror the value of the prime number we're looking for.
for(i=2; i<n; i++) {
	if(primeList[i]) {
		counter++
		if(counter === 10001) {
		  ourNum = i;
		}
	}
}
console.log(ourNum);