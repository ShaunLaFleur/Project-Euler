// Solution to this problem: https://projecteuler.net/problem=23
var dataTable = [1];
var abundant = [];
var divSum = 0;
var isMatch = false;
var sum = 0;
var abSum = [];


for(i=1; i<=28123; i++) {
	// Push i to all its multiples. We use dataTable[j-1] because array positions start at 0, so each number will be in a position that is one less than its value. 1 will be on array position 0.
	for(j=i*2; j<=28123; j+=i) {
		// First pass through creates a new row for every number from 2 to 28123.
		if(i === 1) {
			dataTable.push([j]);
		}
		dataTable[j-1].push(i);
	}
	// Sum up all proper divisors of i starting at column 1 row i-1.
	for(c=1; c<dataTable[i-1].length; c++) {
		divSum += dataTable[i-1][c];
	}	
	// If i's proper divisors' sum(divSum) is higher than i, add i to the abundant array.
	if(divSum > i) {
		abundant.push(i);
	}
	divSum = 0;
}


// Set every number below 28123 that is a sum of two abundant numbers to the abSum array position equal its value as "true". This doesn't have to
// be set to "true", it can be anything since in the next section we will only check if the position is defined. If its respective 
// position(ie: for 24 its position 24 in abSum) is defined, it is the sum of two abudant numbers, otherwise it is undefined.
for(i=0; i<abundant.length; i++) {
  for(j=i; j<=abundant.length; j++) {
  	// If i + j are over the limit, we know that every further value of j, when added to i, will be higher than 28123, so we break out of the inner
  	// loop.
    if(abundant[i]+abundant[j] <= 28123) {
      abSum[abundant[i]+abundant[j]] = true;
    } else {
      break;
    }
  }
}

// Check if each number from 1 to 28123 is found in the abSum array. if(!abSum[i]) is essentially asking if position [i] of the abSum
// array returns as undefined/false, if it does then it will add the current value to the total sum.
for(i=0; i<=28123; i++) {
	if(!abSum[i]) {
		sum += i;
	}
}
console.log("The total sum of all positive integers below 28123 that are not the sum of two abundant numbers is: "+sum);
console.log("\nHere is a data table for all numbers up to 28123 and their proper divisors.");
console.log(dataTable);