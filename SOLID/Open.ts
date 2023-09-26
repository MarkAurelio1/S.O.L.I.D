// Open/Closed Principle
// Princípio Aberto-Fechado
// Diz que "as entidades de software ( classes, módulos, funções etc."
// devem ser abertas para ampliação, mas fechadas para modificação.
// De forma mais detalhada, diz que podemos estender o compartamento de uma classe,
// quando for necessário, por meio de herença, interface e composição, mas não podemos permitir a
// abertura dessa classe para modificações.

import { IAutor, Livro } from "./S";

class LivroArteDaGuerra extends Livro {
    constructor () {
        super();
    }

    obterAutor(): IAutor {
        return {
            nome: 'Autor Arte da Guerra',
            idade: '23'
        }
    }
}

class LivroNextLevel extends Livro {
    constructor() {
        super();
    }

     obterAutor(): IAutor {
        return {
            nome: 'Autor Next Level',
            idade: '23',
            altura: '1.75'
        }
    }
}

const livroArteDaGuerra = new LivroArteDaGuerra();
const livroNextLevel = new LivroNextLevel();

console.log(livroArteDaGuerra.obterAutor())
console.log(livroNextLevel.obterAutor())