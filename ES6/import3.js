import {getEmployee, employee} from './module3.js';
console.log("In selective import (getEmployee, employee)...");

var e = getEmployee(11, "Rama", new Date(1982, 1, 11));

console.log(e);

console.log(employee);