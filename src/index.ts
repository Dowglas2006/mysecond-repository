// let cachorro = {
//     nome: "Nick",
//     raça: "Maltês",
//     idade: 5,
//     chamar () {
//         console.log(this.nome)
//     }
// }

// cachorro.chamar()

class usuario { 
    senha: number 
    nome: string
    saldo: number
    constructor( senhaFornecido: number, nomeFornecido: string, saldoFornecido: number) {
        this.senha = senhaFornecido
        this.nome = nomeFornecido
        this.saldo = saldoFornecido
    }    
}

const usuario1 = new usuario (1322, "Dowglas", 0 )

console.log(usuario1)
