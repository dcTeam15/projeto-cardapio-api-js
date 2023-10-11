const Sequelize = require('sequelize');
const connection = require('../database');

const Mesa = require('./mesaModel');

const Usuario = connection.define('usuarios', {
    usuario_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuario_nome: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    usuario_senha: Sequelize.STRING(255),
    usuario_cpf: {
        type: Sequelize.STRING(15),
        // unique: true
    },
    deleted: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

(() => {
    connection.sync({ alter: true });
})();

module.exports = Usuario;