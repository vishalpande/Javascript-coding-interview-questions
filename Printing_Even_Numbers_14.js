// Given an integer n . Using for loop return all even numbers up to and including n and don’t include 0.

process.stdin.resume();
process.stdin.setEncoding('ascii');
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on('data', function (data) {
    input_stdin += data;
});
process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}

// This is the Solution
function PrintEvenNumber(n){
  let ans=[];
  for(let i=1;i<n;i++){
      if (i % 2 == 0) {
       ans.push(i);
    }
  }
  return ans;
}

function main() {
    var a = parseInt(readLine());
   
    console.log(PrintEvenNumber(a));
}