// Given two number , write a Javascript program that resolves a promise if a number is more than 42 else rejects it.

function test(arr){
    arr.forEach(function(element){
		element.then(function(value){
			if(value > 42){ 
			    console.log(value + " is resolved")
			}else {
			   console.log(value+" is rejected");
			}
		})
	})
}
function main() {
    let num1=parseInt(readLine());
    let num2=parseInt(readLine());
	const n1 = Promise.resolve(num1);
	const n2 = Promise.resolve(num2);
	test([n1, n2])

}
