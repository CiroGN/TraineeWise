const validarDataNasc = /[01-31]{2}[/][01-12]{2}[/][1920-2025]{4}/;

console.log(validarDataNasc.test('04/02/2005'));
console.log(validarDataNasc.test('4/2/2005'));
console.log(validarDataNasc.test('4-2-05'));
console.log(validarDataNasc.test('05/02/00'));
console.log(validarDataNasc.test('03/02/2010'));
