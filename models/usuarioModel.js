const Sequelize = require('sequelize');
const connection = require('./../db');

const Usuario = connection.define('usuarios', {
    usuario_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuario_nome: Sequelize.STRING(255),
    usuario_senha: Sequelize.STRING(255),
    usuario_cpf: Sequelize.STRING(12),
    deleted: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
});

(() => {
    connection.sync(); 
})

module.exports = Usuario;