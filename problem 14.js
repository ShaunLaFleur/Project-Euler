var counter = 0;
var j = 0;
highestCount = 0;

for(i=2; i<1000000; i++) {
	j = i;
	// Counter is 1, because i itself counts as part of the sequence.
	counter = 1;
	while(j !== 1) {
		counter++;
		if(j % 2 === 0) {
			j = j/2;
		} else {
			j = (3*j)+1;
		}
		if(j === 1 && counter > highestCount) {
			highestCount = counter;
			highestNum = i;
		}
	}
}
console.log("The number with the longest sequence is "+highestNum+".");
console.log("It's sequence is "+highestCount+" numbers long.");