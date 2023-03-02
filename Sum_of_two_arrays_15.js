// Given an array arr1 of size n and another array arr2 of size m. Return the total sum of the elements present in both array.Each array includes only numbers..

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
// This is the solution


function sumArray(arr1,arr2){
      let  sum=0;
      for(let i=0;i<arr1.length;i++){
        sum+=arr1[i];
      }
      for(let i=0;i<arr2.length;i++){
        sum+=arr2[i];
      }
      return sum;
}

function main() {
    let n=parseInt(readLine());
    let arr1=[];
    for(let i=0;i<n;i++){
        let num=parseInt(readLine());
        arr1.push(num);
    }
    let m=parseInt(readLine());
    let arr2=[];
    for(let i=0;i<m;i++){
        let num=parseInt(readLine());
        arr2.push(num);
    }
    console.log(sumArray(arr1,arr2));
}
