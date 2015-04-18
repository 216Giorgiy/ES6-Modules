class Employee{
    constructor(id, name, dob){
        this.id = id;
        this.name=name;
        this.dob= dob;
    }

    getAge(){
        return (new Date()).getYear() - this.dob.getYear();
    }
}

export function getEmployee(id, name, dob){
    return new Employee(id, name, dob);
}

export var employee = new Employee(1, "Sristi", new Date(1987, 4, 28));
