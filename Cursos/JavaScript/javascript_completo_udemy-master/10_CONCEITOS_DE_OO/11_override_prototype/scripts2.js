class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("Au au");
        
    }
}
Cachorro.prototype.raca = 'SRD'
Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 4, "Preto");

console.log(labrador.patas);
labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);
