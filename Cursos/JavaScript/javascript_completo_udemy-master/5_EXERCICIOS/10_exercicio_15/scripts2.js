for (let i = 1; i <= 10; i++){
    let divisoes = 0;
    for(let j = 1; j <= i; j++){
        if (i % j == 0){
            divisoes++;
        }
    }
    if (divisoes == 2){
        console.log(`O número ${i} é primo`);
    } else {
        console.log(`O número ${i} não é primo`);   
    }
}