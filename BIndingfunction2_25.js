let student={
firstName: `vishal`,
lastName:`pande`,

getfullname:function(){
console.log(this.firstName+''+this.lastName)
}

}

var studentName=function(name,surname){
    console.log(this.getfullname()+"loves"+name+" "+surname)
}

studentName.call(student,"pikachu","chuchu");
console.log(studentName);
