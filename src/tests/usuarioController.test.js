const usuarioController = require('../controllers/usuarioController');

describe('Usuario Controller', () => {
    expect('Teste Listar Todos ', () => {
        usuarioController.listAll();
    }).toBe([]);
});