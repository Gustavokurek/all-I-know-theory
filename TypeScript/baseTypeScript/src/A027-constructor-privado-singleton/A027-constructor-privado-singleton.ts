// singleton criar apenas uma instância da base de dados usando constructor private
// factory method criar objetos a partir de métodos statics

export class Database {
  static database: Database;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}
  connect(): void {
    console.log(`conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDataBase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('retornando base de dados já instanciada');
      return Database.database;
    }
    console.log('criando instancia da dataBase');
    return (Database.database = new Database(host, user, password));
  }
}

const db1 = Database.getDataBase('localHost', 'Gusta', '465646');
db1.connect();
const db2 = Database.getDataBase('localHost', 'Gusta', '465646');
db2.connect();

console.log(db1 === db2);
