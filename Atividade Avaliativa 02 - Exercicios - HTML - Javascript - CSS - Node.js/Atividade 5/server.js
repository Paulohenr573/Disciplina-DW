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
    const { nota1, nota2, nota3 } = req.body;
    const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
    const aprovado = media >= 6;

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
                <h1>Resultado Final</h1>
                <div class="result-box">
                    <p>Nota 1: ${parseFloat(nota1).toFixed(1)}</p>
                    <p>Nota 2: ${parseFloat(nota2).toFixed(1)}</p>
                    <p>Nota 3: ${parseFloat(nota3).toFixed(1)}</p>
                    <p class="media">Média: ${media.toFixed(1)}</p>
                    <img src="/images/${aprovado ? 'aprovado' : 'reprovado'}.png" alt="${aprovado ? 'Aprovado' : 'Reprovado'}" class="status-img">
                    <p class="status ${aprovado ? 'aprovado' : 'reprovado'}">${aprovado ? 'APROVADO' : 'REPROVADO'}</p>
                </div>
                <a href="/" class="btn">Novo Cálculo</a>
            </div>
        </body>
        </html>
    `);
});
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});