// Solution to this problem: https://projecteuler.net/problem=1
confirm("This script will find all of the multiples of two numbers chosen by the user that exist below another number chosen by the user.")
var num1 = prompt("Enter the first number that you want to find the multiples of.");
var num2 = prompt("Enter the second number that you want to find the multiples of.");
var limit = prompt("You want to find all of the multiples BELOW what number? Note: The script will stop checking for multiples BEFORE this number.");
var multiples = [];
var multSum = 0;

for(i=1; i<limit; i++) {
  if(i % num1 === 0 || i % num2 === 0) {
    multiples.push(i);
    multSum += i;
  }
}
console.log("These are the multiples of "+ num1 +" and "+ num2 +" below "+ limit +":"+ multiples);
console.log("The sum of these numbers is "+ multSum);