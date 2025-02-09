function randomico(max){
    numrand = Math.random() * max + 1;
    if (numrand > max){
        console.log("Número aletorio maior que o escolhido", numrand);
        return randomico(max);
    } else {
        console.log("Numero: ", numrand);
    }
}

randomico(100);