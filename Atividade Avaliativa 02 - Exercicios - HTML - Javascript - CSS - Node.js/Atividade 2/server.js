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
    const { precoUnitario, quantidade, desconto } = req.body;
    
    const precoTotal = parseFloat(precoUnitario) * parseFloat(quantidade);
    const precoFinal = precoTotal - parseFloat(desconto);

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
                <h1>Resultado da Venda</h1>
                <p>Preço Unitário: R$ ${parseFloat(precoUnitario).toFixed(2)}</p>
                <p>Quantidade: ${quantidade}</p>
                <p>Desconto: R$ ${parseFloat(desconto).toFixed(2)}</p>
                <p class="total">Preço Final: R$ ${precoFinal.toFixed(2)}</p>
                <a href="/">Voltar</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});