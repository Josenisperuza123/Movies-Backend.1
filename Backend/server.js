const express = require('express')
const { getConnection } = require('./ConexionBD')
const cors = require('cors');
require('dotenv').config()
  
  
const app = express()
const port = process.env.PORT;
  
app.use(cors());
  
getConnection();
  
app.use(express.json());
  
app.use('/productora', require('./Router/ProductoraRou'));
app.use('/director', require('./Router/DirectorRou'));
app.use('/genero', require('./Router/GeneroRou'));
app.use('/tipo', require('./Router/TipoRou'));
app.use('/media', require('./Router/MediaRou'));

app.get('/', (req, res) => {
  res.send('servidor funcionando');
}),
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})