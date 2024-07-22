const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });
