let array = {
    arrays: [1,2,3,4,5,6,7,8],
    arrays2: [1,2,3],
}

function verArray(arr){
    if(arr.length >= 5) {
        console.log("Muitos elementos");
    }
    else{
        console.log("Poucos elementos");
    }
}

verArray(array.arrays);
verArray(array.arrays2);