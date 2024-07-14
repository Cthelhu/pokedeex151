const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

// Ruta de registro
router.post('/register', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, username, password: hashedPassword });
    await user.save();
    res.status(201).send('Usuario creado');
  } catch (error) {
    res.status(400).send('Error al crear usuario');
  }
});

// Ruta de inicio de sesión
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('Usuario no encontrado');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Contraseña incorrecta');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).send('Error en la autenticación');
  }
});

// Ruta protegida
router.get('/profile', authenticateToken, (req, res) => {
  res.json({
    message: 'Ruta protegida, acceso concedido',
    user: req.user
  });
});

module.exports = router;
