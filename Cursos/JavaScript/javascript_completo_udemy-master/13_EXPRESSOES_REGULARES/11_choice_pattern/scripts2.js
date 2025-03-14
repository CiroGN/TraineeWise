const reg = /\w+: (Ciro|Joao|Maria)/; // Nome: nadsuasudi

console.log(reg.test("Nome: Ciro"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Maria"));
