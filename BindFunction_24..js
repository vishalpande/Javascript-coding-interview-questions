// let car=class{
//     constructor(color,name,price){
// this.color=color;
// this.name=name;
// this.price=price;

//     }



// }

// let car1=new car("green","audi",2900000);

// console.log(car1);


let person = {
	first_name: 'John',
	last_name: 'Doe',

	//method
	getPersonDetails: function() {
		return `The name of the person is
				${this.first_name} ${this.last_name}`
	},
}

console.log(person.first_name);
console.log(person.getPersonDetails());