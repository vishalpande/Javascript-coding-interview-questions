// Create a JavaScript constructor function called Animals which accepts 2 input parameters (name and specie) as arguments and stores them internally. Now create a proto function called details that prints the name of the animal and species as shown in the exmple.

function Animals(name, specie) {
    this.name = name;
    this.specie = specie;
}
Animals.prototype.details = function(){
    console.log(`Animal is ${this.name} and species is ${this.specie}`);
}

function main() {
    let animal=readLine();
    let species=readLine();
    const obj = new Animals(animal, species);
    obj.details();
}

