// Given a string like an object , convert it into an object having 2 properties fname and lname .Return a string having fname and lname with space seperated using that object.


function fullname(obj){
    return obj.fname+" "+obj.lname;
  }
  function main() {
      let str=readLine();
      let user=JSON.parse(str)
      console.log(fullname(user));
  }