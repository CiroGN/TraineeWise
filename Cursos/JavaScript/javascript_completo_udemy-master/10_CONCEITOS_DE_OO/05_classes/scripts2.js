let cachorro = {
    patas: 4,
    raca: 'SDR',
    latir: function(){
        console.log("Au au");
        
    }
}

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "Labrador";

console.log(labrador.raca);
console.log(cachorro.raca);

let pastor = Object.create(cachorro);

pastor.raca = "Pastor";
console.log(pastor.raca);
console.log(cachorro.raca);
