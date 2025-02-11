function cheacarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        alert("Por favo passe nó números para o programa");
    }
    else{
        return number;
    }
}

cheacarNumero(5);
cheacarNumero('fseaf');

let number = prompt("Digite um número");

cheacarNumero(number);