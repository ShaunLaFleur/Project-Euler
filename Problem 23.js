// Solution to this problem: https://projecteuler.net/problem=23
var dataTable = [[0], [1]];
var abundant = [];
var divSum = 0;
var isMatch = false;
var sum = 0;
var abSum = {};


for(i=1; i<=28123; i++) {
	// Push i to all its multiples.
	for(j=i*2; j<=28123; j+=i) {
		// First pass through creates a new row for every number from 2 to 28123.
		if(i === 1) {
			dataTable.push([j]);
		}
		// Then we push i to it's multiples.
		dataTable[j].push(i);
	}
	// Sum up all proper divisors of i starting at column 1 row i. Since we have reached i already, we know all of it's proper divisors have already been pushed to it. ie: If i = 6, we have already passed over 1, 2 and 3 and thus they should be includeded in it's row of the data-table.
	for(c=1; c<dataTable[i].length; c++) {
		divSum += dataTable[i][c];
	}	
	// If i's proper divisors' sum(divSum) is higher than i, add i to the abundant array.
	if(divSum > i) {
		abundant.push(i);
	}
	divSum = 0;
}


// 
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
//console.log(dataTable);