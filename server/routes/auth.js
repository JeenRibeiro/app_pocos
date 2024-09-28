// server/routes/auth.js
const express = require('express');
const router = express.Router();

// Rota de login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Aqui vai a lógica de validação de usuário/senha
  if (username === 'admin' && password === '12345') {
    res.json({ success: true, token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ success: false, message: 'Credenciais inválidas' });
  }
});

module.exports = router;
