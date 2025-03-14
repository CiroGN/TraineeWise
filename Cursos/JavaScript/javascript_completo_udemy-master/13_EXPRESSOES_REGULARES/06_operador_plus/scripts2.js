const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1214")); // true
console.log(umOuMaisNumeros.test(" ")); // false
console.log(umOuMaisNumeros.test("wrgethh")); // false
console.log(umOuMaisNumeros.test("1")); // true
console.log(umOuMaisNumeros.test("133456576878564534")); // true
