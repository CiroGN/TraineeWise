const cachorro = {
    raca: 'SRD',
    uivar: function(){
        console.log("Auuuuuu");
        
    },
    rosnar: function(){
        console.log("grrrrrrr");
        
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é " + this.raca;
    }
}

console.log(cachorro.raca);

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raca);

console.log(cachorro.getRaca());