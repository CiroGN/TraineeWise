let pessoa = {
    "nome": "Ciro",
    "idade": 20,
    "profissao": "Estudante",
    "hobbies": ["Video game", "Estudar", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);
console.log(pessoaJSON.hobbies[0]);
