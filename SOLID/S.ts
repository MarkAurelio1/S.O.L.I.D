// Single Responsibility Principle ( Princípio da Responsabilidade Única)

// Uma classe deve ter um e apenas um motivo para mudar,
// o que  significa que uma classe deve ter apenas um trabalho.


//class Livro {
//    obterTitulo(): string {
//        return 'Titulo Livro';
//    }

//    imprimirPaginaAtual() {
//        return 'conteudo da página 1';
//    }

//    irParaPaginaAnterior () {}
//    irParaProximaPagania () {}
//} 
export interface IAutor{
    nome: string;
    idade: string;
    [key: string]: any
}
export class Livro {
    obterTitulo (): string {
        return 'Titulo Livro';
    }

    obterAutor(): IAutor {
        return {
            nome: 'Autor',
            idade: '20',
        }
    }
}


class Pagina {
     irParaPaginaAnterior () {}
     irParaProximaPagania () {};
    }

class Impressora {
    imprimir(formato: string) {
        return 'conteúdo da página'
    }
}

