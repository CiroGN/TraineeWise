class Carro{
    constructor(marca, cor, gasolinaRestante){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
    }
    dirigir(distancia){
        if(this.gasolinaRestante - distancia <= 0){
            console.log("Acabou a gasolina, reabastecer");
            this.gasolinaRestante = 0;
        } else {
            this.gasolinaRestante -= distancia;
            console.log("Distancia percorrida, gasolina restante", this.gasolinaRestante);
        }
    }
    abastecer(quantidade){
        if(this.gasolinaRestante + quantidade > 100){
            this.gasolinaRestante = 100;
            console.log("Porcentagem do tanque: ", this.gasolinaRestante);
        }
        else {
            this.gasolinaRestante += quantidade;
            console.log("Porcentagem do tanque: ", this.gasolinaRestante);
        }
    }
}

let carro = new Carro("bom", "rosa", 100);
console.log(carro);
carro.dirigir(120);
carro.abastecer(300);


