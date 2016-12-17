var sum = 0;
var a = [
          [0],
          [1],
  ];
  
  for(i=1; i<=1000000000000; i++) {
    for(j=i*2; j<=1000000000000; j+=i) {
      if(i === 1) {
        a.push([j]);
      }
      a[j].push(i);
    }
    if(a[i].length === 8) {
      sum++;
    }
  }
  
console.log(sum);