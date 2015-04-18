import * as all from './module4.js';
console.log("In import all...");
console.log(all.default);
console.log(new all.Employee(3, "Harita", new Date(1982, 1, 2)));
console.log(all.getEmployee(3, "Hari", new Date(1977, 6, 17)));
