contaTamanho = (texto) =>{
    if (texto.length > 10) {
        console.log("Texto muito longo");
    }
    else if(texto.length > 1) {
        console.log("Texto dentro do limite");
    }
    else{
        console.log("Digite um texto");
        return contaTamanho(prompt("Digite um texto"));
    }
}

contaTamanho(prompt("Digitem um texto"));