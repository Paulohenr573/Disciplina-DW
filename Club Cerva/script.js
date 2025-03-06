
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const [dia, mes, ano] = dataNascimento.split("/");
    const nascimento = new Date(`${ano}-${mes}-${dia}`);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const diferencaMes = hoje.getMonth() - nascimento.getMonth();
    if (diferencaMes < 0 || (diferencaMes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}


function formatarData(data) {
    const valor = data.replace(/\D/g, ""); 
    const partes = valor.match(/(\d{1,2})(\d{1,2})?(\d{1,4})?/); 
    if (partes) {
        const dia = partes[1];
        const mes = partes[2] || "";
        const ano = partes[3] || "";
        return `${dia}${mes ? "/" + mes : ""}${ano ? "/" + ano : ""}`; 
    }
    return data; 
}

function validarIdade() {
    let dataNascimento;
    let idadeValida = false;

    while (!idadeValida) {
        dataNascimento = prompt("Por favor, informe sua data de nascimento no formato DD/MM/AAAA:");
        
        if (dataNascimento) {
            dataNascimento = formatarData(dataNascimento);
            
            if (/^\d{2}\/\d{2}\/\d{4}$/.test(dataNascimento)) {
                const idade = calcularIdade(dataNascimento);
                
                if (idade >= 18) {
                    alert(`Você tem ${idade} anos. Bom tour!`);
                    idadeValida = true; 
                } else {
                    alert(`Você tem apenas ${idade} anos. Desculpe, mas esse site não é para você. Por favor, saia.`);
                }
            } else {
                alert("Por favor, insira uma data válida no formato DD/MM/AAAA.");
            }
        } else {
            alert("Data de nascimento não informada.");
        }
    }
}


if (window.location.pathname.includes('index.html')) {
    window.onload = validarIdade;
}


function buscarCEP(callback) {
    var end = document.getElementById('cep').value;  
    var ajax = new XMLHttpRequest();

    ajax.open('GET', 'https://viacep.com.br/ws/' + end + '/json/', true);
    ajax.send();

    ajax.onload = function () {
        if (ajax.status == 200) {  
            var obj = JSON.parse(this.responseText);  
            var logradouro = obj.logradouro;
            var cidade = obj.localidade;
            var estado = obj.uf;

            document.getElementById('texto').innerHTML = "Logradouro: " + logradouro
                + "<br>Cidade: " + cidade + "<br>Estado: " + estado;

            callback(true);
        } else {
            document.getElementById('texto').innerHTML = "Erro ao buscar endereço!";
            callback(false);
        }
    };
}


function comprarProduto() {
    buscarCEP(function (sucesso) {
        if (sucesso) {
            alert("Produto comprado!");
        } else {
            alert("Não foi possível completar a compra. Verifique o CEP e tente novamente.");
        }
    });
}


let carrinho = [];

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    abrirCarrinho();
}

function abrirCarrinho() {
    const carrinhoWindow = window.open('', 'Carrinho', 'width=400,height=400');
    
    
    carrinhoWindow.document.write(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Carrinho de Compras</title>
        </head>
        <body>
            <div id="carrinho"></div>
            <script>
                // Função para atualizar o conteúdo do carrinho
                function atualizarCarrinho() {
                    const carrinho = ${JSON.stringify(carrinho)};  // Passando os itens do carrinho para o pop-up
                    const carrinhoDiv = document.getElementById('carrinho');
                    carrinhoDiv.innerHTML = "<h4>Itens no Carrinho:</h4>";
                    
                    if (carrinho.length === 0) {
                        carrinhoDiv.innerHTML += "<p>Carrinho vazio.</p>";
                        return;
                    }
                    
                    let total = 0;
                    carrinho.forEach(item => {
                        carrinhoDiv.innerHTML += \`<p>\${item.produto} - R$ \${item.preco.toFixed(2)}</p>\`;
                        total += item.preco;
                    });
                    
                    carrinhoDiv.innerHTML += \`<h4>Total: R$ \${total.toFixed(2)}</h4>\`;
                }

                // Chama a função de atualização assim que o conteúdo for carregado
                window.onload = atualizarCarrinho;
            </script>
        </body>
        </html>
    `);

    carrinhoWindow.document.close();  
}



function atualizarCarrinho() {
    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.innerHTML = "<h4>Itens no Carrinho:</h4>";
    
    if (carrinho.length === 0) {
        carrinhoDiv.innerHTML += "<p>Carrinho vazio.</p>";
        return;
    }
    
    let total = 0;
    carrinho.forEach(item => {
        carrinhoDiv.innerHTML += `<p>${item.produto} - R$ ${item.preco.toFixed(2)}</p>`;
        total += item.preco;
    });
    
    carrinhoDiv.innerHTML += `<h4>Total: R$ ${total.toFixed(2)}</h4>`;
}
