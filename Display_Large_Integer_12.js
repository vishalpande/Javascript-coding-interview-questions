// Write a JavaScript program that accept three integers and return the maximum among them.

function MaxNumber(a,b,c) {
    if(a >= b && a >= c)
      return a;
    if(b >= a && b >= c)
      return b;
    if(c >= a && c >= b)
      return c;
  }
  
  function main() {
      var a =2;
      var b = 8;
      var c = 6;
      console.log(MaxNumber(a,b,c));
  }