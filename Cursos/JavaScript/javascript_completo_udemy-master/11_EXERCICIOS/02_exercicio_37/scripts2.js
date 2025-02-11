class Carrinho{
    constructor(item, quantidade, valTotal){
        this.item = item;
        this.quantidade = quantidade;
        this.valTotal = valTotal;
    }

    addItem(item){
        let contador = 0;
        for(let itemCarrinho in this.item){
            if(this.item[itemCarrinho].id == item.id){
                this.item[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }
        
        if(contador == 0){
            this.item.push(item);
        }
        
        this.quantidade += item.qtd;
        this.valTotal += item.preco * item.qtd;
    }
    
    removeItem(item){
        for(let itemCarrinho in this.item){
            if(this.item[itemCarrinho].id == item.id){
                
                let obj = this.item[itemCarrinho];
                let index = this.item.findIndex(function(obj){return obj.id == item.id});

                this.quantidade -= this.item[itemCarrinho].qtd;
                this.valTotal -= this.item[itemCarrinho].preco * this.item[itemCarrinho].qtd;

                this.item.splice(index, 1);
            }
        }
    }
}

let carrinho = new Carrinho([
    {
        id: 01,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }
], 3, 120);

console.log(carrinho);

carrinho.addItem({id: 01, mone: "Camisa", qtd: 2, preco: 20});
console.log(carrinho);

carrinho.addItem({id: 03, mone: "Boné", qtd: 1, preco: 15});
console.log(carrinho);

carrinho.removeItem({id: 01, nome: "Camisa", qtd: 1, preco: 20});
console.log(carrinho);