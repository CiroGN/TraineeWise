coisa = (dado) => {
    if (typeof dado === "number"){
        console.log("O tipo do dado é number");
    }
    else if (typeof dado === "boolean") {
        console.log("O tipo do dado é booleano");
    }
    else if (typeof dado === "string") {
        console.log("O tipo do dado é string");
    }
    else{
        console.log("tipo undefined");
    }
}

coisa(1);
coisa(true);
coisa(false);
coisa("ola");
coisa();