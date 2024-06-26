const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const ClienteRoutes = require('./routes/ClienteRoutes');
const LoginRoutes = require('./routes/estudianteRoutes');
const fallasRoutes = require('./routes/fallasRoutes');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/Cliente', ClienteRoutes);
app.use('/estudiante', LoginRoutes);
app.use('/inasistencias', fallasRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
