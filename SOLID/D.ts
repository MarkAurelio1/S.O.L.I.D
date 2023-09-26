// Dependecy Inversion Principle ( Princípio da Inversão de Dependências)

// Princípio da Inversão de dependência -
// Dependa de abstrações e não de implementações 

//class recuperarSenha {
  //  private connection;
   // constructor () {
   //     this.connection = {};
   // }
//}

interface IConnection {
    query: (query: string) => any;
    conectar: () => void;
}



class RecuperarSenha {
    private connection: IConnection;

    constructor(connection: IConnection) {
        this.connection = connection;
    }

    execute() {
    return this.connection.query('SELECT senha FROM users where id = 1')
}
}

class MysqlConnection implements IConnection {
    conectar() {}
    query(query: string): any {
        return {
            data: ' Mysql Data',
        }
    }
}

class PgConnection implements IConnection {
    conectar() {}
    query(query: string): any {
        return {
            data: ' PgData',
        }
    }
}

const mysqlConnection = new MysqlConnection();
const pgConnection = new PgConnection();
const recuperarSenha = new RecuperarSenha(pgConnection)

console.log(recuperarSenha.execute())