class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando uma instância do herói com nome "Lótus" e 10 anos
const meuHeroi = new Heroi('Lótus', 10, 'mago');

// Chamando o método atacar
meuHeroi.atacar();