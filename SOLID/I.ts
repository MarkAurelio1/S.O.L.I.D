// Interface Segregation Principle (Princípio da segregação de Interfaces)

//Princípio da Segregação da Interface -
//Uma classe não deve ser forçada a implementar interfaces e métodos que não irão utilizar

//interface IAve {
//  voar(): string;
//}

//class BemTeViComInterface implements IAve {
    //voar(): string {
    //    return 'Eu posso voar'
  //  }
//}

//class AvestruzComInterface implements IAve {
    //voar(): string {
    //    return 'eu não posso voar, eu corro'
  //  }
//}

interface IAveQueVoa {
    voar(): string;
}

interface IAveQueNaoVoar {
    correr(): string;
}

class BemTeViComInterface implements IAveQueVoa {
    voar(): string {
        return 'Eu posso voar'
    }
}

class AvestruzComInterface implements IAveQueNaoVoar {
    correr(): string {
        return 'Eu posso corro'
    }
}

const bemTeViComInterface= new BemTeViComInterface();
const avestruzComInterface = new AvestruzComInterface();

console.log(bemTeViComInterface.voar())
console.log(avestruzComInterface.correr())
