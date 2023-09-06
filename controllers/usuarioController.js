const Usuario = require('./../models/usuarioModel');

async function listAll(){
    return await Usuario.findAll();
}

module.exports = {
    listAll
}