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