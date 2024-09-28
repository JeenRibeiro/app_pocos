const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Você pode usar a porta que preferir

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
