class hero {
    constructor(nome, idade, tipo){
        this.nome = "Capitão América";
        this.idade = 8;
        this.tipo = "ninja";
    }

    attack() {
        let attack;
        switch (this.tipo) {
            case "mago":
                attack = "usou magia";
                break;
            case "guerreiro":
                attack = "usou espada";
                break;
            case "monge":
                attack = "usou artes marciais";
                break;
            case "ninja":
                attack = "usou shuriken";
                break;
            default:
                attack = "usou um ataque indefinido";    
        }
        console.log('O ${this.tipo} atacou usando ${attack}');    
        
    }

}