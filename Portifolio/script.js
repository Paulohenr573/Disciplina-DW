// Carrossel de Imagens
let index = 0;
const items = document.querySelectorAll('.carousel-item');
let intervalId; // Variável para armazenar o ID do intervalo

function showItem(n) {
    items.forEach((item, i) => item.classList.toggle('active', i === n));
}

document.querySelector('.prev').onclick = () => {
    index = (index > 0) ? index - 1 : items.length - 1;
    showItem(index);
    resetInterval();// Reinicia o intervalo após a interação
}

document.querySelector('.next').onclick = () => {
    index = (index < items.length - 1) ? index + 1 : 0;
    showItem(index);
    resetInterval();// Reinicia o intervalo após a interação
}

// Função para iniciar o intervalo
function startInterval() {
  intervalId = setInterval(() => {
    index = (index < items.length - 1) ? index + 1 : 0;
    showItem(index);
  }, 3000); // Troca a imagem a cada 3 segundos
}

// Função para parar o intervalo
function stopInterval() {
  clearInterval(intervalId);
}

// Função para reiniciar o intervalo
function resetInterval() {
    stopInterval();
    startInterval();
}

// Inicia o intervalo ao carregar a página
startInterval();

// Validação do Formulário
const form = document.getElementById('formulario-contato');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        if (validateEmail(email)) { // Verifica o formato do e-mail
            alert('Formulário enviado com sucesso!');
            form.reset();
        } else {
            alert('Por favor, insira um endereço de e-mail válido.');
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Função para validar o formato do e-mail
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Animação ao rolar a página
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
    //Verifica se o botão de voltar ao topo está visivel e se a pessoa esta no topo da página.
    if (window.scrollY > 200) {
        document.getElementById("voltar-topo").style.display = "block";
    } else {
        document.getElementById("voltar-topo").style.display = "none";
    }
});
//Botão de voltar ao topo
document.getElementById("voltar-topo").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Rola suavemente até o topo
    });
});
