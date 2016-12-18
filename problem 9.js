var found = false;
var num1, num2, num3;


for(i=1; i<500; i++) {
	for(j=i; j<500; j++) {
		for(n=j; n<500; n++) {
			if(i*i + j*j === n*n && i+j+n === 1000) {
				var num1 = i;
				var num2 = j;
				var num3 = n;
				found = true;
				break;
			}
		}
		if(found) {
			break;
		}
	}
	if(found) {
		break;
	}
}
console.log(num1);
console.log(num2);
console.log(num3);