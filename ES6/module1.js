export class Employee{
  constructor(id, name, dob){
    this.id = id;
    this.name=name;
    this.dob= dob;
  }

  getAge(){
    return (new Date()).getYear() - this.dob.getYear();
  }
}

function getEmployee(id, name, dob){
  return new Employee(id, name, dob);
}

export var x = new Employee(1, "Ravi", new Date(1987, 1, 22));


export default {
    getEmployee
  };


//export {x as employee};

//var className = "Employee";
//export default className;
