// we can write a helper function

// const help=(a)=>{

// return a+20;

// }
// const help2=(b)=>{
// return help(b) +40;

// }

// console.log(help(3))




function multiplyByNineFifths(number) {
    return number * (9/5);
  };
   
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
   
  console.log(getFahrenheit(15)); // Returns 59
  