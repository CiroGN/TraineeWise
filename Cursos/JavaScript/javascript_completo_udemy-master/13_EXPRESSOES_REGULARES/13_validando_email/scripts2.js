const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("ciro@gmail.com"));
console.log(validarEmail.test("ciro@gmail"));
console.log(validarEmail.test("gmail.com"));
console.log(validarEmail.test("ciro@gmail.com.br"));
console.log(validarEmail.test("gmail@gmail.gamil.gamil"));
