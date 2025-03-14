const reg1 = /[12345]/;

console.log(reg1.test("Temos o numero 6")); // false
console.log(reg1.test("Temos o numero 2")); // true
console.log(reg1.test("Temos o numero 23")); // true
console.log(reg1.test("Temos o numero 26")); // true
console.log(reg1.test("Temos o numero 60")); // true

const reg2 = /[0-9]/; // verifica se contem numeros na string

console.log(reg2.test("Temos o numero 654674542567457")); // true
console.log(reg2.test("Temos o numero")); // false

