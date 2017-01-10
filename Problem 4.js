var biggestPoly = 0;

for(i=100; i<=999; i++) {
  for(j=i; j<=999; j++) {
    var num = i*j;
    var polyTest = num.toString();
    for(n=0; n<=Math.round(polyTest.length/2); n++) {
      if(polyTest[n] !== polyTest[polyTest.length-1-n]) {
        break;
      } else if(n === Math.round(polyTest.length/2)) {
        polyTest = parseInt(polyTest);
        if(polyTest > biggestPoly){
          biggestPoly = num;
        }
      }
    }
  }
}
console.log(biggestPoly);