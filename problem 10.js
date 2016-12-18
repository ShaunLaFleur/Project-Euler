var limit = Math.sqrt(2000000);
var checkList = [];
var sum = 0;

// Push true to all numbers below 2,000,000.
for(i=0; i<2000000; i++) {
	checkList[i] = true;
}

// Begin crossing out(position = false) each non-prime number using the sieve approach.
for(i=2; i<limit; i++) {
	if(checkList[i]) {
		for(j=i+i; j<2000000; j+=i) {
			checkList[j] = false;
		}
	}
}

// Cycle through checkList and sum up all of the true positions(prime numbers).
for(i=2; i<2000000; i++) {
	if(checkList[i]) {
		sum += i;
	}
}
console.log(sum);