const Sequelize = require('sequelize');
const connection = require('../database');

const Mesa = connection.define('mesas', {
    mesa_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    mesa_numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    mesa_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    mesa_lugares: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    usuario_id: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});

(() => {
    connection.sync({ alter: true });
})();

module.exports = Mesa;