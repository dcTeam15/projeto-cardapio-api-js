<<<<<<< HEAD
const Mesa = require('../models/mesaModel');

async function listAll(){
    try {
        return await Mesa.findAll();
=======
const Usuario = require('../models/usuarioModel');

async function listAll(){
    try {
        return await Usuario.findAll();
>>>>>>> 680a69a38cb881fa4049033682749db9057029e1
    } catch (error) {
        throw {
            message: 'deu ruim',
        }
    }
}

<<<<<<< HEAD
async function listOne(id){
    try {
        return await Mesa.findByPk(id);
=======


async function listOne(id){
    try {
        return await Usuario.findAll();
>>>>>>> 680a69a38cb881fa4049033682749db9057029e1
    } catch (error) {
        throw {
            message: 'deu ruim',
        }
    }
}

<<<<<<< HEAD
module.exports = {
    listAll,
    listOne
}
=======
module.exports
>>>>>>> 680a69a38cb881fa4049033682749db9057029e1
