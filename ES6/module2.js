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