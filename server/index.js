const express = require('express');
const bcrypt = require('bcrypt'); // Para hash de senhas
const jwt = require('jsonwebtoken'); // Para gerar tokens
const router = express.Router();
const db = require('./db'); // Supondo que você tenha um arquivo de conexão com o banco de dados

// Rota para autenticação
router.post('/auth', async (req, res) => {
    const { email, senha } = req.body;

    try {
        // Consulta o usuário no banco de dados
        const user = await db.query('SELECT * FROM usuarios cdWHERE email = $1', [email]);

        if (user.rowCount === 0) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        // Verifica a senha
        const isMatch = await bcrypt.compare(senha, user.rows[0].senha);
        
        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        // Gerar um token (opcional)
        const token = jwt.sign({ id: user.rows[0].id }, 'seu_segredo', { expiresIn: '1h' });

        return res.json({ token });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao autenticar', error });
    }
});

module.exports = router;
