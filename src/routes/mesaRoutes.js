const express = require('express');
const router = express.Router();

const mesaController = require('../controllers/mesaController');

router.get('/', async (req, res) => {
    try {
        res.send(JSON.stringify(await mesaController.listAll()));
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        res.send(JSON.stringify(await mesaController.listOne(req.params.id)));
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

module.exports = router;