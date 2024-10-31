let numeroMaximo = 100;
let numeroSecreto;
let tentativas = 0;
const maxTentativas = 10;

document.getElementById('startGame').addEventListener('click', startGame);
document.getElementById('startgame').addEventListener('click', startgame);
document.getElementById('submitGuess').addEventListener('click', submitGuess);

function startGame() {
    numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    document.getElementById('gameArea').classList.remove('hidden');
}

function startgame() {
    numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    tentativas = 0; // Reinicia as tentativas
    document.getElementById('gameArea').classList.remove('hidden');
    document.getElementById('feedback').innerText = '';
    document.getElementById('tentativasRestantes').innerText = `Tentativas restantes: ${maxTentativas}`;
    document.getElementById('question').innerText = `Estou pensando em um número entre 1 e ${numeroMaximo}. Você só tem ${maxTentativas} tentativas.`;
    document.getElementById('startgame').innerText = 'REINICIAR'; // Muda o texto do botão
}

function submitGuess() {
    const chute = parseInt(document.getElementById('guess').value);
    if (isNaN(chute) || chute < 1 || chute > numeroMaximo) {
        alert('Por favor, insira um número válido entre 1 e 100.');
        return;
    }

    tentativas++;
    const tentativasRestantes = maxTentativas - tentativas;

    if (chute === numeroSecreto) {
        const tentativasTexto = tentativas === 1 ? "tentativa" : "tentativas";
        document.getElementById('feedback').innerText = `Parabéns! Você acertou! O número secreto era ${numeroSecreto} e você descobriu em ${tentativas} ${tentativasTexto}!`;
    } else {
        document.getElementById('tentativasRestantes').innerText = `Tentativas restantes: ${tentativasRestantes}`;

        if (tentativas >= maxTentativas) {
            document.getElementById('feedback').innerText = `Você esgotou suas tentativas. O número secreto era ${numeroSecreto}.`;
            document.getElementById('gameArea').classList.add('hidden'); // Ocultar após as tentativas acabarem
            document.getElementById('startgame').innerText = 'Reiniciar Jogo'; // Restaura o texto para "Reiniciar"
        } else {
            document.getElementById('feedback').innerText = chute > numeroSecreto ? `O número secreto é menor que ${chute}.` : `O número secreto é maior que ${chute}.`;
        }
    }
}