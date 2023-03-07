// Create a JavaScript class called Animals which accepts 2 input parameters 
// (name and specie) as arguments and stores them internally. Now create a proto function 
// called sing that prints the name of the animal with 'can sing' returned at the end.


class Animals {
    constructor(name, specie){
    this.name = name;
    this.specie = specie;
};
sing(){
   console.log(`${this.name} can sing`);
}
};

const cat = new Animals('Billi', 'Cat');
cat.sing();