const Sequelize = require('sequelize');
const connection = new Sequelize('cardapio', 'root', '1234',{
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = connection;
