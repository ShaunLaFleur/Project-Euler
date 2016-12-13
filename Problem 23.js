// This part works effeciently. Non-brute force method of finding abundant numbers.
var dataTable = [1];
var abundant = [];
var divSum = 0;
var isMatch = false;
var sum;


for(i=1; i<=28123; i++) {
	// Push i to all it's multiples. We use dataTable[i-1] because array positions start at 0, so each number will be in a position that is one less than it's value. 1 will be on array position 0.
	for(j=i*2; j<=28123; j+=i) {
		// First pass through creates a new row for every number from 2 to 28123.
		if(i === 1) {
			dataTable.push([j]);
		}
		dataTable[j-1].push(i);
	}
	// Sum up all proper divisors of i(if it is equal or higher than 12) starting at column 1 row i-1.
	for(c=1; c<dataTable[i-1].length; c++) {
		divSum += dataTable[i-1][c];
	}	
	// If i's proper divisors' sum(divSum) is higher than i, add i to the abundant array.
	if(divSum > i) {
		abundant.push(i);
	}
	divSum = 0;
}
console.log(abundant);







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