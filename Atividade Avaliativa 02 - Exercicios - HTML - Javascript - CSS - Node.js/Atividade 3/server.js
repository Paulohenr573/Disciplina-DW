const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configurações
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Rotas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/calcular', (req, res) => {
    const { tensao, corrente } = req.body;
    const resistencia = parseFloat(tensao) / parseFloat(corrente);

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Resultado</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="container">
                <h1>Lei de Ohm - Resultado</h1>
                <div class="result-box">
                    <p>Tensão (V): ${parseFloat(tensao).toFixed(2)} V</p>
                    <p>Corrente (A): ${parseFloat(corrente).toFixed(2)} A</p>
                    <p class="result">Resistência (Ω): ${resistencia.toFixed(2)} Ω</p>
                </div>
                <a href="/" class="btn">Novo Cálculo</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});