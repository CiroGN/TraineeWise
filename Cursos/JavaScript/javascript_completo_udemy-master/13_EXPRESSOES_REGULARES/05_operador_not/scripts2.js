const notab = /[^ab]/;

console.log(notab.test("a")); // false
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("asd")); // false
console.log(nottoaz.test("123"));
console.log(nottoaz.test("123 as"));
console.log(nottoaz.test("asfghtegrthnfgsrfa")); // false

const az = /[a-z]/;

console.log(az.test("rgtehnrmnhgterf"));
