const express = require('express');
const cors = require('cors');
const app = express();
const host = 'http://localhost';
const port = '8000';

const usuarioRoute = require('./routes/usuarioRoutes');

app.use(cors());
app.use(express.json());

app.use('/usuarios', usuarioRoute);

app.get("/", (req, res) => {
    res.send('Home');
});

app.listen(port, () => {
    console.log(`Server on: ${host}:${port}`);
});