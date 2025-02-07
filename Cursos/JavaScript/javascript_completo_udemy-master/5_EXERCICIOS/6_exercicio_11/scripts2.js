let i = 0;
let cnh;
function DecidePromtp(){
    cnh = prompt("true - têm; false - não têm")
    if (cnh == "true") {
        cnh = true;
    } else if (cnh == "false"){
        cnh = false;
    } else {
        alert("nenhuma opçõa válida")
        return DecidePromtp();
    }
    return cnh;
}

while (i <= 2){
    DecidePromtp();
    let idade = prompt("Idade");
    if (idade >= 18 && cnh == true){
        console.log("usuário pode dirigir");
        alert("Usuário pode dirigir");
    } else if (idade >= 18 && cnh == false){    
        console.log("usuário não pode dirigir");
        alert("Usuário não pode dirigir");
    } else if (idade < 18 && cnh == true){
        console.log("cnh falsificada ou no nome de outra pessoa, portanto não pode dirigir");
        alert("cnh falsificada ou no nome de outra pessoa, portanto não pode dirigir");
    } else {
        console.log("Idade inválida");
        alert("Idade inválida");
    }
    i++;
}