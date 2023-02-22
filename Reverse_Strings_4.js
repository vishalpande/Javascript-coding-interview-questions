// Reverse Strings
// Easy
// Given an input string and the task is to reverse the input string.

// Example 1:
// Input:
// Hello

// Output:
// olleH

// Explination:-

// First way

// const reverseString=str => str.split("").reverse().join("");
    
// let a='Hello'
// console .log(reverseString(a));




// Second way
function reverseString(str){
  let newString="";

for(let i=str.length-1;i>=0;i--){
newString+=str[i];
}
console.log(newString);
}
reverseString("Hello")
