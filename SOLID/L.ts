// Liskov Substitution Principle ( Princípio da Substituição de Liskov)
//Esse princípio é uma  variação do princípio aberto fechado.
//Uma classe derivada deve ser substituível por sua classe base.
// As classes/tipos base podem ser substituídas por qualquer uma das suas subclasses
// ponderando sobre os cuidados para usar a herança.

class Ave {
    especie: string;

    constructor(especie: string) {
        this.especie = especie;
    }
    voar() : void {
        console.log(`Minha espécie: ${this.especie} e eu posso voar`);
    }
}

class BemTeVi extends Ave {
    constructor() {
        super('Bem-te-vi');
    }
}

class Avestruz extends Ave {
    constructor () {
        super('Avestruz')
    }

    voar(): void {
        console.log(`Minha espécie: ${this.especie} e eu não posso voar`)
    }

    correr(): void {
        console.log(`Minha espécie: ${this.especie} e eu corro`)
    }

}

const bemTeVi= new BemTeVi();
const avestruz = new Avestruz();

bemTeVi.voar();
avestruz.voar();
avestruz.correr();