funcao = (x) =>{
    for (let i = x; i >= 0; i--){
        if (i % 2 == 0){
            console.log(`Número ${i} é par`);
        }  
    }
}

funcao(prompt("Digite um número"))