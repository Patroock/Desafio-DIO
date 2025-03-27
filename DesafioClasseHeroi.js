class heroi {
    constructor (nome, idade, tipo){
        // tipo refere-se a classe do heroi(mago,guerreiro,monge,ninja)
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    
    mensagem(){
        let ataque = ""

        if(this.tipo === "mago"){
            ataque = "magia"
        }else if(this.tipo === "guerreiro"){
            ataque = "espada"
        }else if(this.tipo === "monge"){
            ataque = "artes marciais"
        }else if(this.tipo === "ninja"){
            ataque = "shuriken"
        }else{
            ataque = "ataque basico"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }

}

let classeHeroi = new heroi("Link",13,"guerreiro")

classeHeroi.mensagem();