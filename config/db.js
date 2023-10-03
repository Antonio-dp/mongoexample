const {mongo, MongoClient} = require('mongodb');

class Database{
    constructor(){
        this.uri = 'mongodb://127.0.0.1:27017/dbPruebas';
        this.options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        this.cliente = new MongoClient(this.uri, this.options);
    }

    async conectar(){
        try{
            await this.cliente.connect();
            console.log('Conectado a la base de datos');
        }catch(error){
            console.log('error al conectarse a mongodb');
        }
    }

    async desconectar(){
        try{
            await this.cliente.close();
            console.log('Desconectado de la base de datos');
        }catch(error){
            console.log('error al desconectarse a mongodb');
        }
    }

    async obtenerColeccion(nombre){
        return await this.cliente.db().collection(nombre);
    }
}

module.exports = new Database();