class Banco {
    constructor(saldo) {
        this.saldo = Number(saldo); // Converte o valor para número
    }

    set saldo(valor) {
        this._saldo = valor; // Armazena em uma propriedade privada (_saldo)
    }

    get saldo() {
        return this._saldo; // Retorna o saldo
    }

    deposito(valor) {
        valor = Number(valor); // Converte para número
        this.saldo += valor;
        console.log("Novo saldo:", this.saldo);
        return this.saldo;
    }

    saque(valor) {
        valor = Number(valor);
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
            return this.saque(Number(prompt("Valor do saque:")));;
        } else {
            this.saldo -= valor;
            console.log("Novo saldo:", this.saldo);
            return this.saldo;
        }
    }
}

// Criando a conta com saldo inicial
let conta = new Banco(Number(prompt("Valor inicial da conta:")));

// Exibindo o saldo inicial
console.log("Saldo inicial:", conta.saldo);

// Realizando depósito
conta.deposito(Number(prompt("Valor do depósito:")));

// Realizando saque
conta.saque(Number(prompt("Valor do saque:")));

// Exibindo saldo final
console.log("Saldo final:", conta.saldo);
