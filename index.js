const express = require('express');
const cors = require('cors');
const app = express();
const host = 'http://localhost';
const port = '8000';

const usuarioRoute = require('./src/routes/usuarioRoutes');
const mesaRoute = require('./src/routes/mesaRoutes');

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send('Home');
});

app.use('/usuarios', usuarioRoute);
app.use('/mesas', mesaRoute);

app.listen(port, () => {
    console.log(`Server on: ${host}:${port}`);
});