// const person = {
//     name: 'John',
//     age: 30,
//     address: {
//       city: 'New York',
//       state: 'NY'
//     }
//   };
  
//   const newPerson = Object.assign({}, person,{
//     age:31,
//     address: Object.assign({},person.address, {city: 'Boston'})
//   })
  
//   console.log(person)
//   console.log(newPerson)



//  let visal=class{
// constructor(height,breath){
//   this.height=height;
//   this.breath=breath;
// }

//  }
// let vishal=new visal(56,92);
// console.log(vishal);



// let vishal={
//   age:23,
//   surname: 'pande',

//   getname:function(){
//     console.log(this.age+'' +this.surname);
//   }
// }
// let vishalname=function(){

//   console.log(this.getname()+"this is an vishal");
// }


// let vishal1=vishalname.bind(vishal);
// vishal1();





for (var i = 0; i < 3; i++) {
  setTimeout(function() {
        alert(i);
  }, 1000 + i);
}