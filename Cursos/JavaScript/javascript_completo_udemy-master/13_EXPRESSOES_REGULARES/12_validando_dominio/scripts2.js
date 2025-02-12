const validaDOminio = /[?www.] \w+\.com.br|.com/;

console.log(validaDOminio.test("www.google.com"));
console.log(validaDOminio.test("www.google.com.br"));
console.log(validaDOminio.test("www.google"));
console.log(validaDOminio.test("google.com.br"));
