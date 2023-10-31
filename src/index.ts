// let cachorro = {
//     nome: "Nick",
//     raça: "Maltês",
//     idade: 5,
//     chamar () {
//         console.log(this.nome)
//     }
// }

// cachorro.chamar()

// class usuario { 
//     senha: number 
//     nome: string
//     saldo: number
//     constructor( senhaFornecido: number, nomeFornecido: string, saldoFornecido: number) {
//         this.senha = senhaFornecido
//         this.nome = nomeFornecido
//         this.saldo = saldoFornecido
//     }    
// }

// const usuario1 = new usuario (1322, "Dowglas", 0 )

// console.log(usuario1)

import { BankAccount } from "./classes/BankAccount";
import {Transaction} from "./classes/Trasaction"

const ba1 = new BankAccount("Dowglas", "0232302dg", "0232302");
const ba2 = new BankAccount("Valdenia", "0222201vl", "0222201")
const tr1 = new Transaction("0232302dg", "02222vl", 159000)

function realizaTransacao (
    idRemetente: string,
    idDestinatario:string, 
    valor:number
     ) {
    return 
}

function deposito (
    ba1
    valor
    ) {
    return ba1Alterada
}


function saque (ba, valor){
    return baAlterada
}

console.log(tr1)
