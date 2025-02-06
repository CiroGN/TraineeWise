let idade = 20;

if(idade == 19){
    console.log("A idade é igual a 19");
}

if (idade > 25){
    console.log("A idade é maior que 25");
}

let nome = prompt("Qual o seu nome");

if(nome == "Ciro" && idade > 10){
    console.log("Liberado!");
}

let passaporte = true;

if((nome == "Ciro" && idade > 20) || passaporte == true){
    console.log("liberado!")
}
