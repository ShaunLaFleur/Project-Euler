// Customized solution to this problem: https://projecteuler.net/problem=2 
confirm("This script will find the Fibonacci sequence starting with two numbers chosen by the user, whose values are less than a given limit also chosen by the user.");
var a = prompt("Please input the first number to start the sequence with.");
var b = prompt("Please input the second number to start the sequence with.");
var fibHolder = [parseInt(a),parseInt(b)];
var limit = prompt("Please choose the limit for the sequence. The sequence will stop BEFORE this number.");
var sumOfEven = 0;
var sumTotal = fibHolder[0]+fibHolder[1];
var i = 2;

while(sumTotal < limit) { 
  fibHolder.push(sumTotal);
  if(sumTotal % 2 === 0) {
    sumOfEven += sumTotal;
  }
  sumTotal = fibHolder[i]+fibHolder[i-1];
  i++;
}
console.log("These are the values in the Fibonacci sequence starting with "+ a +" and "+ b + " whose values are less than "+ limit +": "+ fibHolder);
console.log("The sum of only the even numbers within this sequence is: "+ sumOfEven);



/* 
// Simplified non-customizable version

var fibHolder = [1,2];
var sumOfEven = 0;
var sumTotal = 3;
var i = 2;

while(sumTotal < limit) { 
  fibHolder.push(sumTotal);
  if(sumTotal % 2 === 0) {
    sumOfEven += sumTotal;
  }
  sumTotal = fibHolder[i]+fibHolder[i-1];
  i++;
}

console.log(sumOfEven);
*/