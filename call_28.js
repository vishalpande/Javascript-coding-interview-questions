// t’s a predefined method in javascript.
// This method invokes a method (function) by specifying the owner object.
// Example 1:




function sayHello(){
    return "Hello " + this.name;
  }
          
  var obj = {name: "Sandy"};
          
  sayHello.call(obj);
          
  // Returns "Hello Sandy"