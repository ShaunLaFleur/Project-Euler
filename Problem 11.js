/* 
Put all of the values into an array. For a 20x20 grid we can infer that positions [0] to [19] are on row one, positions [20] to [39] are on row 2 and so on and so forth.
We can then use basic math to find a value at a certain position on the grid. For instance, we know that since the value on array position [0] is the first value on row one, if we wanted to compare it to the
value that is diagonal to it(down-right) we compare it to it's own position plus the amount of steps ahead to get to the second value on row 2. The position would be 21(or 21 away from it's current position).
So to add the value on grid position 1 row 1 to position 2 row 2, we could do(not proper syntax):
i = 0;
array[i] + array[i+21];
NOTE THIS IS ONLY USING A 1 DIMENSIONAL ARRAY
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

var highestPos;
var isRightOff = false;
var isdRightOff = false;
var highestProduct = 0;
var highestNumbers = [];
	
// Push the positions that are off limits to an array instead of having to write all 60 values by hand.
// Right and Left + down right diag
var rightOffLimits = [];
var drightOffLimits = [];
for(g=336; g<=399; g++) {
	drightOffLimits.push[g];
}
for(r=17; r<=397; r+=20) {
	rightOffLimits.push(r, r+1, r+2);
	drightOffLimits.push(r, r+1, r+2);
}

for(i=0; i<=a.length; i++) { 
	for(j=0; j<=rightOffLimits; j++) {
		if(i === rightOffLimits[j]) {
			isRightOff = true;
		}
		if(i === drightOffLimits[j]) {
			isdRightOff = true;
		}
	}
	// Right and Left
	if(a[i]*a[i+1]*a[i+1]*a[i+3] > highestProduct && isRightOff === false) {
		highestProduct = a[i]*a[i+1]*a[i+2]*a[i+3];
		highestNumbers = [a[i],a[i+1],a[i+2],a[i+3]];
		highestPos = "right and left";
	}
	// Diagonal (down right)
	if(a[i]*a[i+21]*a[i+22]*a[i+23] > highestProduct && isdRightOff === false) {
		highestProduct = a[i]*a[i+21]*a[i+22]*a[i+23];
		highestNumbers = [a[i],a[i+21],a[i+22],a[i+23]];
		highestPos = "diagonally(down right)";
	}
	isRightOff = false;
	isdRightOff = false;

}

console.log("The highest product of four adjecent numbers are positioned "+highestPos+" and their total product is "+ highestProduct +", and the four numbers are "+ highestNumbers);