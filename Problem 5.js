// Solution to this problem: https://projecteuler.net/problem=5
// Since we want to get the smallest number evenly divisible by 1 through 20, we know that the number we're looking for MUST be divisible by 20, so we don't need to check any numbers NOT divisible by 20 and
// can thus increment i by 20.
var ourResult = 0;
var i = 20;
while(ourResult === 0) {
  for(j=1; j<=20; j++) {
    if(i % j !== 0) {
      break;
    }
    if(j === 20) {
      ourResult = i;
    }
  }
  i+=20;
}
console.log(ourResult);