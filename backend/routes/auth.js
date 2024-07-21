// /routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Ruta de registro
router.post('/register', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('El correo ya está registrado');
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, username, password: hashedPassword });
    
    console.log('Preparándose para guardar el usuario:', user);
    await user.save();
    
    console.log('Usuario creado con éxito:', user);
    res.status(201).json({ message: 'Usuario creado con éxito' });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(400).json({ message: 'Error al crear usuario', error: error.message });
  }
});

// Ruta de inicio de sesión
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    console.log('Usuario encontrado:', user);

    if (!user) {
      console.log('Usuario no encontrado');
      return res.status(400).send('Usuario no encontrado');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Contraseña proporcionada:', password);
    console.log('Contraseña almacenada:', user.password);

    if (!isMatch) {
      console.log('Contraseña incorrecta');
      return res.status(400).send('Contraseña incorrecta');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, email: user.email, username: user.username }); // Incluye email y username en la respuesta
  } catch (error) {
    console.error('Error en la autenticación:', error);
    res.status(500).send('Error en la autenticación');
  }
});

module.exports = router;
