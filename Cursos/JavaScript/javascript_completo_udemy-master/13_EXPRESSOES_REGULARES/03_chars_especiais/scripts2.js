const pontoRegex = /./; // aceita tudo menos quebra de linha

console.log(".");
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123efsf"));

const dRegex = /\d/; // [0-9]

console.log("d");
console.log(dRegex.test("asd")); // false
console.log(dRegex.test(" ")); // false
console.log(dRegex.test("123"));
console.log(dRegex.test("123efsf"));

const dRegex2 = /\D/; // [^0-9] não aceita

console.log("D");
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" ")); 
console.log(dRegex2.test("123")); // false
console.log(dRegex2.test("123efsf"));

const sRegex = /\s/; // aceita espacos e tabs

console.log("s");
console.log(sRegex.test("asd"));
console.log(sRegex.test(" ")); // true
console.log(sRegex.test("123"));
console.log(sRegex.test("123efsf"));

const wRegex = /\w/; // aceita se tiver caracteres

console.log("2");
console.log(wRegex.test("asd"));
console.log(wRegex.test(" ")); // false
console.log(wRegex.test("123"));
console.log(wRegex.test("123efsf"));