let nome = "Ciro";
let idade = 20;

if (nome != undefined && nome == "outro"){
    console.log("Nome está definido")
} else if (nome == "Ciro" && nome.length == 4 && idade == 10) {
    console.log("O nome é Ciro")
} else {
    console.log("Não é o Ciro")
}

if (1>2){
    console.log("teste");
} else if(1 == 1){
    console.log("testando");
}