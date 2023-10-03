const db = require('../config/db');
const { ObjectId } = require('mongodb');

class UserDAO{
    constructor(){
        this.collection = db.obtenerColeccion('users');
    }

    async crear(user){
        await db.conectar();
        (await this.collection).insertOne(user);
        await db.desconectar();
    }

    async actualizar(id, usuarioNuevo){
        await db.conectar();
        (await this.collection).updateOne({_id: new ObjectId(id)}, { $set: usuarioNuevo});
        await db.desconectar();
    }

    async eliminar(id){
        await db.conectar();
        (await this.collection).deleteOne({_id: new ObjectId(id)});
        await db.desconectar();
    }

    async obtenerTodos(){
        await db.conectar();
        const usuarios = (await this.collection).find().toArray();
        await db.desconectar();
        return usuarios;
    }

    async obtenerPorId(id){
        await db.conectar();
        const usuario = (await this.collection).findOne({_id: new ObjectId(id)});
        await db.desconectar();
        return usuario;
    }
}

module.exports = new UserDAO();