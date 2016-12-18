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
  i++
}
console.log(ourResult);