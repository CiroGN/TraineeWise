let i = 0;
while (i <= 5){
    let velocidade = prompt("Insira um valor de velocidade");

    if (velocidade > 80){
        console.log("Acima da velocidade permitida, multa aplicada!");
        alert("Acima da velocidade permitida, multa aplicada!");
    } else {
        console.log("Dentro da velocidade permitida");
        alert("Dentro da velocidade permitida");
    }
    i++
}