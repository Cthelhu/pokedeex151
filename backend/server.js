const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

app.use('/api/auth', authRoutes);

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('Servidor corriendo');
});

// Ruta de prueba de conexión
app.get('/api/test-connection', async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    res.send('Conexión a MongoDB exitosa');
  } catch (error) {
    res.status(500).send('Error al conectar a MongoDB: ' + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
