/*
A. Find all abundant numbers and push them into an array called abundant.
	**** Use this: https://en.wikipedia.org/wiki/Abundant_number or other sources to find an algorithm or "trick" to calculate if a number is an abundant number so we don't need to brute force.
	**** The way we are doing it now requires two calculations. First we calculate all proper divisors of n, then we calculate if those divisors sum up to more than n. There is likely a better method 
	**** using an algorithm.
	1. Start a for loop starting at i=12(smallest abundant number) and stopping before 28123. Put another for loop inside starting at j=0 and looping while j<i. 
	2. First loop is the number we are checking for divisors. Second loop checks if j can be divided into i without left overs. If it can, add it to a variable. If at the end the variable is higher than 
	i, i is an abundant number.
B. Create three nested for loops. First loop will use i(positive number to be checked), second will use j(number from abundant list) and third will use t(second number from abundant list)

*/

var abundant = [];
var totalSum = 0;
var divSum = 0;
var isMatch = false;
var sum = 0;

// Find abundant numbers below.
// This part works.
for(i=12; i<=28123; i++) {
	for(j=0; j<i; j++) {
		if(i % j === 0) {
			divSum += j;
		}
	}
	if(divSum > i) {
		abundant.push(i);
	}
	divSum = 0;
}


// After finding all abundant numbers, this will check if i is a result of adding two of these abundant numbers
// together. If it is not, it will be added to the sum. For some reason this method crashes if the limit for i is
// too high but works otherwise(not sure if calculations are accurate yet).
for(i=0; i<=28123; i++){
	for(j=0; abundant[j]<i; j++) {
		for(t=0; abundant[t]<i; t++) {
			if(!isMatch && abundant[j]+abundant[t] === i) {
				isMatch = true;
			}
		}
	}
	if(!isMatch) {
		sum += i;
	}
	isMatch = false;
}
console.log(sum);