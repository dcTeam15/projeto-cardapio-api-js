const express = require('express');
const router = express.Router();

const usuarioController = require('./../controllers/usuarioController');

router.get('/', async (req, res) => {
    res.send(JSON.stringify(await usuarioController.listAll()));
});

module.exports = router;