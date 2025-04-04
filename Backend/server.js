const express = require('express');
const { mongoConn } = require('./ConexionBD'); // Importamos la función correcta
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Importamos y usamos las rutas
app.use('/productora', require('./Router/ProductoraRou'));
app.use('/director', require('./Router/DirectorRou'));
app.use('/genero', require('./Router/GeneroRou'));
app.use('/tipo', require('./Router/TipoRou'));
app.use('/media', require('./Router/MediaRou'));

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// Llamamos la conexión a la base de datos antes de iniciar el servidor
mongoConn().then(() => {
    app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`);
    });
}).catch(error => {
    console.error('No se pudo conectar a la base de datos:', error);
});
