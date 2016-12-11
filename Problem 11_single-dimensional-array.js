/* Solution for Euler Problem 11: https://projecteuler.net/problem=11
****NOTE THIS IS ONLY USING A 1 DIMENSIONAL ARRAY*****
****I will do a two dimensional array next, which should be much easier.****
*/

var a =	[8,2,22,97,38,15,0,40,0,75,4,5,7,78,52,12,50,77,91,8,
	49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,4,56,62,0,
	81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,3,49,13,36,65,
	52,70,95,23,4,60,11,42,69,24,68,56,1,32,56,71,37,2,36,91,
	22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80,
	24,47,32,60,99,3,45,2,44,75,33,53,78,36,84,20,35,17,12,50,
	32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70,
	67,26,20,68,2,62,12,20,95,63,94,39,63,8,40,91,66,49,94,21,
	24,55,58,5,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72,
	21,36,23,9,75,0,76,44,20,45,35,14,0,61,33,97,34,31,33,95,
	78,17,53,28,22,75,31,67,15,94,3,80,4,62,16,14,9,53,56,92,
	16,39,5,42,96,35,31,47,55,58,88,24,0,17,54,24,36,29,85,57,
	86,56,0,48,35,71,89,7,5,44,44,37,44,60,21,58,51,54,17,58,
	19,80,81,68,5,94,47,69,28,73,92,13,86,52,17,77,4,89,55,40,
	04,52,8,83,97,35,99,16,7,97,57,32,16,26,26,79,33,27,98,66,
	88,36,68,87,57,62,20,72,3,46,33,67,46,55,12,32,63,93,53,69,
	04,42,16,73,38,25,39,11,24,94,72,18,8,46,29,32,40,62,76,36,
	20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,4,36,16,
	20,73,35,29,78,31,90,1,74,31,49,71,48,86,81,16,23,57,5,54,
	01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,1,89,19,67,48];


var isRightOff = false;
var isdRightOff = false;
var isUpOff = false;
var isdleftOff = false;

var highestProduct = 0;
var highestNumbers = [];
var highestPos;
var startPos = 0;

var rightOffLimits = [];
var drightOffLimits = [];
var updOffLimits = [];
var dleftOffLimits = [];

// Off-limit positions for right to left and down-right diagnonal.
for(i=17; i<=397; i+=20) {
	rightOffLimits.push(i, i+1, i+2);
	drightOffLimits.push(i, i+1, i+2);
}
// Off-limit positions for up and down.
for(i=340; i<=399; i++) {
	updOffLimits.push(i);
}
// Off-limit positions for down-left diagonal.
for(i=0; i<=380; i+=20) {
	dleftOffLimits.push(i, i+1, i+2);
}


// The main loop which goes through each position.
for(i=0; i<=a.length; i++) { 
	// Off-limit check
	for(j=0; j<=rightOffLimits; j++) {
		// Right-Left Check
		if(i === rightOffLimits[j]) {
			isRightOff = true;
		}
		// Down-right diagonal check
		if(i === drightOffLimits[j]) {
			isdRightOff = true;
		}
		// Down-left diagonal check
		if(i === dleftOffLimits[j]) {
			isdleftOff = true;
		}
		// Up-down check
		if(i === updOffLimits[j]) {
			isUpOff = true;
		}
	}
	// Up and Down
	if(a[i]*a[i+20]*a[i+40]*a[i+60] > highestProduct && !isUpOff) {
		highestProduct = a[i]*a[i+20]*a[i+40]*a[i+60];
		highestNumbers = [a[i],a[i+20],a[i+40],a[i+60]];
		highestPos = "up and down";
		startPos = i;
	}
	// Right and Left
	if(a[i]*a[i+1]*a[i+2]*a[i+3] > highestProduct && !isRightOff) {
		highestProduct = a[i]*a[i+1]*a[i+2]*a[i+3];
		highestNumbers = [a[i],a[i+1],a[i+2],a[i+3]];
		highestPos = "right and left";
		startPos = i;
	}
	// Diagonal (down right)
	if(a[i]*a[i+21]*a[i+42]*a[i+63] > highestProduct && !isdRightOff && i < 336) {
		highestProduct = a[i]*a[i+21]*a[i+42]*a[i+63];
		highestNumbers = [a[i],a[i+21],a[i+42],a[i+63]];
		highestPos = "diagonally(down right)";
		startPos = i;
	}
	// Diagonal (down left)
	if(a[i]*a[i+19]*a[i+38]*a[i+57] > highestProduct && !isdleftOff) {
		highestProduct = a[i]*a[i+19]*a[i+38]*a[i+57];
		highestNumbers = [a[i],a[i+19],a[i+38],a[i+57]];
		highestPos = "diagonally(down left)";
		startPos = i;
	}
	isRightOff = false;
	isdRightOff = false;
	isUpOff = false;
	isdleftOff = false;

}
console.log("The highest product of four adjecent numbers is "+highestProduct+". The four numbers are: "+highestNumbers+" and can be found starting at array position "+startPos+" going "+highestPos+".");