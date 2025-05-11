const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configuração para arquivos estáticos (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));
// Configuração para receber dados de formulários
app.use(express.urlencoded({ extended: true }));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para calcular a média
app.post('/calcular-media', (req, res) => {
    const { num1, num2, num3, num4 } = req.body;
    const media = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4)) / 4;
    res.send(`
        <h1>Resultado</h1>
        <p>A média é: ${media.toFixed(2)}</p>
        <a href="/">Voltar</a>
    `);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});