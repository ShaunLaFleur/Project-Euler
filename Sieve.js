// Javascript Sieve of Eratosthenes; https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
var n = 1000;
var checkList = [];
var results = [];
var limit = Math.sqrt(n);

// Populate the checkList array with numbers 0 up to n-1.
for(i=2; i<n; i++) {
	checkList[i] = true;
}

// Start changing all multiples of 2, 3, 5, ... up to the square root of n to false. The position will mirror the number. So checkList[2] is the position for "2" and if it's "true" then 2 is a prime number.
for(i=2; i<=limit; i++) {
	if(checkList[i]) {
		for(j=i*i; j<n; j+=i) {
			checkList[j] = false;
		}
	}
}

// Push all left over numbers(the prime numbers) to a new array.
for(i=2; i<n; i++) {
	if(checkList[i]) {
		results.push(i);
	}
}
console.log("Here are all prime numbers under "+n+":");
console.log(results);