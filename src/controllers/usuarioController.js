const Usuario = require('../models/usuarioModel');

async function listAll(){
    try {
        return await Usuario.findAll();
    } catch (error) {
        throw {
            message: 'deu ruim',
        }
    }
}

async function listOne(id){
    try {
        return await Usuario.findByPk(id);
    } catch (error) {
        throw {
            message: 'deu ruim trazendo um',
        }
    }
}

async function createOne(dados){
    try {
        return await Usuario.create(dados);
    } catch (error) {
        throw {
            message: 'deu ruim criando um',
        }
    }
}

module.exports = {
    listAll,
    listOne,
    createOne
}