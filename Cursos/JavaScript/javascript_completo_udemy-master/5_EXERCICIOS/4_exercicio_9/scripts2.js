let i = 0;
while (i <= 10) {
    let base = prompt("Valor da base");
    let expoente = prompt("valor do expoente")
    let resultado = Math.pow(base, expoente);
    alert(`O resultado é ${resultado}`);
    console.log(`O resultado é ${resultado}`);
    i++;
}