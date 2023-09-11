const Sequelize = require('sequelize');
const connection = require('../database');

const Comanda = connection.define('comandas', {
    comanda_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    comanda_valor: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comanda_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    usuario_id: Sequelize.INTEGER,
    mesa_id: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});

(async () => {
    await connection.sync({ force: true });
})();

module.exports = Comanda;