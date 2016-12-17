var polyTest;
var polyRev = [];
var biggestPoly = 0;
var n = 0;


for(i=100; i<=999; i++) {
  for(j=i; j<=999; j++) {
    n = i*j;
    polyTest = n.toString();
    // Push polyTest to an array in reverse.
    for(a=polyTest.length-1; a>=0; a--) {
      polyRev.push(polyTest[a]);
    }
    // Compare polyTest to polyRev and if it passes all, set n to biggestPoly if n > biggestPoly.
    for(b=0; b<polyTest.length; b++) {
      if(polyTest[b] !== polyRev[b]) {
        polyRev = [];
        break;
      }
      if(b === polyTest.length-1 && n > biggestPoly) {
      biggestPoly = n;
      }
    }
  }
}
console.log(biggestPoly);