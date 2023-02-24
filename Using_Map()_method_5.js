function factorial(num){
    return new Array(num).fill(null)
      .map((currentValue, index) => index + 1)
     .reduce((accumulator, currentValue) => accumulator * currentValue);
 }
 
 function main() {
     var a = parseInt(readLine());
    
     console.log(factorial(a));
 }