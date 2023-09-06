const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.get('/', async (req, res) => {
    try {
        res.send(JSON.stringify(await usuarioController.listAll()));
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        res.send(JSON.stringify(await usuarioController.listOne(req.params.id)));
    } catch (error) {
        res.status(404).send({message: error.message});
    }
});

router.post('/', async (req, res) => {
    try {
        res.status(201).send(JSON.stringify(await usuarioController.createOne(req.body)));
    } catch (error) {
        res.status(405).send({message: error.message});
    }
});

module.exports = router;