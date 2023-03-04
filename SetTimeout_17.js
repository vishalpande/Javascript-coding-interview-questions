console.log("I am first");
setTimeout(()=>{
    test("i am third");
},5000);


function test(message){
    console.log(message)
}

console.log("I am second");