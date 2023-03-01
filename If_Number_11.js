// Write a JavaScript program that checks if input variable is a number by using isNaN() in-built JavaScript function.

  
function ValidNumber(num) {
    if(isNaN(num)){
      return false;
    }else {
     return true;
    }
  }
  
  function main() {
      var a = 6;
      
      console.log(ValidNumber(a));
  }