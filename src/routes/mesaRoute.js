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
        res.send(JSON.stringify(await mesaController.listOne()));
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});



