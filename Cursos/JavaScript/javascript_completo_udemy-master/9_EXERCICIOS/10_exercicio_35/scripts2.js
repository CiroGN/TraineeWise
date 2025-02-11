let calculdadora = {
    somar(x,y){
        return x + y;
    },
    subtrair(x,y){
        return x - y;
    },
    multiplicar(x,y){
        return x * y;
    },
    dividir(x,y){
        return x / y;
    }
}

console.log(calculdadora.somar(345,234));
console.log(calculdadora.subtrair("456",758));
console.log(calculdadora.multiplicar(3,5));
console.log(calculdadora.dividir(9,3));
