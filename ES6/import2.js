import {Employee} from './module2.js';
console.log("In selective import (Employee)...");

var e = new Employee(11, "Rama", new Date(1982, 1, 11));

console.log(e);
