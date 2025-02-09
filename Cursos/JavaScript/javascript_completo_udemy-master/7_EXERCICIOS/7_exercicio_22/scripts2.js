conversao = (numero) =>{
    console.log("Numero anterior a conversão", numero);
    numero = Math.abs(numero);
    console.log("Numeoro após a conversão", numero);
}

conversao(prompt("Digite um numero para deixalo em seu modulo"));