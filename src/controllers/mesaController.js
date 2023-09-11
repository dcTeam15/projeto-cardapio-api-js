const Mesa = require('../models/mesaModel');

async function listAll(){
    try {
        return await Mesa.findAll();
    } catch (error) {
        throw {
            message: 'deu ruim',
        }
    }
}

async function listOne(id){
    try {
        return await Mesa.findByPk(id);
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