const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao MongoDB
mongoose.connect('mongodb://mongo:27017/eventos', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.send('Bem-vindo à Casa de Eventos!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});