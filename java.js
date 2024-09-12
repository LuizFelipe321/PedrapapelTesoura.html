function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    document.getElementById('imagem1').innerText = escolhaUsuario.charAt(0).toUpperCase() + escolhaUsuario.slice(1);
    document.getElementById('imagem2').innerText = escolhaComputador.charAt(0).toUpperCase() + escolhaComputador.slice(1);

    const resultadoTexto = document.getElementById('resultado-texto');
    const resultadoImagem = document.getElementById('resultado-imagem');

    let resultado = '';
    let imagemSrc = '';

    if (escolhaUsuario === escolhaComputador) {
        resultado = 'Empate!';
        imagemSrc = '';
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = 'Você ganhou!';
        imagemSrc = 'data:image/jpeg;base64,...';
    } else {
        resultado = 'Computador ganhou!';
        imagemSrc = 'data:image/jpeg;base64,...'; 
    }

    resultadoTexto.innerHTML = `<div class="fight">FIGHT</div><div>${resultado}</div>`;
    resultadoImagem.src = imagemSrc;

    imagemSrc = 'data:image/jpeg;base64,...';
    imagemSrc = 'https://via.placeholder.com/150';
}

function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    let resultado = '';

    if (escolhaUsuario === escolhaComputador) {
        resultado = `Empate! Ambos escolheram ${escolhaUsuario.charAt(0).toUpperCase() + escolhaUsuario.slice(1)}.`;
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = `Você ganhou! ${capitalize(escolhaUsuario)} vence ${capitalize(escolhaComputador)}.`;
    } else {
        resultado = `Computador ganhou! ${capitalize(escolhaComputador)} vence ${capitalize(escolhaUsuario)}.`;
    }

    document.getElementById('resultado').innerText = resultado;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}




