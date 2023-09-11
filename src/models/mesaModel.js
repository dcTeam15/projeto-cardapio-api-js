const Sequelize = require('sequelize');
const connection = require('../database');
const Usuario = require('./usuarioModel');
const { toDefaultValue } = require('sequelize/types/utils');

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
       defaultvalue: 0

    },
    mesa_lugares: {
        type:Sequelize.INTEGER,
        allowNull: false,
        defaultvalue: 0

    },
    usuario_id: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,
    updateAt: Sequelize.DATE
});


(() =>{
    connection.sync({alter:true});
})();


module.exports = Mesa;
  


module.exports = Mesa;