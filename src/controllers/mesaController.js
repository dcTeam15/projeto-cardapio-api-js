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
        return await Usuario.findAll();
    } catch (error) {
        throw {
            message: 'deu ruim',
        }
    }
}

module.exports = {
    listAll,
    listOne
}
