// he apply method is similar to the call() method. The only difference is that,
// call() method takes arguments separately whereas, apply() method takes arguments as an array.


function saySomething(message){
    return this.name + " is " + message;
  }        
  var person4 = {name:  "John"};
  saySomething.apply(person4, ["awesome"]);